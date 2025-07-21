import { FC } from 'react';

export type SpinnerComponentType = FC<{
  color?: 'black' | 'white';
  size?: 'normal' | 'small';
  className?: string;
}>;
