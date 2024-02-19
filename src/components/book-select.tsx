/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { IQuestion } from '../types/type';
import { Button } from './button';
import '../styles/single-select.styles.scss';

type Props = {
  question: IQuestion;
};

export const BookSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options } = question;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = useCallback((option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
  }, [selectedOptions]);

  return (
    <>
      <div className="select__container">
        {options.map((option, index) => (
          <div
            key={option}
            className={cn('select__button', {
              selected: selectedOptions.includes(option),
            })}
          >
            <label>
              {t(`4.options.${index}`)}
              <input
                type="checkbox"
                name="question"
                value={t(`4.options.${index}`)}
                className="select__checkbox"
                onChange={() => handleOptionChange(option)}
              />

              <span className="select__custom-checkbox"> </span>
            </label>
          </div>
        ))}
      </div>

      <Button type="button" title={t('button-next')} />
    </>
  );
};
