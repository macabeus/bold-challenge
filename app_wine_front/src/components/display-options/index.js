import React, { useContext } from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  FormInput,
  RadioGroup,
} from 'former-kit'
import DisplayOptionsContext from '../../contexts/display-options-context'

const sortByOptions = [
  {
    name: 'Name',
    value: 'name',
  },
  {
    name: 'Vineyard',
    value: 'vineyard',
  },
  {
    name: 'Year',
    value: 'year',
  },
  {
    name: 'Price',
    value: 'price',
  },
]

const orderByOptions = [
  {
    name: 'Asc',
    value: 'asc',
  },
  {
    name: 'Desc',
    value: 'desc',
  },
]

const DisplayOptions = () => {
  const {
    filterByText,
    orderBy,
    setFilterByText,
    setOrderBy,
    setSortBy,
    sortBy,
  } = useContext(DisplayOptionsContext)

  const onChangeSortByHandle = event => setSortBy(event.target.value)
  const onChangeOrderByHandle = event => setOrderBy(event.target.value)

  return (
    <Card>
      <CardTitle title="Display options" />
      <CardContent>
        <p>Sort options:</p>

        <RadioGroup
          options={sortByOptions}
          name="sortByOptions"
          onChange={onChangeSortByHandle}
          value={sortBy}
        />

        <RadioGroup
          options={orderByOptions}
          name="orderByOptions"
          onChange={onChangeOrderByHandle}
          value={orderBy}
        />

        <p>Filter</p>

        <FormInput
          type="text"
          label="Show only if contains..."
          onChange={e => setFilterByText(e.target.value)}
          value={filterByText}
        />
      </CardContent>
    </Card>
  )
}

export default DisplayOptions
