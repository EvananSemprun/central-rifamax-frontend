import { IConfirmSeller } from '@/interfaces';
import { Card, Avatar, Center, Title } from '@mantine/core';

function ConfirmSeller({ data }: IConfirmSeller) {
  if (!data) {
    return <Center my={20}>No hay datos para mostrar.</Center>;
  }

  return (
    <Center>
      <Card w={600} radius="md">
        <Center>
          <Avatar variant="light" color="blue" radius="md" size="xl" src="" />
        </Center>
        <Title order={1} c="blue" ta="center">
          {data.name} {data.lastname}
        </Title>
        <Title mt={15} order={3} fw={150} ta="center">
          {data.email}
        </Title>
        <Title order={3} fw={150} ta="center">
          {data.dni}
        </Title>
        <Title order={3} fw={150} ta="center">
          {data.phone}
        </Title>
      </Card>
    </Center>
  );
}

export default ConfirmSeller;
