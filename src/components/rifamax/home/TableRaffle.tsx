import React from 'react';
import useAuth from '@hooks/useAuth';
import { capitalize } from '@utils/string';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getCloseDayRaffles } from '@/api/rifamax/Raffles.request';
import { adminStatus, sellStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';
import { ICloseDayResponse, IUnclosedRaffle } from '@/interfaces/requests.interfaces';

function TableRaffle() {
  const { token } = useAuth();

  const mutation = useMutation<AxiosResponse<ICloseDayResponse>>({
    mutationFn: () => getCloseDayRaffles(token),
    onSuccess: (response) => {
      const unclosedRaffles = response.data.unclosed;
      setRaffles(unclosedRaffles);
    },
    onError: (error) => {
      console.error("Error fetching raffles:", error);
    }
  });

  const [raffles, setRaffles] = React.useState<IUnclosedRaffle[]>([]);

  React.useEffect(() => {
    mutation.mutate();
  }, []);

  const rows = raffles.map((raffle) => (
    <Table.Tr ta="center" key={raffle.id}>
      <Table.Td>{raffle.id}</Table.Td>
      <Table.Td>{capitalize(sellStatus(raffle.sell_status))}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue" size="md">{adminStatus(raffle.admin_status)}</Badge>
      </Table.Td>
      <Table.Td>{raffle.price} $</Table.Td>
      <Table.Td>{raffle.seller?.name || 'Sin rifero asignado'}</Table.Td>
      <Table.Td>{new Date(raffle.created_at).toLocaleDateString('es-ES')}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea type="auto" w="100%" h={205} style={{ maxWidth: '100%', overflowX: 'auto' }}>
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

export default TableRaffle;
