import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button component', () => {
  test('Check Button Disabled', () => {
    render(<Button label='test' disabled />);
    expect(screen.getByRole('button', { name: 'test' })).toBeDisabled();
  });
});
