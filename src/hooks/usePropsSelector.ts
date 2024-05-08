import { useSelector } from 'react-redux'
import { RootState } from '~core/store'
import { useInspectorUpdate } from '~contexts/inspector-context'
import { useEffect } from 'react'
import { getDefaultPropsByType } from '~design-systems/factory'

const usePropsSelector = (propsName: string) => {
  const { addActiveProps } = useInspectorUpdate()

  useEffect(() => {
    // Register form props name for custom props panel
    addActiveProps(propsName)
  }, [addActiveProps, propsName])

  const value = useSelector((state: RootState) => {
    const component =
      state.components.present.components[state.components.present.selectedId]
    const propsValue = component.props[propsName]

    if (propsValue !== undefined) {
      return propsValue
    }

    if (getDefaultPropsByType(component.type)[propsName] !== undefined) {
      return getDefaultPropsByType(component.type)[propsName]
    }

    return ''
  })

  return value
}

export default usePropsSelector
