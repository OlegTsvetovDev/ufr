import React, {useContext} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {PUBLIC_ROUTES, PRIVATE_ROUTES} from '../router/'
import {AuthContext} from '../context/'
import Loader from './ui/Loader'

const AppRouter = () => {
  const {isAuth, authIsLoading} = useContext(AuthContext)

  if (authIsLoading) return <Loader />

  return (
    isAuth
      ?
      <Switch>
          {
            PRIVATE_ROUTES.map(ROUTE =>
              <Route exact={ROUTE.exact} path={ROUTE.path}
                component={ROUTE.component} key={ROUTE.path}
              />
            )
          }
        <Redirect to='/posts' />
      </Switch>
      :
      <Switch>
        {
          PUBLIC_ROUTES.map(ROUTE =>
            <Route exact={ROUTE.exact} path={ROUTE.path}
              component={ROUTE.component} key={ROUTE.path}
            />
          )
        }
        <Redirect to='/login' />
      </Switch>
  )
}

export default AppRouter
