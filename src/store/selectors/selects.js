import { createSelector } from 'reselect'

export const selectsState = state => state.selects

// export const getTables = createSelector(
//   selectsState,
//   selectsState => selectsState.tables
// )

export const getSectionsToReset = createSelector(
  selectsState,
  selectsState => selectsState.sectionsToReset
)

export const getTableById = (state, tabelId) => {
  return selectsState(state).tables[tabelId]
}

export const getParentTableId = (state, tabelId) => {
  return getTableById(state, tabelId).parentTableId
}

export const getParentTableSelected = (state, tabelId) => {
  const parentId = getParentTableId(state, tabelId)
  return parentId && getTableById(state, parentId).selected
}

export const getItemsByTableId = createSelector(
  [getTableById, getParentTableId, getParentTableSelected],
  (table, parentTableId, getParentTableSelected) => {

    if (!parentTableId) {
      // console.log(table.items)
      return table.items
    } else if (!!(parentTableId && getParentTableSelected)) {
      const filtered = table.items.filter(item => {
        return item.parentid ? item.parentid === getParentTableSelected : item
      })

      // return filtered.length > 1 ? filtered : []
      return filtered
    } else {
      // console.log('other')
      return [{
        key: 'None',
        text: 'No selected',
        value: 'None',
      },]
    }
  }
)

export const getInitialState = createSelector(
  selectsState,
  selectsState => selectsState.initialState
)