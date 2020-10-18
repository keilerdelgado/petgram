import React, {useContext} from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          //con la mutacion vienen algunos parametros por defecto los cuales podemos utilizar para renderizar informacion en la UI sobre el proceso de mutación y el resultado de la misma
          (register, {data = {},loading,error}) => {
            const handleSubmit = ({email, password}) => {
              const input = { email, password }
              const variables = { input }
              register({variables}).then(({data}) => {
                //al registrarse el back devuelve un objeto con la propiedad data en el el, y esa propiedad tiene otra propiedad llamada signup que tiene el valor de un token jwt
                const {signup} = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'Error al cargar usuario ya existe'
            return ( 
              <UserForm error={errorMsg}
                onSubmit={handleSubmit} 
                disabled={loading}
                title='Registrarse'/> 
            )
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { loading, error }) => {
            const handleSubmit = ({ email,password }) => {
              const input = { email, password }
              login({variables: {input}}).then(({data}) => {
                //al registrarse el back devuelve un objeto con la propiedad data en el el, y esa propiedad tiene otra propiedad llamada login que tiene el valor de un token jwt
                const {login} = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'Usuario o contraseña invalida'
            return ( 
              <UserForm error={errorMsg}
                onSubmit={handleSubmit} 
                disabled={loading}
                title='Iniciar Sesión'/> 
            )
          }
        }
      </LoginMutation>
    </>
  )
}
