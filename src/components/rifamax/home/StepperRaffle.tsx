import useAuth from '@hooks/useAuth';
import TicketRaffle from './TicketRaffle';
import useConfetti from '@hooks/useConfetti';
import AddRaffleForm from '@form/rifamax/Home/AddRaffle.form';
import { useState } from 'react';
import { ITicketRaffle } from '@interfaces/index';
import { useMutation } from '@tanstack/react-query';
import { addRaffles } from '@api/rifamax/Raffles.request';
import { ErrorNotification } from '@/components/shared/Notifications';
import { Center, Stepper, Button, Group, Text, Image } from '@mantine/core';

function StepperRaffle() {
  const [active, setActive] = useState(0);
  const [raffleForm, setRaffleForm] = useState<ITicketRaffle['raffle'] | null>(null);
 
  const { token } = useAuth();
  const { start } = useConfetti();

  const addRaffleMutation = useMutation({
    mutationKey: ['raffles', 'add'],
    mutationFn: addRaffles,
    onSuccess: () => {
      setActive(2);
      start();
    },
    onError: () => ErrorNotification({
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
      <Stepper.Step allowStepClick={false} label="Datos de la rifa" description="Llena los datos de la rifa para proceder">
        <AddRaffleForm
          onNext={(form) => {
            setRaffleForm(form);
            nextStep();
          }}
          onBack={prevStep}
        />
      </Stepper.Step>
      <Stepper.Step allowStepClick={false} label="Verificación" description="Verificación que los datos de la rifa sean correctos">
        <Center mt={10}>
          <TicketRaffle raffle={raffleForm} />
        </Center>
        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Atras</Button>
          <Button type="submit" onClick={nextStep} color="teal">Siguiente</Button>
        </Group>
      </Stepper.Step>
      <Stepper.Completed>
        <Text ta="center" fz={22} fw={700}>
          Rifa Creada
        </Text>
        <Center my={20}>
          <Image src='/images/emoji-success.png' w={150} h={150} />
        </Center>
        <Text ta="center" fz={16} fw={300}>
          Tu rifa ha sido creada exitosamente, gracias por confiar en nosotros.
        </Text>
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperRaffle;
