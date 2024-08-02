import AuthRoute from '@components/shared/AuthRoute'
import LoaderScreen from '@components/shared/Loaders/LoaderScreen'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Lobby = lazy(() => import('@pages/shared/Lobby'))
const Login = lazy(() => import('@pages/shared/Login'))
const Home = lazy(() => import('@pages/rifamax/Home'))

function App() {

  return (
    <Suspense fallback={<LoaderScreen label='Cargando aplicación...' />}>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='rifamax' element={<AuthRoute />}>
          <Route path='dashboard' element={<Home />} />
        </Route>
        <Route path='/' element={<AuthRoute />}>
          <Route path='/' element={<Lobby />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
