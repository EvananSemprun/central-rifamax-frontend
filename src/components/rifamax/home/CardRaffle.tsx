
import CardTitle from './CardTitle';
import ModalTicketRaffle from './ModalTicketRaffle';
import { ICardRaffle } from '@interfaces/index';
import { Text, Divider, Card, Image, Center, Badge, Group } from '@mantine/core'

function CardRaffle({ raffle }: ICardRaffle) {
  return (
    <Card radius='md' shadow='xl' maw={350} w="100%">

      <Group justify='right'>
        <Badge variant="light" color="cyan">
          {raffle.numbers < 100 ? 'Terminal' : 'Triple'}
        </Badge>
      </Group>
      <Center>
        <Image
          mt={15}
          src="/images/rifamax-logo.png"
          alt="Rifamax Logo"
          maw='15rem'
          py={40}
        />
      </Center>

      <Center mt={10}>
        <Text fw={700} size="xl">
          {raffle.numbers} - SIGNO
        </Text>
      </Center>

      <Center>
        <Text fw={700} size="xl">
          PRECIO: {raffle.price} {raffle.currency}
        </Text>
      </Center>

      <Divider my={10} color='white' size="xs" />
      <CardTitle title='PREMIO' content={raffle.prizes[0]?.award || 'No disponible'} />
      <CardTitle title='PREMIO SIN SIGNO' content={raffle.prizes[1]?.award || 'No disponible'} />
      <Divider mt={10} mb={10} color='white' size="xs" />

      <CardTitle title='SERIE NUMERO:' content={raffle.id} />
      <CardTitle title='LOTERIA:' content={raffle.lotery} />
      <CardTitle title='FECHA:' content={String(raffle.init_date)} />
      <CardTitle title='CADUCA:' content={String(raffle.expired_date)} />
      <CardTitle title='RIFERO:' content={raffle.seller.name} />
      <CardTitle title='TELEFONO:' content={raffle.seller.phone} />

      <Text ta='center' mt={15} mb={15} c='grey' size="lg">
        Esto es una representación de como lucirán los tickets.
      </Text>
      <ModalTicketRaffle raffleId={raffle.id} />
    </Card>
  );
}

export default CardRaffle;
