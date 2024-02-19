import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IQuestion } from '../types/type';

type Props = {
  question: IQuestion;
};

export const AgeSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options, id } = question;

  const navigation = useNavigate();

  const handleNavigate = useCallback(() => {
    navigation('/quiz/4');
  }, []);

  return (
    <div className="select__container">
      {options.map((option, index) => (
        <button type="button" className="select__button" onClick={handleNavigate} key={id}>
          {t(`${id}.options.${index}`)}
        </button>
      ))}
    </div>
  );
};
