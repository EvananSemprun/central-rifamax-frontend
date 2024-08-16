import classes from './index.module.css';
import CardRaffle from '../CardRaffle';
import RafflesEmpty from './RafflesEmpty';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IRafflesAccordion } from '@interfaces/index';
import { Accordion, Divider, Group, Stack } from '@mantine/core';
import { AccordionStepTwo } from '../RafflesAccordion/AccordionStepTwo';
import { AccordionStepOne } from '../RafflesAccordion/AccordionStepOne';
import { InfoRafflesAccordion } from '../RafflesAccordion/InfoRafflesAccordion';
import { TitlesRafflesAccordion } from '../RafflesAccordion/TitlesRafflesAccordion';

interface IWrapper {
  children?: React.ReactNode;
}

function Index({ step, data }: IRafflesAccordion) {
  const [selected, setSelected] = useState<string | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 940px)');
  const handleSelect = (key: string) => {
    setSelected(selected === key ? null : key);
  }
  const ResponsiveSection = ({ children }: IWrapper) =>
    isSmallScreen ? (
      <Stack align='center'>
        {children}
      </Stack>
    ) : (
      <Group justify="space-between">{children}</Group>
    );
  const raffles = data.map((raffle, key: number) => (
    <>
      <Accordion.Item
        key={raffle.id}
        className={selected === String(key) ? classes.itemActive : classes.item}
        value={String(key)}
      >
        <Accordion.Control
          onClick={() => handleSelect(String(key))}
        >
          <ResponsiveSection>
            <Group>
              <TitlesRafflesAccordion id={raffle.id} numbers={raffle.numbers} />
              <InfoRafflesAccordion title={raffle.title} init_date={raffle.init_date} seller={raffle.seller.name} />
            </Group>
            <Group>
              {step === 1 ? <AccordionStepOne raffle_id={raffle.id} /> : <AccordionStepTwo raffle_id={raffle.id} wildcard={raffle.security} />}
            </Group>
          </ResponsiveSection>
        </Accordion.Control>
        <Accordion.Panel>
          <Group justify='center'>
            <CardRaffle raffle={raffle} />
          </Group>
        </Accordion.Panel>
      </Accordion.Item>
      <Divider variant='dashed' my={5} />
    </>
  ));

  return (
    data.length > 0 ? (
      <Accordion variant='filled' chevron={false}>
        {raffles}
      </Accordion>
    ) : <RafflesEmpty />
  );
}

export default Index;
