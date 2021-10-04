import Login from '../pages/Login'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import PageNotFound from '../pages/PageNotFound'

export const PUBLIC_ROUTES = [
  {path: '/login', component: Login, exact: true},
]

export const PRIVATE_ROUTES = [
  {path: '/about', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
  {path: '/pagenotfound', component: PageNotFound, exact: true},
]
