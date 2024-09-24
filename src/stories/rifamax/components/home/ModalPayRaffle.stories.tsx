import ModalPayRaffle from '@components/rifamax/home/ModalPayRaffle';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Pagar rifa',
  component: ModalPayRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalPayRaffle raffle_id={0} {...args} refetchRaffles={() => {}}/>
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
