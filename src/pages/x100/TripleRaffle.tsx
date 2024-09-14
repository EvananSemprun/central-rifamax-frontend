import classes from './TripleRaffle.module.css'
import TouchBar from '@components/x100/Touchbar'
import useIntegrator from '@hooks/useIntegrator'
import IntegratorInfo from '@components/x100/IntegratorInfo'
import { useState } from 'react'
import { MoneyType } from '@interfaces/models.interfaces'
import { useNavigate, useParams } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'

function TripleRaffle() {
  const navigate = useNavigate();
  const dataIntegrator = useIntegrator().integrator;

  const { width } = useViewportSize();

  const { integrator, playerId, raffleId, currency } = useParams();

  const [currencySelected, setCurrencySelected] = useState<MoneyType>(currency as MoneyType || 'USD')

  const changeExchange = (value: MoneyType) => {
    setCurrencySelected(value)
    if (dataIntegrator.player_id > 0) {
      return navigate(`/x100/i/${integrator}/p/${playerId}/c/${value}/raffle/${raffleId}`)
    }
  }

  return (
    <>
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
              data: [
                {
                  price: 2,
                  value: 4
                },
                {
                  price: 3,
                  value: 8
                }
              ],
              onSelect(price, value) {
                console.log('price', price)
                console.log('value', value)
              },
            }}
            priceText={{
              price: 4
            }}
          />
        </div>
      </div>
      <div className={integrator ? classes.integratorWrapper : classes.wrapper}>
        <div className={classes.ticketsWrapper}>
        </div>
        { width >= 1150 && (
            <div className={classes.resultWrapper}>
              {/* Ticket order selected */}
            </div> 
          )
        }
      </div>
    </>
  );
}

export default TripleRaffle;
