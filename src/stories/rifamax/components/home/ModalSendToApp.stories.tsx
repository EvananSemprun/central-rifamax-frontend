import ModalSendToApp from '@components/rifamax/home/ModalSendToApp';
import { Center } from '@mantine/core';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Enviar a App',
  component: ModalSendToApp,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalSendToApp raffle_id={0} {...args} refetchRaffles={() => {}} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
