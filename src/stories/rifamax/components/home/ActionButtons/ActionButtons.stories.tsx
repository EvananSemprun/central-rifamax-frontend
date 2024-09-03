import ActionButtons from '@components/rifamax/home/ActionButtons';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Botones de acción',
  component: ActionButtons,
};

export default meta;

const Template: StoryFn = (args) => <ActionButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};
