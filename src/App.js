import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar/index.js'

//Pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'

export default function App() {
  const { isAuth } = useContext(Context)
  const urlParams = new window.URLSearchParams(window.location.search)
  const Favs = React.lazy(() => import('./pages/Favs'))

  return (
    <>
      <Suspense fallback={<div></div>}>
        <GlobalStyle />
        <Header />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId'/>
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect from='/favs' to='/login' />}
          {!isAuth && <Redirect from='/user' to='/login' />}
          {isAuth && <Redirect from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <NavBar />
      </Suspense>
    </>
  )
}
