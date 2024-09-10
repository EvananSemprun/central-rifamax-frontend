import useAuth from "@hooks/useAuth"
import LobbyCard from "@components/x100/LobbyCard"
import IntegratorInfo from "@components/x100/IntegratorInfo"
import { AxiosResponse } from "axios"
import { useLocation, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { IconReload } from "@tabler/icons-react"
import { getTriples } from "@api/x100/Raffles.request"
import { ITripleRaffle, MoneyType } from "@interfaces/models.interfaces"
import { Avatar, Button, Card, Center, Grid, Loader, Text, Title } from "@mantine/core"

function Lobby() {
  const { token } = useAuth();
  const { integrator, playerId, currency } = useParams();
  const { pathname } = useLocation();
  const { data: raffles, isLoading, isError, refetch } = useQuery<AxiosResponse<ITripleRaffle[]>>({
    queryKey: ['triples', 'raffles'],
    queryFn: () => getTriples({ token }),
    retry: 2
  })

  return (
    <div>
      <IntegratorInfo 
        currency={currency as MoneyType}
        integratorToken={integrator}
        playerId={playerId}
        integrator="CDA"
      />
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
          raffles?.data.map((raffle) => (
            <Grid.Col 
              span={{ base: 12, md: 6, lg: 3 }} 
              key={raffle.id}
            >
              <LobbyCard 
                raffle={raffle}
                url={`/x100/raffle/${raffle.id}`}
              />
            </Grid.Col>
          ))
        }
        {
          isLoading && (
            <Avatar size={200} radius='xl'>
              <Loader />
            </Avatar>
          )
        }
        {
          isError && (
            <Card w={560} py={40}>
              <Text ta='center' fw={700}>
                ¡Oops! Parece que no tienes conexión.
              </Text>
              <Text ta='center' fw={300} mb={20}>
                Verifica e intenta nuevamente.
              </Text>
              <Center>
                <Button
                  variant="light"
                  color="blue"
                  leftSection={<IconReload />}
                  onClick={() => refetch()}
                >
                  Recargar
                </Button>
              </Center>
            </Card>
          )
        }
      </Grid>
    </div>
  )
}

export default Lobby