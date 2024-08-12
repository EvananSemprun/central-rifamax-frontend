import { useState } from 'react';
import useUser from '@hooks/useUser';
import { Stepper } from '@mantine/core';
import TicketRaffle from './TicketRaffle';
import { ITicketRaffle } from '@interfaces/index';
import AddRaffleForm from '@form/rifamax/Home/AddRaffle.form';

function StepperRaffle() {
  const { user } = useUser();

  const [active, setActive] = useState(2);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
  const raffle = {
    title: 'Rifa prueba',
    numbers: 917,
    price: 1.0,
    currency: 'USD',
    prizes: [
      { award: 'Carro del año', plate: null, year: '2024', is_money: false, wildcard: true }, 
      { award: 'Moto', plate: null, year: '2024', is_money: false, wildcard: false }           
    ],
    lotery: 'Zulia 7A',
    init_date: '2024-08-10',
    expired_date: '2024-09-10',
    seller_id: 1,
    user: user,
  } as ITicketRaffle['raffle'];

  return (
    <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} color="teal">
      <Stepper.Step label="Datos de la rifa" description="Llena los datos de la rifa para proceder">
        <AddRaffleForm onNext={nextStep} onBack={prevStep} />
      </Stepper.Step>
      <Stepper.Step label="Verificación" description="Verificación que los datos de la rifa sean correctos">
        <TicketRaffle raffle={raffle} />
      </Stepper.Step>
      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperRaffle;
