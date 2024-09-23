import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, Group, Text } from '@mantine/core';
import { getCloseDayInfo} from '@api/rifamax/Raffles.request';
import { ICloseDayInfo } from '@interfaces/requests.interfaces';
import { ErrorNotification } from '@components/shared/Notifications'

function DebtRaffles() {
  const { token } = useAuth();
  const [currencyInfo, setCurrencyInfo] = useState<ICloseDayInfo | null>(null);

  const { isSuccess, isError, data: request } = useQuery({
		queryKey: ['close', 'day', 'info'],
    queryFn: () => getCloseDayInfo({ token })
  });

	if (isSuccess) {
		setCurrencyInfo(request.data); 
	}

	if (isError) {
		ErrorNotification({
      title: '¡Oops! Ha ocurrido un error',
      label: 'Ha ocurrido un error al intentar cargar las estadisticas.',
      position: 'top-right'
    })
	}

  return (
		<Card>
			<Group justify="space-between">
				<Text>Bolívares</Text>
				<Text ml={75}>Dolares</Text>
				<Text>Pesos Colombianos</Text>
			</Group>
			<Group justify="space-between">
				<Text>{currencyInfo ? `${currencyInfo.ves} Bs.D` : 'Loading...'}</Text>
				<Text>{currencyInfo ? `${currencyInfo.usd} USD` : 'Loading...'}</Text>
				<Text>{currencyInfo ? `${currencyInfo.cop} COP` : 'Loading...'}</Text>
			</Group>
		</Card>
  );
}

export default DebtRaffles;
