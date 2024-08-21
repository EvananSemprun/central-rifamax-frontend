import useConfetti from '@hooks/useConfetti';
import SellersSteppers from './SellersSteppers';
import { modals } from '@mantine/modals';
import { Button, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useViewportSize } from '@mantine/hooks';

function ModalCreateSeller() {
  const { stop } = useConfetti();
  const { width } = useViewportSize();

  const openCreateSeller = () => modals.open({
    title: <Title order={3}>Agregar Rifero</Title>,
    size: 'xl',
    centered: true,
    closeOnClickOutside: false,
    onClose: stop,
    children: (
     <SellersSteppers/>
    ),
  });

  return (
    <Button 
      variant='light'
      color='green'
      leftSection={<IconPlus />}
      onClick={openCreateSeller}
      fullWidth={width < 940} 
    >
      Añadir Rifero
    </Button>
  );
}

export default ModalCreateSeller;
