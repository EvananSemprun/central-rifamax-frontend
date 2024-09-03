import StepperRaffle from './StepperRaffle';
import useConfetti from '@hooks/useConfetti';
import { day } from '@utils/time';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { Button, Text, Title } from '@mantine/core';

function AddRaffleModal({ refetchRaffles }: { refetchRaffles: () => void }) {
  const { stop } = useConfetti();

  const openAddRaffleModal = () => modals.open({
    title: (
      <>
        <Title order={3}>Crear nueva</Title>
        <Text size='sm' c='dimmed' fs='italic'>
          {day()}
        </Text>
      </>
    ),
    size: 'xl',
    centered: true,
    closeOnClickOutside: false,
    onClose: () => {
      stop();
      refetchRaffles();
    },
    children: (
      <StepperRaffle />
    ),
  });

  return (
    <Button
      variant='light'
      color='blue'
      leftSection={<IconPlus />}
      onClick={openAddRaffleModal}
    >
      Añadir rifa
    </Button>
  );
}

export default AddRaffleModal;
