import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { Box, Highlight } from '@chakra-ui/react'
import { IPreviewProps } from '~react-app-env'

const HighlightPreview: React.FC<IPreviewProps> = ({ component }) => {
  const { props, ref } = useInteractive(component, true, true)

  return (
    <Box {...props} ref={ref}>
      <Highlight {...component.props} styles={component.props} />
    </Box>
  )
}

export default HighlightPreview
