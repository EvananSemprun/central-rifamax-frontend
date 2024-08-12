import Titles from '@components/shared/Titles';
import useAuth from '@hooks/useAuth';
import classes from './index.module.css';
import LoaderBlur from '@/components/shared/Loaders/LoaderBlur';
import StacksRaffle from '@/components/rifamax/home/StacksRaffle';
import ActionButtons from '@components/rifamax/home/ActionButtons';
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useMediaQuery } from '@mantine/hooks';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getRaffles } from '@api/rifamax/Raffles.request';
import { IRafflesResponse } from '@interfaces/requests.interfaces';
import { IconApps, IconClock, IconShare } from '@tabler/icons-react';
import { Pagination, ScrollArea, Group, Stack, Flex, Tabs, rem } from '@mantine/core';

interface IWrapper {
  children?: React.ReactNode;
}

function Index() {
  const items = 7;
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const iconStyle = { width: rem(16), height: rem(16) };

  const [page, setPage] = useState<number>(1);
  const [step, setStep] = useState<1 | 2>(1);
  const [queryType, setQueryType] = useState<string | null>('newest');

  const changeByTab = () => {
    queryType === 'newest' ?
      setStep(1)
        : setStep(2)
  }

  const { token } = useAuth();

  const fetchRaffles = (page: number, queryType: string | null) => getRaffles({ token, queryType, page, items });

  const { data: rafflesData, isLoading, isError, isPlaceholderData } = useQuery<AxiosResponse<IRafflesResponse>>({
    queryKey: ['raffles', token, page, queryType],
    queryFn: () => fetchRaffles(page, queryType),
    retry: 2,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (rafflesData && page > rafflesData.data.metadata.pages) {
      setPage(1);
    }
  }, [rafflesData]);

  const ResponsiveSection = ({ children }: IWrapper) => (
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
        <Tabs 
          value={queryType} 
          onChange={(value) => { 
            setQueryType(value)
            changeByTab()
            setPage(1)
          }} 
          variant="pills" 
          defaultValue="newest" 
          pt={10}
        >
          <Tabs.List>
            <Tabs.Tab value="newest" leftSection={<IconApps style={iconStyle} />}>
              Iniciadas
            </Tabs.Tab>
            <Tabs.Tab value="initialized" leftSection={<IconShare style={iconStyle} />}>
              Enviadas
            </Tabs.Tab>
            <Tabs.Tab value="to_close" leftSection={<IconClock style={iconStyle} />}>
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
          <ActionButtons />
        </ResponsiveSection>
        {!isSmallScreen && (
          <Pagination
            total={rafflesData?.data.metadata.pages || 0}
            mt={0}
            siblings={0}
            value={page}
            onChange={(value: number) => {
              if (!isPlaceholderData) {
                setPage(value);
              }
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
      <ScrollArea.Autosize h='calc(100vh - 375px)' type='never' scrollbars="y">
        <RafflesAccordion step={step} data={rafflesData?.data.raffles || []} />
      </ScrollArea.Autosize>
    </Wrapper>
  );
}

export default Index;
