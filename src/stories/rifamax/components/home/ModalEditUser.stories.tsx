import ModalEditUser from '@/components/shared/Header/ModalEditUser';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/editar usuario',
  component: ModalEditUser,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalEditUser  {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
