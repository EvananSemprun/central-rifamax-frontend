import useAuth from '@hooks/useAuth';
import Confetti from 'react-confetti';
import TicketRaffle from './TicketRaffle';
import AddRaffleForm from '@form/rifamax/Home/AddRaffle.form';
import { useState, useEffect } from 'react';
import { ITicketRaffle } from '@interfaces/index';
import { useMutation } from '@tanstack/react-query';
import { addRaffles } from '@api/rifamax/Raffles.request';
import { ErrorNotification } from '@/components/shared/Notifications';
import { Center, Stepper, Button, Group, Title } from '@mantine/core';

function StepperRaffle() {
  const [active, setActive] = useState(0);
  const [raffleForm, setRaffleForm] = useState<ITicketRaffle['raffle'] | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { token } = useAuth();

  const addRaffleMutation = useMutation({
    mutationKey: ['raffles', 'add'],
    mutationFn: addRaffles,
    onError: () => {
      setActive(2);
    },
    onSuccess: () => ErrorNotification({
      position: 'top',
      title: 'Error al crear rifa',
      label: 'No se pudo agregar la rifa'
    })
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

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
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={1000000}
          gravity={9.8}
          wind={0.01}
        />
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
