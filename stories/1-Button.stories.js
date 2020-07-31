import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Test from '../src/components/MuiButton';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Text = () => <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const MuiButton = () => <Test />;
