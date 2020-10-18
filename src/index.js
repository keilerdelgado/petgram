import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

const client = new ApolloClient({
  uri:'https://ig-clone-petgram.vercel.app/graphql',
  //apollo client ejecuta request antes de realizar la peticion
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    ///indicamos que todas las peticiones a graphql incluiran el token de autenticacicon de jwt parar que sea autorizado por el back
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  //en caso de que el token expire lo removemos del sessionStorage y redirijimos al usario al /
  onError: ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.localStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})


ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
