import React from 'react';
import s from './Spinner.module.scss';
import { SpinnerComponentType } from 'src/components/Spinner/Spinner.types';
import clsx from 'clsx';

const Spinner: SpinnerComponentType = ({ color = 'black', size = 'normal', className }) => {
  return <div className={clsx(s.loader, s[color], s[size], className)} />;
};

export default Spinner;
