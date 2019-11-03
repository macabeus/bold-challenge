import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from 'former-kit'
import IconTag from 'emblematic-icons/svg/Tag32.svg'
import IconCalendar from 'emblematic-icons/svg/Calendar32.svg'
import IconHome from 'emblematic-icons/svg/Home32.svg'

const isFilled = value => value !== undefined && value !== ''
const isEmpty = value => !isFilled(value)

const Form = ({ formValues, setFormValues, showFormErrors }) => {
  const createInputProps = (fieldName) => {
    const currentValue = formValues[fieldName]

    const props = {
      error: (
        (showFormErrors && isEmpty(currentValue)) ? 'This field is required!' : null
      ),
      onChange: e => setFormValues(
        { ...formValues, [fieldName]: e.target.value }
      ),
      value: formValues[fieldName],
    }

    return props
  }

  return (
    <>
      <FormInput
        type="text"
        label="Name"
        icon={<IconTag width={16} height={16} />}
        {...createInputProps('name')}
      />
      <br />
      <FormInput
        type="text"
        label="Vineyard"
        icon={<IconHome width={16} height={16} />}
        {...createInputProps('vineyard')}
      />
      <br />
      <FormInput
        type="number"
        label="Year"
        icon={<IconCalendar width={16} height={16} />}
        {...createInputProps('year')}
      />
      <br />
      <FormInput
        type="number"
        label="Price"
        icon={<span>€</span>}
        step="0.01"
        {...createInputProps('price')}
      />
      <br />
    </>
  )
}

Form.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    vineyard: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
  showFormErrors: PropTypes.bool.isRequired,
}

export default Form
