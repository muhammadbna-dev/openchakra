import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { getComponentBy } from '~core/selectors/components'
import {
  ANTD_DESIGN_SYSTEM_TYPE,
  CHAKRA_DESIGN_SYSTEM_TYPE,
  getDesignSystemByType,
} from './factory'
import ChakraComponentPreview from './chakra/editor/ChakraComponentPreview'
import AntdComponentPreview from './antd/editor/AntdComponentPreview'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null
  const designSystem = getDesignSystemByType(type)

  if (designSystem === CHAKRA_DESIGN_SYSTEM_TYPE) {
    return (
      <ChakraComponentPreview
        component={component}
        type={type}
        {...forwardedProps}
      />
    )
  } else if (designSystem === ANTD_DESIGN_SYSTEM_TYPE) {
    return (
      <AntdComponentPreview
        component={component}
        type={type}
        {...forwardedProps}
      />
    )
  }

  return null
}

export default memo(ComponentPreview)
