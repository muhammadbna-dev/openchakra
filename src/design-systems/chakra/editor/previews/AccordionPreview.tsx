import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import ComponentPreview from '../../../ComponentPreview'
import { ACCORDION_WHITE_LIST } from '~design-systems/chakra/componentsList'
import { ChakraComponentType } from '~design-systems/chakra/types'
import { IPreviewProps } from '~react-app-env'

const acceptedTypes: ChakraComponentType[] = ['AccordionItem']

const AccordionPreview: React.FC<IPreviewProps> = ({ component }) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <Accordion {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Accordion>
    </Box>
  )
}

export const AccordionButtonPreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, ACCORDION_WHITE_LIST)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <AccordionButton ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </AccordionButton>
  )
}

export const AccordionItemPreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, ACCORDION_WHITE_LIST)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <AccordionItem {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </AccordionItem>
    </Box>
  )
}

export const AccordionPanelPreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, ACCORDION_WHITE_LIST)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <AccordionPanel {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </AccordionPanel>
    </Box>
  )
}

export default AccordionPreview
