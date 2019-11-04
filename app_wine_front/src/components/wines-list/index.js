import React, { useContext } from 'react'
import { Card, CardContent } from 'former-kit'
import ApiContext from '../../contexts/api-context'
import EmptyState from './empty-state'
import WineRow from './wine-row'
import style from './style.css'

const WinesList = () => {
  const { winesListState } = useContext(ApiContext)

  if (winesListState.data.length === 0) {
    return <EmptyState />
  }

  const wines = winesListState.data.map(wine => (
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
