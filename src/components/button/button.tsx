import React, { FC, PropsWithChildren } from 'react';
import { ButtonProps } from './button.types';
export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { disabled, children } = props;

  return <button disabled={disabled}>{children}</button>;
};
