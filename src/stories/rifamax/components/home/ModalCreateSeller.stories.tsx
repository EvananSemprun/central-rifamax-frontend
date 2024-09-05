import ModalCreateSeller from '@/components/rifamax/Seller/ModalCreateSeller';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Añadir Rifero',
  component: ModalCreateSeller,
};

export default meta;

const Template: StoryFn = (args) => (

  <Center>
    <ModalCreateSeller {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {};
