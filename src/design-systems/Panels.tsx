import React, { memo } from 'react'

import { IComponent } from '~react-app-env'
import {
  ANTD_DESIGN_SYSTEM_TYPE,
  CHAKRA_DESIGN_SYSTEM_TYPE,
  getDesignSystemByType,
} from './factory'
import ChakraPanels from './chakra/inspector/panels/ChakraPanels'
import AntdPanels from './antd/inspector/panels/AntdPanels'

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const { type } = component

  if (isRoot) {
    return null
  }

  const designSystem = getDesignSystemByType(type)

  if (designSystem === CHAKRA_DESIGN_SYSTEM_TYPE) {
    return <ChakraPanels type={type} />
  } else if (designSystem === ANTD_DESIGN_SYSTEM_TYPE) {
    return <AntdPanels type={type} />
  }

  return null
}

export default memo(Panels)
