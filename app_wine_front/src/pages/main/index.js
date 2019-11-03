import React from 'react'
import AddWine from '../../components/add-wine'
import DisplayOptions from '../../components/display-options'
import WinesList from '../../components/wines-list'
import style from './style.css'

const Main = () => (
  <div className={style.cellsFeatures}>
    <AddWine />

    <DisplayOptions />

    <div>
      <WinesList />
    </div>
  </div>
)

export default Main
