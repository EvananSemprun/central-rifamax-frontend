import AuthRoute from '@components/shared/AuthRoute'
import LoaderScreen from '@components/shared/Loaders/LoaderScreen'
import { Suspense, lazy } from 'react'
import { ADMIN, ALL } from './utils/roles'
import { Routes, Route, Navigate } from 'react-router-dom'

const Lobby = lazy(() => import('@pages/shared/Lobby'))
const Login = lazy(() => import('@pages/shared/Login'))
const Home = lazy(() => import('@pages/rifamax/Home'))
const Emulator = lazy(() => import('@pages/x100/Emulator'))
const Seller = lazy(() => import('@pages/rifamax/Seller'))
const TriplesLobby = lazy(() => import('@pages/x100/Lobby'))
const TriplesRaffle = lazy(() => import('@pages/x100/TripleRaffle'))
const TriplesInfinity = lazy(() => import('@pages/x100/InfinityRaffle'))
const FeatureFlags = lazy(() => import('@pages/dev/FeatureFlags'))

function App() {
  return (
    <Suspense fallback={<LoaderScreen label='Cargando aplicación...' />}>
      <Routes>
        <Route path='login' element={<Login />} /> 
        <Route path='Emulator' element={<Emulator />} />
        <Route path='rifamax' element={<AuthRoute roles={ALL} />}>
          <Route path='dashboard' element={<Home />} />
          <Route path='sellers' element={<Seller />} />
        </Route>
        <Route path='/' element={<AuthRoute roles={ALL} />}>
          <Route index element={<Lobby />} />
        </Route>
        <Route path="x100?/i?/:integrator?/p?/:playerId?/c?/:currency?" element={<AuthRoute integration roles={ALL} />}>
          <Route index element={<TriplesLobby />} />
          <Route path='raffle/:raffleId' element={<TriplesRaffle />}>
            <Route path='infinty' element={<TriplesInfinity />} />
          </Route>
        </Route>
        <Route path='dev' element={<AuthRoute roles={ADMIN} />}>
        <Route path='featureFlags' element={<FeatureFlags />} />
       
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}

export default App
