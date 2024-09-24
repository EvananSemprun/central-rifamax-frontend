import useAuth from '@hooks/useAuth';
import LoaderBlur from '@components/shared/Loaders/LoaderBlur';
import { AxiosResponse } from 'axios';
import { capitalize } from '@utils/string';
import { useQuery } from '@tanstack/react-query';
import { adminStatus, sellStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';
import { getCloseDayRaffles } from '@api/rifamax/Raffles.request';
import { ICloseDayResponse } from '@interfaces/requests.interfaces';

function TableRaffle() {
  const { token } = useAuth();

  const { isLoading, data: request } = useQuery<AxiosResponse<ICloseDayResponse>>({
		queryKey: ['get', 'unclosed'],
    queryFn: () => getCloseDayRaffles(token)
  });

  const rows = request?.data.raffles.map((raffle) => (
    <Table.Tr ta="center" key={raffle.id}>
      <Table.Td>{raffle.id}</Table.Td>
      <Table.Td>{capitalize(sellStatus(raffle.sell_status))}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue" size="md">{adminStatus(raffle.admin_status)}</Badge>
      </Table.Td>
      <Table.Td>{raffle.price} {raffle.currency}</Table.Td>
      <Table.Td>{raffle.seller?.name || 'Sin rifero asignado'}</Table.Td>
      <Table.Td>{new Date(raffle.created_at).toLocaleDateString('es-ES')}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea type="auto" w="100%" h={205} style={{ maxWidth: '100%', overflowX: 'auto' }}>
				{ 
					isLoading ? (
						<LoaderBlur label="Cargando rifas..." />
					) : (
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
				)
			}
    </ScrollArea>
  );
}

export default TableRaffle;
