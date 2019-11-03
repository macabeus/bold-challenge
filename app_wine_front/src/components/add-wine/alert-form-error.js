import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'former-kit'
import WarningIcon from 'emblematic-icons/svg/Warning32.svg'

const AlertFormError = ({ message }) => (
  <Alert
    type="error"
    icon={<WarningIcon height={16} width={16} />}
  >
    <p>{message}</p>
  </Alert>
)

AlertFormError.propTypes = {
  message: PropTypes.string.isRequired,
}

export default AlertFormError
