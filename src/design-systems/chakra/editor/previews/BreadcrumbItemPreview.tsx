import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '../../../ComponentPreview'
import { BreadcrumbItem } from '@chakra-ui/react'
import { ChakraComponentType } from '~design-systems/chakra/types'
import { IPreviewProps } from '~react-app-env'

const BreadcrumbItemPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = ['BreadcrumbLink'] as ChakraComponentType[]
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <BreadcrumbItem {...props} ref={drop(ref)}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </BreadcrumbItem>
  )
}

export default BreadcrumbItemPreview
