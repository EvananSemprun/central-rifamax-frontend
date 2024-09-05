import { useParams } from "react-router-dom";
import { Card, Center, Text } from "@mantine/core";

function TripleRaffle() {
  const { integrator, playerId, raffleId, currency } = useParams();

  return (
    <Center>
      <Card w={500} h={300} mt={20}>
        <Text>{integrator}</Text>
        <Text>payer: {playerId}</Text>
        <Text>Raffle ID: {raffleId}</Text>
        <Text>Currency: {currency}</Text>
      </Card>
    </Center>
  );
}

export default TripleRaffle;
