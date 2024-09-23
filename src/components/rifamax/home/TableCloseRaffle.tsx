import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { sellStatus, adminStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';
import { IUnclosedRaffle } from '@interfaces/requests.interfaces';
import { getCloseDayRaffles } from '@api/rifamax/Raffles.request';
import { ErrorNotification } from '@components/shared/Notifications';

function TableCloseRaffle() {
  const { token } = useAuth();

  const { isSuccess, isError, data: request } = useMutation({
		queryKey: ['closed', 'day', 'raffles']
    queryFn: () => getCloseDayRaffles(token)
  });

  const [closedRaffles, setClosedRaffles] = useState<IUnclosedRaffle[]>([]);

	if (isSuccess) {
		setClosedRaffles(request.data.closed)
	}

	if (isError) {
		ErrorNotification({
      title: 'Ha ocurrido un error',
      label: 'Al parecer ha ocurrido un error al cargar las rifas',
      position: 'top-right'
    })
	}
	
  const rows = closedRaffles.map((raffle) => (
    <Table.Tr ta='center' key={raffle.id}>
      <Table.Td>{raffle.id}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="red" size="md">
          {sellStatus(raffle.sell_status)}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge variant="light" color="red" size="md">{adminStatus(raffle.admin_status)}</Badge>
      </Table.Td>
      <Table.Td>{raffle.price} $</Table.Td>
      <Table.Td>{raffle.title}</Table.Td>
      <Table.Td>{raffle.created_at}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea type="auto" w="100%" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <Table mt={20} mb={20} striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta='center'>Serie</Table.Th>
            <Table.Th ta='center'>Estado</Table.Th>
            <Table.Th ta='center'>Verificación</Table.Th>
            <Table.Th ta='center'>Monto</Table.Th>
            <Table.Th ta='center'>Rifero</Table.Th>
            <Table.Th ta='center'>Fecha</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableCloseRaffle;
