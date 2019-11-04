import React from 'react'
import { render } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import DisplayOptionsProvider from '../../../src/providers/display-options-provider'
import WinesList from '../../../src/components/wines-list'

test('Component WinesList when is still loading data from server', (t) => {
  const { container } = render(
    <ApiProviderMock
      winesListState={{
        data: null,
        status: 'starting',
      }}
    >
      <DisplayOptionsProvider>
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const alertElements = container.querySelector('div')
  const cardWineElements = container.querySelectorAll('.cardWine')

  t.deepEqual(alertElements.textContent, 'Loading wines from server...')
  t.deepEqual(cardWineElements.length, 0)
})

test('Component WinesList when it fails to load the data from server', (t) => {
  const { container } = render(
    <ApiProviderMock
      winesListState={{
        data: null,
        status: 'error',
      }}
    >
      <DisplayOptionsProvider>
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const alertElements = container.querySelector('div')
  const cardWineElements = container.querySelectorAll('.cardWine')

  t.deepEqual(alertElements.textContent, 'Error when tried to load the wines data from server!')
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
      <DisplayOptionsProvider>
        <WinesList />
      </DisplayOptionsProvider>
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
      <DisplayOptionsProvider>
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const cardWineElements = container.querySelectorAll('.cardWine')
  t.deepEqual(cardWineElements.length, 1)
})

test('Component WinesList when is sorting by price asc', (t) => {
  const winesDataMock = [
    {
      name: 'normal',
      price: 5,
      vineyard: 'Porto',
      year: 2019,
    },
    {
      name: 'cheap',
      price: 1,
      vineyard: 'Porto',
      year: 2019,
    },
    {
      name: 'expensive',
      price: 9,
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
      <DisplayOptionsProvider sortBy="price" orderBy="asc">
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const cardWineElements = container.querySelectorAll('.cardWine')
  const winesNameElements = container.querySelectorAll('.cardWine button')

  t.deepEqual(cardWineElements.length, 3)

  t.deepEqual(winesNameElements[0].textContent, 'cheap')
  t.deepEqual(winesNameElements[1].textContent, 'normal')
  t.deepEqual(winesNameElements[2].textContent, 'expensive')
})

test('Component WinesList when is sorting by vineyard desc', (t) => {
  const winesDataMock = [
    {
      name: 'should be the last',
      price: 9,
      vineyard: 'a',
      year: 2019,
    },
    {
      name: 'should be the first',
      price: 5,
      vineyard: 'z',
      year: 2019,
    },
    {
      name: 'should be the second',
      price: 1,
      vineyard: 'b',
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
      <DisplayOptionsProvider sortBy="vineyard" orderBy="desc">
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const cardWineElements = container.querySelectorAll('.cardWine')
  const winesNameElements = container.querySelectorAll('.cardWine button')

  t.deepEqual(cardWineElements.length, 3)

  t.deepEqual(winesNameElements[0].textContent, 'should be the first')
  t.deepEqual(winesNameElements[1].textContent, 'should be the second')
  t.deepEqual(winesNameElements[2].textContent, 'should be the last')
})

test('Component WinesList when is filtering', (t) => {
  const winesDataMock = [
    {
      name: 'cheap wine from portugal',
      price: 100,
      vineyard: 'lisboa',
      year: 2019,
    },
    {
      name: 'expensive wine from portugal',
      price: 500000,
      vineyard: 'porto',
      year: 2019,
    },
    {
      name: 'wine from uk',
      price: 3232,
      vineyard: 'london',
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
      <DisplayOptionsProvider filterByText="portugal">
        <WinesList />
      </DisplayOptionsProvider>
    </ApiProviderMock>
  )

  const cardWineElements = container.querySelectorAll('.cardWine')
  t.deepEqual(cardWineElements.length, 2)
})
