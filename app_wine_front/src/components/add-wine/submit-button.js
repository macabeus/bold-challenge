import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'former-kit'
import ApiContext from '../../contexts/api-context'

const isFilled = value => value !== undefined && value !== ''

const SubmitButton = ({
  formValues,
  setFormError,
  setFormValues,
}) => {
  const { addNewWine } = useContext(ApiContext)

  const formIsValid = (
    isFilled(formValues.name)
    && isFilled(formValues.vineyard)
    && isFilled(formValues.year)
    && isFilled(formValues.price)
  )

  const clearForm = () => setFormValues({
    name: undefined,
    price: undefined,
    vineyard: undefined,
    year: undefined,
  })

  const handleSubmit = async () => {
    if (formIsValid === false) {
      setFormError({ message: 'There are one or more fields with invalid values!', show: true })
      return
    }

    const newWineData = {
      ...formValues,
      price: Number(formValues.price),
      year: Number(formValues.year),
    }

    const [status] = await addNewWine(newWineData)
    if (status === 'error') {
      setFormError({ message: 'Error when tried to save the new wine!', show: true })
      return
    }

    clearForm()
    setFormError({ message: '', show: false })
  }

  return (
    <Button onClick={handleSubmit}>
      Add
    </Button>
  )
}

SubmitButton.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    vineyard: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  setFormError: PropTypes.func.isRequired,
  setFormValues: PropTypes.func.isRequired,
}

export default SubmitButton
