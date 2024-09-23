import { useEffect, useState } from 'react';
import useAuth from '@hooks/useAuth';
import { Card, Group, Text } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { getCloseDayInfo} from '@/api/rifamax/Raffles.request';
import { ICloseDayInfo } from '@/interfaces/requests.interfaces';

function DebtRaffles() {
  const { token } = useAuth();
  const [currencyInfo, setCurrencyInfo] = useState<ICloseDayInfo | null>(null);

  const mutation = useMutation({
    mutationFn: () => getCloseDayInfo({ token }),
    onSuccess: (data) => {
      setCurrencyInfo(data.data); 
    },
    onError: (error) => {
      console.error('Error fetching close day info:', error);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <Card>
      <Group justify="space-between">
        <Text>Bolívares</Text>
        <Text ml={75}>Dólares</Text>
        <Text>Pesos Colombianos</Text>
      </Group>
      <Group justify="space-between">
        <Text>{currencyInfo ? `${currencyInfo.ves} Bs.D` : 'Loading...'}</Text>
        <Text>{currencyInfo ? `${currencyInfo.usd} $` : 'Loading...'}</Text>
        <Text>{currencyInfo ? `${currencyInfo.cop} COP` : 'Loading...'}</Text>
      </Group>
    </Card>
  );
}

export default DebtRaffles;
