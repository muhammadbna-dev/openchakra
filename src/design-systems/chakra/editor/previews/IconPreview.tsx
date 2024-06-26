import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import { Box } from '@chakra-ui/react'
import { getIconList } from '~design-systems/factory'
import { IComponent } from '~react-app-env'

interface Props {
  component: IComponent
}

const IconPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { color, boxSize, icon, ...props },
  } = useInteractive(component, true)

  const icons = getIconList()

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      const Icon = icons[icon as keyof typeof icons]
      return (
        <Box {...props} display="inline">
          <Icon path="" color={color} boxSize={boxSize} />
        </Box>
      )
    }
    return null
  }

  return null
}

export default IconPreview
