import { sellStatus, adminStatus } from '@utils/parse';
import { Table, Badge, ScrollArea } from '@mantine/core';
import { getClosedRaffles } from '@api/rifamax/Raffles.request';

function TableCloseRaffle() {
  const elements = [
    { 
			id: 1,
			title: "Moto Bera SBR",
			sell_status: 'sold', 
			admin_status: 'pending', 
			price: 100.0, 
			security: "Beisbol",
			seller: "Javier Diaz",
			created_at: '19/08/2024 - 10:01 pm' 
		},
  ];

  const rows = elements.map((element) => (
    <Table.Tr ta='center' key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{sellStatus(element.sell_status)}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="red" size="lg">{adminStatus(element.admin_status)}</Badge>
      </Table.Td>
      <Table.Td >{element.price} $</Table.Td>
      <Table.Td>{element.seller}</Table.Td>
      <Table.Td>{element.created_at}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table mt={20} mb={20} striped highlightOnHover withTableBorder>
      <ScrollArea type='never' h={250}>
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
      </ScrollArea>
    </Table>
  );
}

export default TableCloseRaffle;
