import ModalPrintTickets from '@components/rifamax/home/ModalPrintTickets';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Imprimir rifa',
  component: ModalPrintTickets,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalPrintTickets {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
