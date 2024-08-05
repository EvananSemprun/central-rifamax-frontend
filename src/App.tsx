import AuthRoute from '@components/shared/AuthRoute'
import LoaderScreen from '@components/shared/Loaders/LoaderScreen'
import { Suspense, lazy } from 'react'
import { ADMIN, ALL } from './utils/roles'
import { Routes, Route, Navigate } from 'react-router-dom'

const Lobby = lazy(() => import('@pages/shared/Lobby'))
const Login = lazy(() => import('@pages/shared/Login'))
const Home = lazy(() => import('@pages/rifamax/Home'))
const FeatureFlags = lazy(() => import('@pages/dev/FeatureFlags'))

function App() {
  return (
    <Suspense fallback={<LoaderScreen label='Cargando aplicación...' />}>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='rifamax' element={<AuthRoute roles={ALL} />}>
          <Route path='dashboard' element={<Home />} />
        </Route>
        <Route path='dev' element={<AuthRoute roles={ADMIN} />}>
          <Route path='featureFlags' element={<FeatureFlags />} />
        </Route>
        <Route path='/' element={<AuthRoute roles={ALL} />}>
          <Route path='/' element={<Lobby />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}

export default App
