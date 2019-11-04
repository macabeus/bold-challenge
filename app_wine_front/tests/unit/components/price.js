import React from 'react'
import { render } from '@testing-library/react'
import test from 'ava'
import Price from '../../../src/components/price'

test('Component Price with 123456789 cents', (t) => {
  const { container } = render(
    <Price cents={123456789} />
  )

  const { textContent } = container

  t.deepEqual(textContent, '€1,234,567.89')
})
