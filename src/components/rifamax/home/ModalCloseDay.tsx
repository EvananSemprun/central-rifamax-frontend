import TableRaffle from './TableRaffle';
import DebtRaffles from './DebtRaffles';
import { day } from '@utils/time';
import { modals } from '@mantine/modals';
import { IconX } from '@tabler/icons-react';
import { Button, Divider, Text, Title, Grid } from '@mantine/core';

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
        <Divider label="Total" variant='dashed' size="md" labelPosition="center" />
        <DebtRaffles/>

        <Grid mt={15}>
          <Grid.Col span={6}>
            <Button fullWidth variant="light"size="md" radius="md">
              Descargar
              </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button fullWidth variant="light"  color="teal" size="md" radius="md">
              Imprimir
              </Button>
          </Grid.Col>
        </Grid>
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
