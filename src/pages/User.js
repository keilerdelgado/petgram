import React, {useContext} from 'react'
import { Context } from '../Context'
import { SubmitButton as Button } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar Sesión</Button>
    </>
  )
}
