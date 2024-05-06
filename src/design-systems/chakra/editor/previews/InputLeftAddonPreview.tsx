import React from 'react'
import { Box, InputLeftAddon } from '@chakra-ui/react'
import { useInteractive } from '~hooks/useInteractive'
import { IComponent } from '~react-app-env'

const InputLeftAddonPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { props, ref } = useInteractive(component)
  const boxProps: any = {}

  return (
    <Box {...boxProps} ref={ref}>
      <InputLeftAddon {...props} />
    </Box>
  )
}

export default InputLeftAddonPreview
