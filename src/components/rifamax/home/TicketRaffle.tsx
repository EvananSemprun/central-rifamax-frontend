
import CardTitle from './CardTitle';
import { ICardRaffle } from '@interfaces/index';
import { Button, Text, Divider, Card, Image, Center } from '@mantine/core'

function TicketRaffle({ raffle }: ICardRaffle) {
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
          {raffle.numbers} - SIGNO
        </Text>
      </Center>
  
      <Center>
        <Text fw={700} size="xl">
          Precio: {raffle.price} {raffle.currency}
        </Text>
      </Center>
  
      <Divider my={10} color='white' size="xs" />
      <CardTitle title='Premio' content={raffle.prizes[0]?.award || 'No disponible'} />
      <CardTitle title='Premio sin signo' content={raffle.prizes[1]?.award || 'No disponible'} />
      <Divider mt={10} mb={10} color='white' size="xs" />
      
      <CardTitle title='SERIE NUMERO:' content={raffle.id} />
      <CardTitle title='LOTERIA:' content={raffle.lotery} />
      <CardTitle title='FECHA:' content={raffle.init_date} />
      <CardTitle title='CADUCA:' content={raffle.expired_date} />
      <CardTitle title='RIFERO:' content={raffle.seller.name} />
      <CardTitle title='TELEFONO:' content={raffle.seller.phone} />
    </Card>
  )
}

export default TickteRaffle
