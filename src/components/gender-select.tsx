import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../types/type';
import { saveData } from '../utils/saveData';
import '../styles/gender-select.scss';

type Props = {
  question: IQuestion;
};

export const GenderSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options, emoji, id } = question;

  const navigation = useNavigate();

  const handleNavigate = useCallback((answer: string) => {
    const data = {
      order: id,
      title: t(`${id}.title`),
      type: t(`${id}.type`),
      answer,
    };
    saveData(data);
    navigation('/quiz/3');
  }, []);

  return (
    <div className="gender-select__container">
      {options.map((option, index) => (
        <button
          type="button"
          className="gender-select__button"
          onClick={() => handleNavigate(t(`2.options.${index}`))}
          key={option}
        >
          <p className="gender-select__emoji">{emoji[index]}</p>
          <p className="gender-select__title">{t(`2.options.${index}`)}</p>
        </button>
      ))}
    </div>
  );
};
