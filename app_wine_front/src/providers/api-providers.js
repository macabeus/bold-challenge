import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../contexts/api-context'
import { getWines } from '../network/wines'

const useWinesList = () => {
  const winesListStates = {
    error: data => ({ data, status: 'error' }),
    loaded: data => ({ data, status: 'loaded' }),
    starting: { data: null, status: 'starting' },
  }

  const [winesListState, setWinesListState] = useState(winesListStates.starting)

  useEffect(() => {
    const fetchWines = async () => {
      const [status, data] = await getWines()

      if (status === 'ok') {
        setWinesListState(winesListStates.loaded(data))
        return
      }

      setWinesListState(winesListStates.error(data))
    }

    fetchWines()
  }, []) /* it should run only once */ // eslint-disable-line react-hooks/exhaustive-deps

  return winesListState
}

const ApiProvider = ({ children }) => {
  const winesListState = useWinesList()

  return (
    <ApiContext.Provider
      value={{
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
