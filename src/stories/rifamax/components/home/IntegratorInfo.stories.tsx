import IntegratorInfo from "@components/x100/IntegratorInfo"
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Añadir Rifas',
  component: IntegratorInfo,
};

export default meta;

const Template: StoryFn = (args) => <IntegratorInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};