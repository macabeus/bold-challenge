import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({ addNewWine, children, winesListState }) => (
  <ApiContext.Provider
    value={{
      addNewWine,
      winesListState,
    }}
  >
    {children}
  </ApiContext.Provider>
)

ApiProviderMock.propTypes = {
  addNewWine: PropTypes.func,
  children: PropTypes.node.isRequired,
  winesListState: PropTypes.shape({
    data: PropTypes.array,
  }),
}

ApiProviderMock.defaultProps = {
  addNewWine: () => {},
  winesListState: {},
}

export default ApiProviderMock
