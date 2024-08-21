import { capitalize } from '@utils/string';
import { adminStatus, sellStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';

function TableRaffle() {
  const elements = [
    { id: 1, sell_status: 'sold', admin_status: 'payed', price: 100.0, seller: 'Javier', created_at: '20/08/2024 - 10:01 pm' },
    { id: 2, sell_status: 'send', admin_status: 'pending', price: 50.0, seller: 'Evanan', created_at: '20/08/2024 - 10:01 pm' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr ta='center' key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{capitalize(sellStatus(element.sell_status))}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue" size="md">{adminStatus(element.admin_status)}</Badge>
      </Table.Td>
      <Table.Td >{element.price} $</Table.Td>
      <Table.Td>{element.seller}</Table.Td>
      <Table.Td>{element.created_at}</Table.Td>
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

export default TableRaffle;
