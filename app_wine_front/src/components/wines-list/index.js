import React, { useContext } from 'react'
import { Card, CardContent } from 'former-kit'
import ApiContext from '../../contexts/api-context'
import DisplayOptionsContext from '../../contexts/display-options-context'
import EmptyState from './empty-state'
import StartingState from './starting-state'
import ErrorState from './error-state'
import WineRow from './wine-row'
import style from './style.css'

const WinesList = () => {
  const { winesListState } = useContext(ApiContext)
  const { sortFunc } = useContext(DisplayOptionsContext)

  if (winesListState.status === 'starting') {
    return <StartingState />
  }

  if (winesListState.status === 'error') {
    return <ErrorState />
  }

  if (winesListState.data.length === 0) {
    return <EmptyState />
  }

  const wines = winesListState.data
    .sort(sortFunc)
    .map(wine => (
      <Card key={wine.name} className={style.cardWine}>
        <CardContent>
          <WineRow
            name={wine.name}
            vineyard={wine.vineyard}
            year={wine.year}
            price={wine.price}
          />
        </CardContent>
      </Card>
    ))

  return wines
}

export default WinesList
