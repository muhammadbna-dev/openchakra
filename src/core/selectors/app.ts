import { RootState } from '~core/store'
import { IComponent } from '~react-app-env'

export const getShowLayout = (state: RootState) => state.app.showLayout

export const getShowCode = (state: RootState) => state.app.showCode

export const getFocusedComponent = (id: IComponent['id']) => (
  state: RootState,
) => state.app.inputTextFocused && state.components.present.selectedId === id

export const getInputTextFocused = (state: RootState) =>
  state.app.inputTextFocused
