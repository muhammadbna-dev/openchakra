import { AntdComponentType } from './antd/types'
import { ChakraComponentType, ChakraMetaComponentType } from './chakra/types'

export type ComponentType = ChakraComponentType | AntdComponentType
export type MetaComponentType = ChakraMetaComponentType

export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

export type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>
