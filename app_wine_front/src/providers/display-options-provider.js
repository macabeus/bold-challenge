import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DisplayOptionsContext from '../contexts/display-options-context'

const DisplayOptionsProvider = ({
  children,
  orderBy: defaultOrderBy,
  sortBy: defaultSortBy,
}) => {
  const [orderBy, setOrderBy] = useState(defaultOrderBy)
  const [sortBy, setSortBy] = useState(defaultSortBy)

  const sortFunc = {
    asc: {
      name: (wineA, wineB) => wineA.name.toLocaleUpperCase().localeCompare(
        wineB.name.toLocaleUpperCase()
      ),
      price: (wineA, wineB) => wineA.price - wineB.price,
      vineyard: (wineA, wineB) => (
        wineA.vineyard.toLocaleUpperCase().localeCompare(
          wineB.vineyard.toLocaleUpperCase()
        )
      ),
      year: (wineA, wineB) => wineA.year - wineB.year,
    },
    desc: {
      name: (wineA, wineB) => wineB.name.toLocaleUpperCase().localeCompare(
        wineA.name.toLocaleUpperCase()
      ),
      price: (wineA, wineB) => wineB.price - wineA.price,
      vineyard: (wineA, wineB) => (
        wineB.vineyard.toLocaleUpperCase().localeCompare(
          wineA.vineyard.toLocaleUpperCase()
        )
      ),
      year: (wineA, wineB) => wineB.year - wineA.year,
    },
  }

  return (
    <DisplayOptionsContext.Provider
      value={{
        orderBy,
        setOrderBy,
        setSortBy,
        sortBy,
        sortFunc: sortFunc[orderBy][sortBy],
      }}
    >
      {children}
    </DisplayOptionsContext.Provider>
  )
}

DisplayOptionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  orderBy: PropTypes.string,
  sortBy: PropTypes.string,
}

DisplayOptionsProvider.defaultProps = {
  orderBy: 'asc',
  sortBy: 'name',
}

export default DisplayOptionsProvider
