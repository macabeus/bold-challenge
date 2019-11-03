import React from 'react'
import { Alert } from 'former-kit'
import WarningIcon from 'emblematic-icons/svg/Warning32.svg'

const ErrorState = () => (
  <Alert
    type="error"
    icon={<WarningIcon height={16} width={16} />}
  >
    <p>Error when tried to load the wines data from server!</p>
  </Alert>
)

export default ErrorState
