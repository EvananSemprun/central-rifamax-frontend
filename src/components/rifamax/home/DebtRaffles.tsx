
import {Card, Group, Text} from '@mantine/core';

function DebtRaffles() {
  return (
    <Card>
      <Group justify='space-between'>
        <Text >
          Bolivares
        </Text>
        <Text ml={75} >
          Dólares
        </Text>
        <Text >
          Pesos Colombianos
        </Text>
      </Group>
      <Group justify='space-between'>
        <Text >
          10 Bs.D
        </Text>
        <Text >
          10 $
        </Text>
        <Text >
          10 COP
        </Text>
      </Group>
    </Card>
  )
}

export default DebtRaffles
