import React from 'react'
import { Alert } from 'former-kit'
import IconInfo from 'emblematic-icons/svg/Info32.svg'

const EmptyState = () => (
  <Alert
    type="info"
    icon={<IconInfo height={16} width={16} />}
  >
    <p>Empty wine list!</p>
  </Alert>
)

export default EmptyState
