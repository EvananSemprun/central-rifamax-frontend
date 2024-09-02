import LobbyCard from "@components/x100/LobbyCard"
import { Grid, Title } from "@mantine/core"

function Lobby() {
  const lobbyData = [
    {
      id: 1,
      title: 'Moto Bera + 500$',
      price: 3,
      numbers: 1000,
    },
    {
      id: 1,
      title: 'Moto Bera + 500$',
      price: 3,
      numbers: 1000,
    },
  ]

  return (
    <>
      <Title 
        mt={15} 
        fw={350}
        order={2} 
        ta='center' 
      >
        Seleccione una rifa para ver los tickets
      </Title>
      <Grid m={20} justify="center">
        {
          lobbyData.map((item) => (
            <Grid.Col 
              span={{ base: 12, md: 6, lg: 3 }} 
              key={item.id}
            >
              <LobbyCard 
                title={item.title}
                price={item.price}
                numbers={item.numbers}
                url="/"
              />
            </Grid.Col>
          ))
        }
      </Grid>
    </>
  )
}

export default Lobby