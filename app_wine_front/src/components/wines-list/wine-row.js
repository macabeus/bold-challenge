import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Flexbox } from 'former-kit'
import ChevronDown from 'emblematic-icons/svg/ChevronDown24.svg'
import ChevronUp from 'emblematic-icons/svg/ChevronUp24.svg'
import IconCalendar from 'emblematic-icons/svg/Calendar32.svg'
import IconHome from 'emblematic-icons/svg/Home32.svg'
import IconWallet from 'emblematic-icons/svg/Wallet32.svg'
import Price from '../price'
import style from './style.css'

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
        <div className={style.wineInfos}>
          <p>
            <strong>
              <IconHome width={16} height={16} /> Vineyard:
            </strong>
            {vineyard}
          </p>

          <p>
            <strong>
              <IconCalendar width={16} height={16} /> Year:
            </strong>
            {year}
          </p>

          <p>
            <strong>
              <IconWallet width={16} height={16} /> Price:
            </strong>
            <Price cents={price} />
          </p>
        </div>
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
