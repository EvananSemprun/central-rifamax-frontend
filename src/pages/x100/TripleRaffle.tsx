import IntegratorInfo from "@components/x100/IntegratorInfo"
import { useParams } from "react-router-dom";
import { Card, Center, Text } from "@mantine/core";
import { MoneyType } from "@interfaces/models.interfaces";

function TripleRaffle() {
  const { integrator, playerId, raffleId, currency } = useParams();

  if (raffleId === 'null') {
    <Text>
      awdaw
    </Text>
  }

  return (
    <>
      <IntegratorInfo
        currency={currency as MoneyType}
        integratorToken={integrator}
        playerId={playerId}
        integrator="CDA"
      />
      <Center>
        <Card w={500} h={300} mt={20}>
          <Text>{integrator}</Text>
          <Text>Player {playerId}</Text>
          <Text>Raffle ID: {raffleId}</Text>
          <Text>Currency: {currency}</Text>
        </Card>
      </Center>
    </>
  );
}

export default TripleRaffle;
