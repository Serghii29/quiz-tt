import React from 'react';
import '../styles/button.styles.scss';

type Props = {
  title: string;
  type: 'button' | 'submit';
  handleDataManagment: () => void;
};

export const Button: React.FC<Props> = ({ title, type, handleDataManagment }) => (
  <button type={type} className="button" onClick={handleDataManagment}>
    {title}
  </button>
);
