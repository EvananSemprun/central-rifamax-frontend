import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Pagination } from './Pagination';

const meta = {
  title: 'Rifamax/Dashboard/Componentes/Paginación',
  component: Pagination,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
  },
  args: {
    total: 5,
    siblings: 0,
    onClick: fn(() => {}),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntornoReal: Story = {
  args: {
    total: 10,
    siblings: 0,
  },
};
