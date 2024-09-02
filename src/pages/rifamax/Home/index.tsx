import useAuth from '@hooks/useAuth';
import classes from './index.module.css';
import Titles from '@components/shared/Titles';
import LoaderBlur from '@components/shared/Loaders/LoaderBlur';
import StacksRaffle from '@components/rifamax/home/StacksRaffle';
import ActionButtons from '@components/rifamax/home/ActionButtons';
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { useMediaQuery } from '@mantine/hooks';
import { getRaffles } from '@api/rifamax/Raffles.request';
import { IRafflesResponse } from '@interfaces/requests.interfaces';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { IconApps, IconClock, IconShare } from '@tabler/icons-react';
import { Pagination, ScrollArea, Group, Stack, Flex, Tabs, rem } from '@mantine/core';

interface IWrapper {
  children?: React.ReactNode;
}

function Index() {
  const items = 7;
  const isSmallScreen = useMediaQuery('(max-width: 940px)');
  const iconStyle = { width: rem(16), height: rem(16) };

  const [page, setPage] = useState<number>(1);
  const [step, setStep] = useState<1 | 2>(1);
  const [queryType, setQueryType] = useState<string | null>('newest');

  const { token } = useAuth();

  const fetchRaffles = (page: number, queryType: string | null) =>
    getRaffles({ token, queryType, page, items });

  const { data: rafflesData, isLoading, isError, isPlaceholderData, refetch } = useQuery<
  AxiosResponse<IRafflesResponse>
>({
  queryKey: ['raffles', token, page, queryType],
  queryFn: () => fetchRaffles(page, queryType),
  retry: 2,
  placeholderData: keepPreviousData,
});


  const changeQueryType = (value: string | null) => {
    if (value === 'newest') {
      setStep(1);
    }
    setQueryType(value);
    setPage(1);
  }

  const handlePage = (value: number) => {
    if (!isPlaceholderData) {
      setPage(value);
    }
  }
  const ResponsiveSection = ({ children }: IWrapper) =>
    isSmallScreen ? (
      <Stack align='center'>
        {children}
        <Pagination
          total={rafflesData?.data.metadata.pages || 0}
          mt={0}
          siblings={0}
          onChange={setPage}
        />
      </Stack>
    ) : (
      <Group justify="space-between">{children}</Group>
    );

  const Stacks = () => (
    <Flex
      mx={10}
      rowGap={0}
      columnGap='sm'
      wrap={isSmallScreen ? 'wrap' : 'nowrap'}
    >
      <StacksRaffle color={'blue'} number={130} title={'Total de Rifas'} />
      <StacksRaffle color={'green'} number={75} title={'Rifas activas'} />
      <StacksRaffle color={'red'} number={45} title={'Rifas expiradas'} />
    </Flex>
  );

  const Wrapper = ({ children }: IWrapper) => (
    <>
      <Stacks />
      <section className={classes.home}>
        <Tabs
          value={queryType}
          onChange={changeQueryType}
          variant='pills'
          defaultValue='newest'
          pt={10}
        >
          <Tabs.List>
            <Tabs.Tab value='newest' leftSection={<IconApps style={iconStyle} />}>
              Iniciadas
            </Tabs.Tab>
            <Tabs.Tab value='initialized' leftSection={<IconShare style={iconStyle} />}>
              Enviadas
            </Tabs.Tab>
            <Tabs.Tab value='to_close' leftSection={<IconClock style={iconStyle} />}>
              Sin cerrar
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <ResponsiveSection>
          <Titles
            title='Dashboard de Rifas'
            desc='Aquí podrás gestionar y ver todas tus rifas.'
            ta={isSmallScreen ? 'center' : 'inherit'}
          />
 <ActionButtons refetchRaffles={refetch} />
        </ResponsiveSection>
        {!isSmallScreen && (
          <Pagination
            total={rafflesData?.data.metadata.pages || 0}
            mb={10}
            siblings={0}
            value={page}
            onChange={handlePage}
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
      <ScrollArea.Autosize h={isSmallScreen ? 'calc(100vh - 500px)' : 'calc(100vh - 240px)'} type='never' scrollbars='y'>
        <RafflesAccordion step={step} data={rafflesData?.data.raffles || []} />
      </ScrollArea.Autosize>
    </Wrapper>
  );
}

export default Index;