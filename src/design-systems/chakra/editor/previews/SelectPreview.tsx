import React, { useMemo } from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { Select } from '@chakra-ui/react'
import { getIconList } from '~design-systems/factory'
import { IComponent } from '~react-app-env'

interface IProps {
  component: IComponent
}

const SelectPreview = ({ component }: IProps) => {
  const {
    props: { icon, ...props },
  } = useInteractive(component)

  const iconsList = getIconList()

  const Icon = useMemo(() => {
    if (!icon) {
      return null
    }
    return iconsList[icon as keyof typeof iconsList]
  }, [icon])

  return (
    <Select {...props} icon={Icon ? <Icon path="" /> : undefined}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  )
}

export default SelectPreview
