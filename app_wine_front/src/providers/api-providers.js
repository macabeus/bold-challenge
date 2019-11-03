import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../contexts/api-context'
import { getWines, postWine } from '../network/wines'

const winesListStates = {
  error: { data: [], status: 'error' },
  loaded: data => ({ data, status: 'loaded' }),
  starting: { data: [], status: 'starting' },
}

const winesListReducer = (state, action) => {
  switch (action.type) {
    case 'initial':
      return winesListStates.loaded(action.data)

    case 'error':
      return winesListStates.error

    case 'add':
      return winesListStates.loaded([action.data, ...state.data])

    default:
      // eslint-disable-next-line no-console
      console.warn(`winesListReducer unexpected action: ${action}`)
      return state
  }
}

const ApiProvider = ({ children }) => {
  const [winesListState, dispatch] = useReducer(
    winesListReducer, winesListStates.starting
  )

  const addNewWine = async (newWine) => {
    const [status, data] = await postWine(newWine)

    if (status === 'ok') {
      dispatch({ data, type: 'add' })
      return ['ok', data]
    }

    return ['error', data]
  }

  useEffect(() => {
    const fetchWines = async () => {
      const [status, data] = await getWines()

      if (status === 'ok') {
        dispatch({ data, type: 'initial' })
        return
      }

      dispatch({ type: 'error' })
    }

    fetchWines()
  }, []) /* it should run only once */ // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ApiContext.Provider
      value={{
        addNewWine,
        winesListState,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ApiProvider
