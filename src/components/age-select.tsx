import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../types/type';
import { saveData } from '../utils/saveData';

type Props = {
  question: IQuestion;
};

export const AgeSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options, id } = question;

  const navigation = useNavigate();

  const handleNavigate = useCallback((answer: string) => {
    const data = {
      order: id,
      title: t(`${id}.title`),
      type: t(`${id}.type`),
      answer,
    };

    saveData(data);

    navigation('/quiz/4');
  }, []);

  return (
    <div className="select__container">
      {options.map((option, index) => (
        <button
          type="button"
          className="select__button"
          onClick={() => handleNavigate(t(`${id}.options.${index}`))}
          key={id}
        >
          {t(`${id}.options.${index}`)}
        </button>
      ))}
    </div>
  );
};
