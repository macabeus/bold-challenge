import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import AddWine from '../../../src/components/add-wine'

test('Component AddWine when try to save an empty wine', (t) => {
  const { container, getByText } = render(
    <ApiProviderMock
      addNewWine={() => {}}
    >
      <AddWine />
    </ApiProviderMock>
  )

  const buttonAddElement = container.querySelector('button')
  fireEvent.click(buttonAddElement)

  const alertElement = getByText(
    'There are one or more fields with invalid values!'
  )
  t.truthy(alertElement)
})

test('Component AddWine when save with a correct data', (t) => {
  const { container, getByText } = render(
    <ApiProviderMock
      addNewWine={() => ['ok']}
    >
      <AddWine />
    </ApiProviderMock>
  )

  const [
    fieldNameElement,
    fieldVineyardElement,
    fieldYearElement,
    fieldPriceElement,
  ] = container.querySelectorAll('input')
  fireEvent.change(fieldNameElement, { target: { value: 'wine name' } })
  fireEvent.change(fieldVineyardElement, { target: { value: 'my vineyard' } })
  fireEvent.change(fieldYearElement, { target: { value: '1996' } })
  fireEvent.change(fieldPriceElement, { target: { value: '10' } })

  t.deepEqual(fieldNameElement.value, 'wine name')
  t.deepEqual(fieldVineyardElement.value, 'my vineyard')
  t.deepEqual(fieldYearElement.value, '1996')
  t.deepEqual(fieldPriceElement.value, '10')

  const buttonAddElement = container.querySelector('button')
  fireEvent.click(buttonAddElement)

  t.throws(() => getByText(
    'There are one or more fields with invalids values!'
  ))
})
