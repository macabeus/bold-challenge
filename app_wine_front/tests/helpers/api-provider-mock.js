import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({ children, winesListState }) => (
  <ApiContext.Provider
    value={{
      winesListState,
    }}
  >
    {children}
  </ApiContext.Provider>
)

ApiProviderMock.propTypes = {
  children: PropTypes.node.isRequired,
  winesListState: PropTypes.shape({
    data: PropTypes.array,
  }),
}

ApiProviderMock.defaultProps = {
  winesListState: {},
}

export default ApiProviderMock
