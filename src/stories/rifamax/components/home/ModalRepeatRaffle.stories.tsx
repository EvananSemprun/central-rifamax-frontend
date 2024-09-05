import ModalRepeatRaffle from '@components/rifamax/home/ModalRepeatRaffle';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Repetir rifa',
  component: ModalRepeatRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalRepeatRaffle raffle_id={0} {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
