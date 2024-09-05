import AddRaffleModal from '@components/rifamax/home/ModalAddRaffle';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Crear rifa',
  component: AddRaffleModal,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <AddRaffleModal refetchRaffles={function (): void {
      throw new Error('Function not implemented.');
    } } {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
