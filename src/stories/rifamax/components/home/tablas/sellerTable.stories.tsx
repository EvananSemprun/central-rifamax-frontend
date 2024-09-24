import SellerTable from './SellerTable';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/tabla rifero',
  component: SellerTable,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <SellerTable  {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
