import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../context/'

const Login = () => {
  const {isAuth, setIsAuth, setAuthIsLoading} = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    setAuthIsLoading()
    setIsAuth(!isAuth)
    setAuthIsLoading(false)
  }

  useEffect(() => localStorage.setItem('auth', isAuth), [isAuth])

  return (
    <div className="app__content">
      <div className="login">
        <h1 className="login__header">Авторизация</h1>
        <form className="login__content">
          <input type="text" className="login__input" placeholder="Введите логин" />
          <input type="password" className="login__input" placeholder="Введите пароль"/>
          <button className="login__btn btn"
            onClick={handleClick}
          >{isAuth ? 'Выйти' : 'Войти'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
