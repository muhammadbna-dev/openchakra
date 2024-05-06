import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import { Alert, Box } from '@chakra-ui/react'
import ComponentPreview from '../../../ComponentPreview'
import { ChakraComponentType } from '~design-systems/chakra/types'
import { IPreviewProps } from '~react-app-env'

const AlertPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = [
    'AlertIcon',
    'AlertTitle',
    'AlertDescription',
  ] as ChakraComponentType[]
  const { props, ref } = useInteractive(component, false)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <Alert {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Alert>
    </Box>
  )
}

export default AlertPreview
