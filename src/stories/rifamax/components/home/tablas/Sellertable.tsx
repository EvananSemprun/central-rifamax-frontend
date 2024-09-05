import LoaderBlur from '@components/shared/Loaders/LoaderBlur';
import { useState } from 'react';
import { Table, Badge, ScrollArea } from '@mantine/core';

const elements = [
  { id: 1, name: 'Carbon', dni: '1234567890', email: 'carbon@example.com', phone: '123-456-7890', is_active: true, role: 'Element' },
  { id: 2, name: 'Nitrogen', dni: '2345678901', email: 'nitrogen@example.com', phone: '234-567-8901', is_active: false, role: 'Element' },
  { id: 3, name: 'Yttrium', dni: '3456789012', email: 'yttrium@example.com', phone: '345-678-9012', is_active: true, role: 'Element' },
  { id: 4, name: 'Barium', dni: '4567890123', email: 'barium@example.com', phone: '456-789-0123', is_active: true, role: 'Element' },
  { id: 5, name: 'Cerium', dni: '5678901234', email: 'cerium@example.com', phone: '567-890-1234', is_active: false, role: 'Element' },
];

const SellerTable = () => {
  const [rafflers, setRafflers] = useState(elements); 
  const [loading, setLoading] = useState(false); 

  if (loading) return <LoaderBlur />;

  const rows = rafflers.map((raffler) => (
    <Table.Tr key={raffler.id}>
      <Table.Td>{raffler.name}</Table.Td>
      <Table.Td>{raffler.dni}</Table.Td>
      <Table.Td>{raffler.email}</Table.Td>
      <Table.Td>{raffler.phone}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={raffler.is_active ? 'green' : 'red'}
          size="md"
        >
          {raffler.is_active ? 'Activo' : 'Inactivo'}
        </Badge>
      </Table.Td>
      <Table.Td>{raffler.role}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea type="auto" w="100%" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <Table mt={10} highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th fz={16} ta="center">Nombre</Table.Th>
            <Table.Th fz={16} ta="center">Cédula</Table.Th>
            <Table.Th fz={16} ta="center">Email</Table.Th>
            <Table.Th fz={16} ta="center">Telefono</Table.Th>
            <Table.Th fz={16} ta="center">Estado</Table.Th>
            <Table.Th fz={16} ta="center">Rol</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};

export default SellerTable;
