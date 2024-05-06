import { DatePickerProps } from 'antd'
import { AntdComponentType } from './types'

type PropsWithForm<T> = T & { form?: T }

type PreviewDefaultProps = {
  DatePicker?: PropsWithForm<DatePickerProps>
}

export const DEFAULT_PROPS: PreviewDefaultProps = {
  DatePicker: {},
}

export const getDefaultProps = (type: AntdComponentType) => {
  return { ...DEFAULT_PROPS[type] }
}
