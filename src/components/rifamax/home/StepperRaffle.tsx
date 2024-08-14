import TicketRaffle from './TicketRaffle';
import AddRaffleForm from '@form/rifamax/Home/AddRaffle.form';
import { useState } from 'react';
import { ITicketRaffle } from '@interfaces/index';
import { Center, Stepper, Button, Group } from '@mantine/core';

function StepperRaffle() {
  const [active, setActive] = useState(0);
  const [raffleForm, setRaffleForm] = useState<ITicketRaffle['raffle'] | null>(null);

  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} color="teal">
      <Stepper.Step label="Datos de la rifa" description="Llena los datos de la rifa para proceder">
        <AddRaffleForm
          onNext={(form) => {
            console.log(form);
            setRaffleForm(form);
            nextStep();
          }}
          onBack={prevStep}
        />
      </Stepper.Step>
      <Stepper.Step label="Verificación" description="Verificación que los datos de la rifa sean correctos">
        <Center mt={10}>
          <TicketRaffle raffle={raffleForm} />
        </Center>
        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Atras</Button>
          <Button type="submit" onClick={nextStep} color="teal">Siguiente</Button>
        </Group>
      </Stepper.Step>
      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperRaffle;
