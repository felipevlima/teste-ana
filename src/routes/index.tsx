import { Link, Outlet, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'

export const Provider = () => {
  return (
    <div>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Link to={"/home"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <p>Favoritos</p>
        </div>
      <Outlet />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: ':id',
            element: <p>ID</p>
          }
        ]
      },
      {
        path: 'profile',
        element: <p>Profile</p>
      }
    ]
  }
])

