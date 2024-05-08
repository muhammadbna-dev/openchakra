import { DatePicker } from 'antd/lib'
import React, { memo } from 'react'
import PreviewContainer from '~design-systems/PreviewContainer'

const AntdComponentPreview = ({ component, type, ...forwardedProps }) => {
  switch (type) {
    case 'DatePicker':
      return (
        <PreviewContainer
          component={component}
          type={() => <DatePicker />}
          {...forwardedProps}
          isBoxWrapped
        ></PreviewContainer>
      )

    default:
      return null
  }
}

export default memo(AntdComponentPreview)
