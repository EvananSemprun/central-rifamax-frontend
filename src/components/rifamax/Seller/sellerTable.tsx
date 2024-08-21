import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { filterSeller } from '@api/rifamax/Seller.request';
import { IconSearch, IconUserSearch } from '@tabler/icons-react';
import { Table, Badge, TextInput, ScrollArea, Group, ActionIcon, Pagination } from '@mantine/core';

const SellerTable = () => {
  const { token } = useAuth();
  const { width } = useViewportSize();

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

  const mutation = useMutation({
    mutationFn: (query: string) => filterSeller({ token: token, query: query }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  const handleSearch = () => {
    mutation.mutate(searchTerm);
  };

  return (
    <>
      <Group justify={width < 940 ? 'center' : 'space-between'} mt={15} w="100%">
        <Group justify={width < 940 ? 'center' : 'space-between'} mt={15}>
          <Group gap={0}>
            <TextInput
              size="lg"
              leftSection={<IconUserSearch />}
              radius="sm"
              w={300}
              placeholder="Buscar por Nombre o Cédula"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
            <ActionIcon h={50} ml={-15} size="lg" aria-label="Search" onClick={handleSearch}>
              <IconSearch style={{ width: '70%', height: '90%' }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
        <Pagination total={10} size="md" />
      </Group>

      <ScrollArea type="auto" w="100%" style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table mt={10} highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta="center">
                Nombre
              </Table.Th>
              <Table.Th ta="center">
                Cédula
              </Table.Th>
              <Table.Th ta="center">
                Email
              </Table.Th>
              <Table.Th ta="center">
                Telefono
              </Table.Th>
              <Table.Th ta="center">
                Estado
              </Table.Th>
              <Table.Th ta="center">
                Rol
              </Table.Th>
              <Table.Th ta="center">
                Fecha
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
}

export default SellerTable;
