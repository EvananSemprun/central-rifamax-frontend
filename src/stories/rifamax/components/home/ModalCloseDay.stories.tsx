import { Meta, StoryFn } from '@storybook/react';
import CloseDayModal from '@components/rifamax/home/ModalCloseDay';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Cerrar Día',
  component: CloseDayModal,
};

export default meta;

const Template: StoryFn = (args) => <CloseDayModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
