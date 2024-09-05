import ModalRefundRaffle from '@components/rifamax/home/ModalRefundRaffle';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Devolver rifa',
  component: ModalRefundRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalRefundRaffle raffle_id={0} {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
