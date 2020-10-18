import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton as Button } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='Email'
          {...email}/>
        <Input
          type="password"
          disabled={disabled}
          placeholder='Password'
          {...password}/>
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}
