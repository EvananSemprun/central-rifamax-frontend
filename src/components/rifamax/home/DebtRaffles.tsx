import useAuth from '@hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Card, Group, Text } from '@mantine/core';
import { getCloseDayInfo} from '@api/rifamax/Raffles.request';

function DebtRaffles() {
  const { token } = useAuth();

  const { data: request } = useQuery({
		queryKey: ['close', 'day', 'info'],
    queryFn: () => getCloseDayInfo({ token })
  });

  return (
		<Card>
			<Group justify="space-between">
				<Text>Bolívares</Text>
				<Text ml={75}>Dolares Américanos</Text>
				<Text>Pesos Colombianos</Text>
			</Group>
			<Group justify="space-between">
				<Text>{request?.data.ves} Bs.D</Text>
				<Text>{request?.data.usd} USD</Text>
				<Text>{request?.data.cop} COP</Text>
			</Group>
		</Card>
  );
}

export default DebtRaffles;
