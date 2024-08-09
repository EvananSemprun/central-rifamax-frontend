import Titles from '@components/shared/Titles';
import useAuth from '@hooks/useAuth';
import classes from './index.module.css';
import LoaderBlur from '@/components/shared/Loaders/LoaderBlur';
import StacksRaffle from '@/components/rifamax/home/StacksRaffle';
import ActionButtons from '@components/rifamax/home/ActionButtons';
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { useMediaQuery } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { getRaffles } from '@api/rifamax/Raffles.request';
import { IRafflesResponse } from '@interfaces/requests.interfaces';
import { Pagination, ScrollArea, Group, Stack, Flex } from '@mantine/core';

interface IWrapper {
  children?: React.ReactNode;
}

function Index() {
  const items = 7;
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  
  const [page, setPage] = useState<number>(1);
  const [queryType, setQueryType] = useState<'newest' | 'initialized'>('newest');
  
  const { token } = useAuth();
  
  const { data: rafflesData, isLoading, isError, refetch } = useQuery<AxiosResponse<IRafflesResponse>>({
    queryKey: ['raffles', token],
    queryFn: () => getRaffles({ token, queryType, page, items }),
    retry: 2,
  });

  const ResponsiveSection = ({ children }: IWrapper) => (
    isSmallScreen ? (
      <Stack align='center'>
        {children}
        <Pagination
          total={rafflesData?.data.metadata.pages || 0}
          mt={0}
          siblings={0}
          onChange={(value: number) => {
            setPage(value);
            refetch();
          }}
        />
      </Stack>
    ) : (
      <Group justify="space-between">
        {children}
      </Group>
    )
  )

  const Stacks = () => (
    <Flex
      mx={10}
      rowGap={0}
      columnGap="sm"
      wrap={isSmallScreen ? 'wrap' : 'nowrap'}
    >
      <StacksRaffle color={'blue'} number={130} title={'Total de Rifas'} />
      <StacksRaffle color={'green'} number={75} title={'Rifas activas'} />
      <StacksRaffle color={'red'} number={45} title={'Rifas expiradas'} />
    </Flex>
  )

  const Wrapper = ({ children }: IWrapper) => (
    <>
      <Stacks />
      <section className={classes.home}>
        <ResponsiveSection>
          <Titles
            title='Dashboard de Rifas'
            desc='Aquí podrás gestionar y ver todas tus rifas.'
            ta={isSmallScreen ? 'center' : 'inherit'}
          />
          <ActionButtons />
        </ResponsiveSection>
        {!isSmallScreen && (
          <Pagination
            total={rafflesData?.data.metadata.pages || 0}
            mt={10}
            siblings={0}
            onChange={(value: number) => {
              setPage(value);
              refetch();
            }}
          />
        )}
        {children}
      </section>
    </>
  );

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <LoaderBlur label='Cargando rifas...' />;
  }

  return (
    <Wrapper>
      <ScrollArea.Autosize h='calc(100vh - 275px)' type='never' scrollbars="y">
        <RafflesAccordion step={2} data={rafflesData?.data.raffles || []} />
      </ScrollArea.Autosize>
    </Wrapper>
  );
}

export default Index;
