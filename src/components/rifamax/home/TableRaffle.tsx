import { Table, Badge, ScrollArea } from '@mantine/core';

function TableRaffle() {
  const elements = [
    { serie: 'A123', enviado: 'Enviado APP', verificacion: 'Verificado', monto: 100.0, rifero: 'JAVIER', fecha: '2024-08-12' },
    { serie: 'B456', enviado: 'Enviado APP', verificacion: 'Pendiente', monto: 50.0, rifero: 'evanan', fecha: '2024-08-11' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr ta='center' key={element.serie}>
      <Table.Td>{element.serie}</Table.Td>
      <Table.Td>{element.enviado}</Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue" size="lg">{element.verificacion}</Badge>

      </Table.Td>
      <Table.Td >{element.monto} $</Table.Td>
      <Table.Td>{element.rifero}</Table.Td>
      <Table.Td>{element.fecha}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table mt={20} mb={20} striped highlightOnHover withTableBorder>
      <ScrollArea type='never' h={250}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta='center'>Serie</Table.Th>
            <Table.Th ta='center'>Enviado</Table.Th>
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

export default TableRaffle;
