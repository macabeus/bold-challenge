import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from 'former-kit'
import style from './style.css'

const AppRow = ({
  name,
  price,
  vineyard,
  year,
}) => (
  <Flexbox direction="column">
    <h1 className={style.wineName}>{name}</h1>
    <p>Vineyard: {vineyard}</p>
    <p>Year: {year}</p>
    <p>Price: {price}</p>
  </Flexbox>
)

AppRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  vineyard: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}

export default AppRow
