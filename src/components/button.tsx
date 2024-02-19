import React from 'react';
import '../styles/button.styles.scss';

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => (
  <button
    type="button"
    className="button"
  >
    {title}
  </button>
);
