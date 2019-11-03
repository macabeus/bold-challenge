import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Flexbox } from 'former-kit'
import ChevronDown from 'emblematic-icons/svg/ChevronDown24.svg'
import ChevronUp from 'emblematic-icons/svg/ChevronUp24.svg'
import Price from '../price'

const AppRow = ({
  name,
  price,
  vineyard,
  year,
}) => {
  const [isExpand, setIsExpand] = useState(false)

  const buttonIcon = (
    isExpand
      ? <ChevronDown height={12} width={12} />
      : <ChevronUp height={12} width={12} />
  )

  return (
    <Flexbox direction="column">
      <Button
        icon={buttonIcon}
        fill="outline"
        onClick={() => setIsExpand(!isExpand)}
      >
        {name}
      </Button>

      {isExpand && (
        <>
          <p>Vineyard: {vineyard}</p>
          <p>Year: {year}</p>
          <p>Price: <Price cents={price} /></p>
        </>
      )}
    </Flexbox>
  )
}

AppRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  vineyard: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}

export default AppRow
