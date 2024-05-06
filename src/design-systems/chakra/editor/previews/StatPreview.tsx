import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import {
  Box,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import ComponentPreview from '../../../ComponentPreview'
import { ChakraComponentType } from '~design-systems/chakra/types'
import { IPreviewProps } from '~react-app-env'

const acceptedTypesStat: ChakraComponentType[] = [
  'StatLabel',
  'StatNumber',
  'StatHelpText',
]

const acceptedTypesGroup: ChakraComponentType[] = ['Stat']

const acceptedTypesHelp: ChakraComponentType[] = ['StatArrow']

const StatGroupPreview: React.FC<IPreviewProps> = ({ component }) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypesGroup)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <StatGroup ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </StatGroup>
  )
}

export const StatPreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypesStat)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Stat ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </Stat>
  )
}

export const StatHelpTextPreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypesHelp)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <StatHelpText ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </StatHelpText>
  )
}

export default StatGroupPreview
