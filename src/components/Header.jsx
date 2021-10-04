import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/'

const Header = () => {
  const {isAuth, setIsAuth, setAuthIsLoading} = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    setAuthIsLoading(true)
    setIsAuth(!isAuth)
    setAuthIsLoading(false)
  }

  useEffect(() => localStorage.setItem('auth', isAuth), [isAuth])

  return (
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <Link to="/about" className="logo__content">
            <div  className="logo__img"></div>
            <p className="logo__description">React posts app</p>
          </Link>
        </div>
        <div className="navbar">
          <div className="navbar__content">
            {
              isAuth
              &&
              <>
                <Link to="/about" className="navbar__link">О приложении</Link>
                <Link to="/posts" className="navbar__link">Посты</Link>
              </>
            }
            <button className="navbar__btn btn"
              onClick={handleClick}
            >{isAuth ? 'Выйти' : 'Войти'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
