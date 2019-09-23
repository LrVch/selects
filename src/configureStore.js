import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/reducers'

export default function configureStore(initialState = {}) {
  const middlewares = []

  return {
    store: createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )
  }
}