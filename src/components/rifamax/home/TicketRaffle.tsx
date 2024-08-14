import CardTitle from './CardTitle';
import { toBet } from '@utils/transform';
import { addDay, day } from '@utils/time';
import { ITicketRaffle } from '@interfaces/index';
import { Text, Divider, Card, Image, Center } from '@mantine/core';

function TicketRaffle({ raffle }: ITicketRaffle) {
  const initDate = raffle?.init_date;
  const expirationDate = addDay(initDate, 3);

  return (
    <Card radius='md' shadow='xl' maw={350} w="100%">
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
          {toBet({ value: raffle?.numbers || 0, betType: 'Raffle' })} - SIGNO
        </Text>
      </Center>

      <Center>
        <Text fw={700} size="xl">
          PRECIO: {raffle?.price} {raffle?.currency}
        </Text>
      </Center>

      <Divider my={10} color='white' size="xs" />
      <CardTitle title='PREMIO' content={raffle?.prizes?.[0]?.award || 'No disponible'} />
      <CardTitle title='PREMIO SIN SIGNO' content={raffle?.prizes?.[1]?.award || 'No disponible'} />

      <Divider mt={10} mb={10} color='white' size="xs" />

      <CardTitle title='SERIE NUMERO:' content={999} />
      <CardTitle title='TITULO:' content={raffle?.title || ''} />
      <CardTitle title='LOTERIA:' content={raffle?.lotery || ''} />
      <CardTitle title='FECHA:' content={day(initDate)} />
      <CardTitle title='CADUCA:' content={expirationDate} />
    </Card>
  );
}

export default TicketRaffle;
