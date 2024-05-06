import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '../../../ComponentPreview'
import { Box, Breadcrumb } from '@chakra-ui/react'
import { ChakraComponentType } from '~design-systems/chakra/types'
import { IPreviewProps } from '~react-app-env'

const BreadcrumbPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = [
    'BreadcrumbItem',
    'BreadcrumbLink',
  ] as ChakraComponentType[]
  const { props, ref } = useInteractive(component, false)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <Breadcrumb {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Breadcrumb>
    </Box>
  )
}

export default BreadcrumbPreview
