import { useState } from 'react';
import { IconUserSearch } from '@tabler/icons-react';
import { Table, Badge, Title, TextInput } from '@mantine/core';

// TODO: Add pagination

const SellerTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const elements = [
    { name: 'Evanan Semprun', dni: 'V-25488961', email: 'evanancrack@gmail.com', phone: '+58 (414) 636-1786', is_active: 'INACTIVO', role: 'Rifero', created_at: '2024-08-12' },
    { name: 'Javier Diaz', dni: 'V-25488961', email: 'rifamaxjavier@gmail.com', phone: '+58 (412) 168-8466', is_active: 'ACTIVO', role: 'Rifero', created_at: '2024-08-12' },
  ];

  const filteredElements = elements.filter((element) =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.dni.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredElements.map((element) => (
    <Table.Tr ta="center" key={element.name}>
      <Table.Td fz={18}>{element.name}</Table.Td>
      <Table.Td fz={18}>{element.dni}</Table.Td>
      <Table.Td fz={18}>{element.email}</Table.Td>
      <Table.Td fz={18}>{element.phone}</Table.Td>
      <Table.Td fz={18}>
        <Badge
          variant="light"
          color={element.is_active ? 'green' : 'red'}
          size="lg"
        >
          {element.is_active ? 'ACTIVO' : 'INACTIVO'}
        </Badge>
      </Table.Td>
      <Table.Td fz={18}>{element.role}</Table.Td>
      <Table.Td fz={18}>{element.created_at}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <TextInput
        size="lg"
        leftSection={<IconUserSearch />}
        radius="md"
        w={360  }
        placeholder="Buscar por Nombre o Cédula"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
      />

      <Table mt={10} highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta="center">
              <Title order={2}>Nombre</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Cédula</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Email</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Telefono</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Estado</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Rol</Title>
            </Table.Th>
            <Table.Th ta="center">
              <Title order={2}>Fecha</Title>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}

export default SellerTable;
