import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '../src/index.css';
import { themes } from '@storybook/theming';
import { withProviders } from './decorators';
import type { Preview } from "@storybook/react";
import { DocsContainer } from '@storybook/addon-docs/blocks';

export const decorators = [withProviders];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
