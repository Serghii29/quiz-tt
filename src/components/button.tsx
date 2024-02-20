import React from 'react';
import cn from 'classnames';
import '../styles/button.styles.scss';

type Props = {
  title: string;
  type: 'button' | 'submit';
  handleDataManagment: () => void;
  isDisabled: boolean;
};

export const Button: React.FC<Props> = ({
  title, type, handleDataManagment, isDisabled,
}) => (
  <button
    type={type}
    className={cn('button', {
      disabled: isDisabled,
    })}
    onClick={handleDataManagment}
  >
    {title}
  </button>
);
