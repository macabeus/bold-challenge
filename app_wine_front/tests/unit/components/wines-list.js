import React from 'react'
import { render } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import WinesList from '../../../src/components/wines-list'

test('Component WinesList when is still loading data from server', (t) => {
  const { container } = render(
    <ApiProviderMock
      winesListState={{
        data: null,
        status: 'starting',
      }}
    >
      <WinesList />
    </ApiProviderMock>
  )

  const alertElements = container.querySelector('div')
  const cardWineElements = container.querySelectorAll('.cardWine')

  t.deepEqual(alertElements.textContent, 'Loading wines from server...')
  t.deepEqual(cardWineElements.length, 0)
})

test('Component WinesList when is empty state', (t) => {
  const { container } = render(
    <ApiProviderMock
      winesListState={{
        data: [],
        status: 'loaded',
      }}
    >
      <WinesList />
    </ApiProviderMock>
  )

  const alertElements = container.querySelector('div')
  const cardWineElements = container.querySelectorAll('.cardWine')

  t.deepEqual(alertElements.textContent, 'Empty wine list!')
  t.deepEqual(cardWineElements.length, 0)
})

test('Component WinesList when is filled', (t) => {
  const winesDataMock = [
    {
      name: 'Branco',
      price: 1900,
      vineyard: 'Porto',
      year: 2019,
    },
  ]

  const { container } = render(
    <ApiProviderMock
      winesListState={{
        data: winesDataMock,
        status: 'loaded',
      }}
    >
      <WinesList />
    </ApiProviderMock>
  )

  const cardWineElements = container.querySelectorAll('.cardWine')
  t.deepEqual(cardWineElements.length, 1)
})
