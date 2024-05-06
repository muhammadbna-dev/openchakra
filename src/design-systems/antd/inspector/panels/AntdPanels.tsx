import React, { memo } from 'react'

import DatePickerPanel from './components/DatePickerPanel'

const AntdPanels = ({ type }) => {
  console.log(type)
  return <>{type === 'DatePicker' && <DatePickerPanel />}</>
}

export default memo(AntdPanels)
