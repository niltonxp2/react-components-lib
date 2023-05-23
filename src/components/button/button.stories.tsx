import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './';
import { ButtonProps } from './button.types';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Demo/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: ButtonProps) => <Button data-test-id='button' {...args} />;
Primary.args = {
  disabled: false,
  label: 'Primary',
};
