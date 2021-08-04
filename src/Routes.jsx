import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { path } from './constants/path'
import Login from './pages/auth/Login/Login'
import Register from './pages/auth/Register/Register'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login}>
        <Login />
      </Route>
      <Route path={path.register}>
        <Register />
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
      {/* <Route path={path.home} exact>
        <Home />
      </Route> */}
    </Switch>
  )
}
