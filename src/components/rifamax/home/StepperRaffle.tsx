import AddRaffleForm from '@/form/rifamax/Home/AddRaffle.form';
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import TicketRaffle from './TicketRaffle';

// const raffle = {
//   numbers: '1234',
//   price: 500,
//   currency: 'USD',
//   prizes: [
//     { award: 'Carro del año' }, 
//     { award: 'Moto' }           
//   ],
//   id: '56789',
//   lotery: 'Lotería Nacional',
//   init_date: '2024-08-10',
//   expired_date: '2024-09-10',
//   seller: {
//     name: 'Juan Pérez',
//     phone: '+1 555-1234'
//   }
// };

function StepperRaffle() {
  const [active, setActive] = useState(2);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} color="teal">
      <Stepper.Step label="Datos de la rifa" description="Llena los datos de la rifa para proceder">
        <AddRaffleForm onNext={nextStep} onBack={prevStep} />
      </Stepper.Step>
      <Stepper.Step label="Verificación" description="Verificación que los datos de la rifa sean correctos">
        {/* <TicketRaffle raffle={raffle} /> */}
      </Stepper.Step>
      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperRaffle;
