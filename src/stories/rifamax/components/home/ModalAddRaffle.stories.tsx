import ModalAddRaffle from '@components/rifamax/home/ModalAddRaffle';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Añadir Rifas',
  component: ModalAddRaffle,
};

export default meta;

const Template: StoryFn = (args) => <ModalAddRaffle refetchRaffles={function (): void {
  throw new Error('Function not implemented.');
} } {...args} />;

export const Default = Template.bind({});
Default.args = {};
