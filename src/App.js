import React, {useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import {AuthContext} from './context/'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [authIsLoading, setAuthIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true)
    setAuthIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      authIsLoading,
      setAuthIsLoading,
    }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
