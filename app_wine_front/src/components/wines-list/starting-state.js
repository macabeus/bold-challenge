import React from 'react'
import { Alert } from 'former-kit'
import IconInfo from 'emblematic-icons/svg/Info32.svg'

const StartingState = () => (
  <Alert
    type="info"
    icon={<IconInfo height={16} width={16} />}
  >
    <p>Loading wines from server...</p>
  </Alert>
)

export default StartingState
