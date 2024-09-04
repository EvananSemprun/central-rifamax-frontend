import useAuth from '@hooks/useAuth';
import LoaderBlur from '@components/shared/Loaders/LoaderBlur';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getRafflers } from '@api/rifamax/Seller.request';
import { IconUserSearch, IconSearch } from '@tabler/icons-react';
import { IRafflersResponse } from '@interfaces/requests.interfaces';
import { Table, Badge, ScrollArea, Group, Pagination, ActionIcon, TextInput } from '@mantine/core';

const SellerTable = () => {
  const { token } = useAuth();
  const [page, setPage] = useState(1);

  const fetchRafflers = (page: number) => getRafflers({ token, page });

  const { data: rafflersData, isLoading, isError } = useQuery<AxiosResponse<IRafflersResponse>>({
    queryKey: ['rafflers', page],
    queryFn: () => fetchRafflers(page),
    retry: 2,
  });

  const elements = rafflersData?.data?.rafflers || [];

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <LoaderBlur label='Cargando Riferos...' />;
  }

  const rows = elements.map((element) => (
    <Table.Tr ta="center" key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.dni}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={element.is_active ? 'green' : 'red'}
          size="md"
        >
          {element.is_active ? 'Activo' : 'Inactivo'}
        </Badge>
      </Table.Td>
      <Table.Td>{element.role}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group justify="space-between" mt={15} gap={10}>

      <Group gap={0}>
          <TextInput
            size="lg"
            leftSection={<IconUserSearch />}
            radius="5px 0 0 5px"
            placeholder="Buscar por Nombre o Cédula"
            
          />
          <ActionIcon
            h={50}
            style={{ borderRadius: '0 5px 5px 0' }}
            size="lg"
            aria-label="Search"
          >
            <IconSearch stroke={1.5} />
          </ActionIcon>
        </Group>
        <Pagination
          total={rafflersData?.data.metadata.pages || 1}
          size="lg"
          value={page}
          onChange={setPage}
        />
      </Group>

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
    </>
  );
};

export default SellerTable;
