import React from 'react';
import '../styles/button.styles.scss';

type Props = {
  title: string;
  type: 'button' | 'submit';
};

export const Button: React.FC<Props> = ({ title, type }) => (
  <button type={type} className="button">
    {title}
  </button>
);
