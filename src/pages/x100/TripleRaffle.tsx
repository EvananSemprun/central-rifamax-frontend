import useAuth from '@hooks/useAuth'
import classes from './TripleRaffle.module.css'
import TouchBar from '@components/x100/Touchbar'
import useIntegrator from '@hooks/useIntegrator'
import ErrorPage from '@components/shared/ErrorPage'
import IntegratorInfo from '@components/x100/IntegratorInfo'
import LoaderScreen from '@components/shared/Loaders/LoaderScreen'
import { useState } from 'react'
import { AxiosResponse } from 'axios'
import { useViewportSize } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import { getTripleById } from '@api/x100/Raffles.request'
import { useNavigate, useParams } from 'react-router-dom'
import { ITripleRaffle, MoneyType } from '@interfaces/models.interfaces'

function TripleRaffle() {
  const { token } = useAuth();
  const { width } = useViewportSize();
  const { integrator, playerId, raffleId, currency } = useParams();
  
  const [currencySelected, setCurrencySelected] = useState<MoneyType>(currency as MoneyType || 'USD')
 
  const navigate = useNavigate();
  const dataIntegrator = useIntegrator().integrator;
  const selectToken = integrator ? integrator : token
  
  const { data: raffle, isLoading, isError, refetch } = useQuery<AxiosResponse<ITripleRaffle>>({
    retry: 1,
    queryKey: ['raffle', raffleId],
    queryFn: () => getTripleById({ token: selectToken, raffleId: Number(raffleId) }),
  })

  const changeExchange = (value: MoneyType) => {
    setCurrencySelected(value)
    if (dataIntegrator.player_id > 0) {
      return navigate(`/x100/i/${integrator}/p/${playerId}/c/${value}/raffle/${raffleId}`)
    }
  }

  return (
    <>
      <ErrorPage
        show={isError}
        onClick={refetch}
        label='¡Oops! Ha ocurrido un error al cargar las rifas'
        buttonLabel='Recargar rifas'
      />
      <LoaderScreen
        label='Cargando Rifa...'
        show={isLoading}
      />
      <IntegratorInfo
        currency={currency as MoneyType}
        integratorToken={integrator}
        playerId={playerId}
        integrator='CDA'
      />
      <div className={classes.infoContainer}>
        <div className={classes.infoWrapper}>
          <TouchBar 
            pagyButton={{
              color: 'blue',
              variant: 'light',
              disabledUp: true,
              disabledDown: false,
              onPressedUp: () => {},
              onPressedDown: () => {},
            }}
            currencyButton={{
              size: 'sm',
              color: 'blue',
              borders: false,
              bg: 'transparent',
              defaultCurrency: currencySelected,
              onChange(value) {
                changeExchange(value)
              },
            }}
            combosButtons={{
              data: raffle?.data.combos || [],
              onSelect(price, value) {
                console.log('price', price)
                console.log('value', value)
              },
            }}
            priceText={{
              price: raffle?.data.price_unit || 0
            }}
          />
        </div>
      </div>
      <div className={integrator ? classes.integratorWrapper : classes.wrapper}>
        <div className={classes.ticketsWrapper}>
          <div className={classes.ticketsContainer}>
          </div>
        </div>
        { 
          width >= 1150 && (
            <div className={classes.resultWrapper}>
              
            </div> 
          )
        }
      </div>
    </>
  );
}

export default TripleRaffle;
