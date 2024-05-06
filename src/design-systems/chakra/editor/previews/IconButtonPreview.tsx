import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import { IconButton } from '@chakra-ui/react'
import { getIconList } from '~design-systems/factory'
import { IComponent } from '~react-app-env'

interface Props {
  component: IComponent
}

const IconButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { icon, ...props },
    ref,
  } = useInteractive(component, true)

  const icons = getIconList()

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      const Icon = icons[icon as keyof typeof icons]
      return <IconButton ref={ref} icon={<Icon path="" />} {...props} />
    }
    return null
  }

  return null
}

export default IconButtonPreview
