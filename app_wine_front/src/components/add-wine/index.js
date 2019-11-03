import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from 'former-kit'
import Form from './form'
import AlertFormError from './alert-form-error'
import SubmitButton from './submit-button'

const AddWine = () => {
  const [formValues, setFormValues] = useState({
    name: undefined,
    price: undefined,
    vineyard: undefined,
    year: undefined,
  })

  const [formError, setFormError] = useState({ message: '', show: false })

  return (
    <Card>
      <CardTitle title="Add new wine" />
      <CardContent>
        {formError.show && <AlertFormError message={formError.message} />}

        <Form
          formValues={formValues}
          setFormValues={setFormValues}
          showFormErrors={formError.show}
        />

        <SubmitButton
          formValues={formValues}
          setFormValues={setFormValues}
          setFormError={setFormError}
        />
      </CardContent>
    </Card>
  )
}

export default AddWine
