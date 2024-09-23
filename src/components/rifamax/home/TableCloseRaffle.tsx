import React from 'react';
import useAuth from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { getCloseDayRaffles } from '@/api/rifamax/Raffles.request';
import { sellStatus, adminStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';
import { IUnclosedRaffle } from '@/interfaces/requests.interfaces';

function TableCloseRaffle() {
  const { token } = useAuth();

  const mutation = useMutation({
    mutationFn: () => getCloseDayRaffles(token), 
    onSuccess: (response) => {
      const closedRaffles = response.data.closed;
      setClosedRaffles(closedRaffles);
    },
    onError: (error) => {
      console.error("Error fetching closed raffles:", error);
    }
  });

  const [closedRaffles, setClosedRaffles] = React.useState<IUnclosedRaffle[]>([]);

  React.useEffect(() => {
    mutation.mutate();
  }, []);

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
