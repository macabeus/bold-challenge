import React, { useContext } from 'react'
import ApiContext from '../../contexts/api-context'
import LoadedWines from './loaded-wines'
import './style.css'

const Main = () => {
  const { winesListState } = useContext(ApiContext)

  const status = {
    loaded: () => <LoadedWines />,
    starting: () => <h6>Loading wines...</h6>,
  }

  return React.createElement(status[winesListState.status])
}

export default Main
