import React, { FC } from 'react';
import { ButtonProps } from './button.types';
export const Button: FC<ButtonProps> = (props) => {
  const { label, disabled } = props;

  return <button disabled={disabled}>{label}</button>;
};
