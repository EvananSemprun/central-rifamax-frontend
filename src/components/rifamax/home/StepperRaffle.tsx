import useAuth from '@hooks/useAuth';
import TicketRaffle from './TicketRaffle';
import AddRaffleForm from '@form/rifamax/Home/AddRaffle.form';
import { useState } from 'react';
import { ITicketRaffle } from '@interfaces/index';
import { useMutation } from '@tanstack/react-query';
import { addRaffles } from '@api/rifamax/Raffles.request';
import { ErrorNotification } from '@/components/shared/Notifications';
import { Center, Stepper, Button, Group, Title } from '@mantine/core';
import useConfetti from '@hooks/useConfetti';

function StepperRaffle() {
  const [active, setActive] = useState(0);
  const [raffleForm, setRaffleForm] = useState<ITicketRaffle['raffle'] | null>(null);
 
  const { token } = useAuth();
  const { start } = useConfetti();

  const addRaffleMutation = useMutation({
    mutationKey: ['raffles', 'add'],
    mutationFn: addRaffles,
    onError: () => {
      setActive(2);
      start();
    },
    onSuccess: () => ErrorNotification({
      position: 'top',
      title: 'Error al crear rifa',
      label: 'No se pudo agregar la rifa'
    })
  });

  const nextStep = () => {
    active !== 1
      ? setActive((current) => (current < 2 ? current + 1 : current))
      : raffleForm && addRaffleMutation.mutate({ token: token, data: raffleForm });
  };

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
        <Center mt={20}>
          <Title>
            Rifa Creada
          </Title>
        </Center>
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperRaffle;
