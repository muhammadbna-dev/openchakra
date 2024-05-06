import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  Button,
  LightMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  LinkProps,
  MenuItemProps,
  MenuButtonProps,
  ButtonProps,
  Portal,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type MenuItemLinkProps = MenuItemProps | LinkProps

// Ignore because of AS typing issues
// @ts-ignore
const MenuItemLink: React.FC<MenuItemLinkProps> = React.forwardRef(
  (props, ref: React.Ref<HTMLLinkElement>) => {
    // @ts-ignore
    return <MenuItem ref={ref} as="a" {...props} />
  },
)

MenuItemLink.displayName = 'MenuItemLink'

// @ts-ignore
const CustomMenuButton: React.FC<
  MenuButtonProps | ButtonProps
> = React.forwardRef((props, ref: React.Ref<HTMLLinkElement>) => {
  // @ts-ignore
  return <MenuButton as={Button} {...props} />
})

CustomMenuButton.displayName = 'CustomMenuButton'

const ExportMenuItem = dynamic(() => import('./ExportMenuItem'), { ssr: false })
const ImportMenuItem = dynamic(() => import('./ImportMenuItem'), { ssr: false })

const HeaderMenu = () => {
  return (
    <Menu placement="bottom">
      <CustomMenuButton
        rightIcon={<ChevronDownIcon path="" />}
        size="xs"
        variant="ghost"
        colorScheme="gray"
      >
        Editor
      </CustomMenuButton>
      <Portal>
        <LightMode>
          <MenuList bg="white" zIndex={999}>
            <ExportMenuItem />
            <ImportMenuItem />
          </MenuList>
        </LightMode>
      </Portal>
    </Menu>
  )
}

export default memo(HeaderMenu)
