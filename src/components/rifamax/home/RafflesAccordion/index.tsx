import classes from './index.module.css';
import CardRaffle from '../CardRaffle';
import RafflesEmpty from './RafflesEmpty';
import { useState } from 'react';
import { IRafflesAccordion } from '@interfaces/index';
import { Accordion, Divider, Group } from '@mantine/core';
import { AccordionStepTwo } from '../RafflesAccordion/AccordionStepTwo';
import { AccordionStepOne } from '../RafflesAccordion/AccordionStepOne';
import { InfoRafflesAccordion } from '../RafflesAccordion/InfoRafflesAccordion';
import { TitlesRafflesAccordion } from '../RafflesAccordion/TitlesRafflesAccordion';

function Index({ step, data }: IRafflesAccordion) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(selected === key ? null : key);
  }

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
          <Group justify="space-between" >
            <Group>
              <TitlesRafflesAccordion id={raffle.id} numbers={raffle.numbers} />
              <InfoRafflesAccordion title={raffle.title} init_date={raffle.init_date} seller={raffle.seller.name} />
            </Group>
            <Group>
              {step === 1 ? <AccordionStepOne raffle_id={raffle.id} /> : <AccordionStepTwo raffle_id={raffle.id} />}
            </Group>
          </Group>
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
