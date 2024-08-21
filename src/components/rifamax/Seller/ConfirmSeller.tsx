import { Card, Avatar, Center, Title } from '@mantine/core'

function ConfirmSeller() {
  return (
    <Center>
      <Card w={600} radius='md'>
        <Center>
          <Avatar variant="light" color='blue' radius="md" size="xl" src="" />
        </Center>
        <Title order={1} c='blue' ta='center'>
          Javier Diaz
        </Title>
        <Title mt={10} order={3} ta='center'>
          Javier@gmail.com
        </Title>
        <Title mt={5} order={3} ta='center'>
          V-29546140
        </Title>
        <Title mt={5} order={3} ta='center'>
          0412-455539
        </Title>
      </Card>
    </Center>
  )
}

export default ConfirmSeller
