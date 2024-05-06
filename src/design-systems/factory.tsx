import ComponentPreview from './ComponentPreview'
import {
  componentsList,
  menuItems,
  ROOT_COMPONENTS,
} from './chakra/componentsList'
import iconsList from './chakra/iconsList'
import { DEFAULT_PROPS, getDefaultProps } from './chakra/defaultProps'
import { CHAKRA_PACKAGE_JSON_DEPS } from './chakra/code'
import {
  ANTD_COMPONENT_LIST,
  ANTD_MENU_ITEMS,
  ANTD_ROOT_COMPONENTS,
} from './antd/componentsList'
import { ANTD_ICON_LIST } from './antd/iconsList'
import {
  DEFAULT_PROPS as ANTD_DEFAULT_PROPS,
  getDefaultProps as antdGetDefaultProps,
} from './antd/defaultProps'
import { ANTD_PACKAGE_JSON_DEPS } from './antd/code'
import { IoMdReturnLeft } from 'react-icons/io'
import Panels from './Panels'

export const CHAKRA_DESIGN_SYSTEM_TYPE = 'chakra'
export const ANTD_DESIGN_SYSTEM_TYPE = 'antd'
type DesignSystemType =
  | typeof CHAKRA_DESIGN_SYSTEM_TYPE
  | typeof ANTD_DESIGN_SYSTEM_TYPE

export const getComponentList = () => [
  ...componentsList,
  ...ANTD_COMPONENT_LIST,
]

export const getRootComponents = () => [
  ...ROOT_COMPONENTS,
  ...ANTD_ROOT_COMPONENTS,
]

// TODO: Potential for conflict
export const getIconList = () => ({ ...iconsList, ...ANTD_ICON_LIST })

// TODO: Potential for conflict
export const getMenuItems = () => ({ ...menuItems, ...ANTD_MENU_ITEMS })

export const getComponentPreview = props => {
  return <ComponentPreview {...props} />
}

export const getPanels = props => {
  return <Panels {...props} />
}

// TODO: Potential for conflict
export const getAllDefaultProps = () => ({
  ...DEFAULT_PROPS,
  ...ANTD_DEFAULT_PROPS,
})

// TODO: Potential for conflict
export const getDefaultPropsByType = type => {
  try {
    return getDefaultProps(type)
  } catch {
    return antdGetDefaultProps(type)
  }
}

export const getPackageJsonDeps = (designSystems: DesignSystemType[]) => {
  let deps = ''
  designSystems.forEach(item => {
    if (item === CHAKRA_DESIGN_SYSTEM_TYPE) {
      deps += CHAKRA_PACKAGE_JSON_DEPS
    } else if (item === ANTD_DESIGN_SYSTEM_TYPE) {
      deps += ANTD_PACKAGE_JSON_DEPS
    }
  })
  return deps
}

export const getAppCode = (
  designSystems,
  imports,
  iconImports,
  componentCodes,
  code,
) => {
  const appCodeArray = [`import React from 'react';`]
  if (designSystems.includes(CHAKRA_DESIGN_SYSTEM_TYPE)) {
    appCodeArray.push(
      `import { ChakraProvider, ${imports
        .filter(
          item => getDesignSystemByType(item) === CHAKRA_DESIGN_SYSTEM_TYPE,
        )
        .join(',')} } from "@chakra-ui/react";`,
    )
    // TODO: iconImports is assumed to be only Chakra
    if (iconImports.length) {
      appCodeArray.push(
        `import { ${iconImports.join(',')} } from "@chakra-ui/icons";`,
      )
    }
  }
  if (designSystems.includes(ANTD_DESIGN_SYSTEM_TYPE)) {
    appCodeArray.push(
      `import { ${imports
        .filter(item => getDesignSystemByType(item) === ANTD_DESIGN_SYSTEM_TYPE)
        .join(',')} } from "antd"`,
    )
  }

  appCodeArray.push('\n')

  appCodeArray.push(`${componentCodes}`)

  appCodeArray.push('\n')

  appCodeArray.push(`const App = () => (`)
  if (designSystems.includes(CHAKRA_DESIGN_SYSTEM_TYPE)) {
    appCodeArray.push('<ChakraProvider resetCSS>')
  }
  appCodeArray.push(`<>`)
  appCodeArray.push(`${code}`)
  appCodeArray.push(`</>`)

  if (designSystems.includes(CHAKRA_DESIGN_SYSTEM_TYPE)) {
    appCodeArray.push('</ChakraProvider>')
  }
  appCodeArray.push(');')
  appCodeArray.push('\n')
  appCodeArray.push('export default App;')

  return appCodeArray.join('\n')
}

// TODO: Not exactly a factor function..
export const getDesignSystemByType = (type: ComponentType) => {
  if (componentsList.includes(type)) {
    return CHAKRA_DESIGN_SYSTEM_TYPE
  } else if (ANTD_COMPONENT_LIST.includes(type)) {
    return ANTD_DESIGN_SYSTEM_TYPE
  } else {
    return ''
  }
}
