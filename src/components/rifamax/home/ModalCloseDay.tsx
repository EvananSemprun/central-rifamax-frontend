import TableRaffle from './TableRaffle';
import DebtRaffles from './DebtRaffles';
import TableCloseRaffle from './TableCloseRaffle';
import { day } from '@utils/time';
import { modals } from '@mantine/modals';
import { IconX } from '@tabler/icons-react';
import { Button, Divider, Text, Title } from '@mantine/core';

function CloseDayModal() {
  const openCloseDayModal = () => modals.open({
    title: (
      <>
        <Title order={3}>Cierre del día</Title>
        <Text size='sm' c='dimmed' fs='italic'>
          {day()}
        </Text>
      </>
    ),
    size: 'lg',
    centered: true,
    closeOnClickOutside: false,
    children: (
      <>
        <Divider label="Cuadre de hoy" variant='dashed' size="md" labelPosition="center" />
        <TableRaffle />
        <Divider mt={10} label="Rifas Cerradas" variant='dashed' size="md" labelPosition="center" />
        <TableCloseRaffle />
        <Divider mb={10} label="Total" variant='dashed' size="md" labelPosition="center" />
        <DebtRaffles />
        <Button mt={10} fullWidth variant="light" size="md" >
          Imprimir
        </Button>
      </>
    ),
  });

  return (
    <Button
      variant='light'
      color='red'
      leftSection={<IconX />}
      onClick={openCloseDayModal}
    >
      Cerrar día
    </Button>
  );
}

export default CloseDayModal;
