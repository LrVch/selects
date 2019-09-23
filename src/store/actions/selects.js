export const SELECT_SET_SELECTED = 'ROOT_SELECT_SET_SELECTED'

export const rootSelectSetSelected = (value, tableId) => ({
  type: SELECT_SET_SELECTED,
  payload: { value, tableId }
})
