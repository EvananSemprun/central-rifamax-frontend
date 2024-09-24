import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { Card } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Acordeón de Rifas',
  component: RafflesAccordion,
};

export default meta;

const Template: StoryFn = (args) => <Card><RafflesAccordion step={0} data={[]} {...args} refetchRaffles={() => {}} /></Card>;

export const Default = Template.bind({});
Default.args = {};
