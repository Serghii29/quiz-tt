/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IQuestion } from '../types/type';
import '../styles/single-select.styles.scss';
import { Button } from './button';

type Props = {
  question: IQuestion;
};

export const BookSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options } = question;

  return (
    <>
      <div className="select__container">
        {options.map((option, index) => (
          <div key={option} className="select__button">
            <label>
              {t(`4.options.${index}`)}
              <input
                type="checkbox"
                name="question"
                value={t(`4.options.${index}`)}
                className="select__checkbox"
              />

              <span className="select__custom-checkbox"> </span>
            </label>
          </div>
        ))}
      </div>

      <Button title={t('4.button')} />
    </>
  );
};
