/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../types/type';
import { Button } from './button';
import { saveData } from '../utils/saveData';
import '../styles/single-select.styles.scss';

type Props = {
  question: IQuestion;
};

export const BookSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { options, id } = question;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDisabled, setIsDisable] = useState(true);

  const handleOptionChange = useCallback(
    (option: string) => {
      const newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
    },
    [selectedOptions],
  );

  const handleDataManagment = useCallback(() => {
    const data = {
      order: id,
      title: t(`${id}.title`),
      type: t(`${id}.type`),
      answer: selectedOptions,
    };

    saveData(data);

    navigate('/quiz/5');
  }, [selectedOptions]);

  useEffect(() => {
    setIsDisable(selectedOptions.length === 0);
  }, [selectedOptions]);

  return (
    <>
      <div className="select__container">
        {options.map((option, index) => (
          <div
            key={option}
            className={cn('select__button', {
              selected: selectedOptions.includes(t(`4.options.${index}`)),
            })}
          >
            <label className="select__label">
              {t(`4.options.${index}`)}
              <input
                type="checkbox"
                name="question"
                value={t(`4.options.${index}`)}
                className="select__checkbox"
                onChange={() => handleOptionChange(t(`4.options.${index}`))}
              />

              <span className="select__custom-checkbox"> </span>
            </label>
          </div>
        ))}
      </div>

      <Button
        type="button"
        title={t('button-next')}
        handleDataManagment={handleDataManagment}
        isDisabled={isDisabled}
      />
    </>
  );
};
