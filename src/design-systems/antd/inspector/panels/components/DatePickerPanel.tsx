import React, { memo } from 'react'
import usePropsSelector from '~hooks/usePropsSelector'
import SizeControl from '~components/inspector/controls/SizeControl'

const DatePickerPanel = () => {
  const size = usePropsSelector('size')

  return (
    <>
      <SizeControl
        label="Size"
        options={['large', 'middle', 'small']}
        value={size}
      />
    </>
  )
}

export default memo(DatePickerPanel)
