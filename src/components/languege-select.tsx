import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
import { LOCALS } from '../i18n/constants';
import { IQuestion } from '../types/type';
import '../styles/single-select.styles.scss';
import { saveData } from '../utils/saveData';

type Props = {
  question: IQuestion;
};

export const LanguegeSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const { id } = question;

  const handleChangeLanguege = useCallback((language: string, answer: string) => {
    i18next.changeLanguage(language);

    const data = {
      order: id,
      title: t(`${id}.title`),
      type: t(`${id}.type`),
      answer,
    };

    saveData(data);
    navigation('/quiz/2');
  }, []);

  return (
    <div className="select__container">
      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.EN, t('1.options.0'))}
      >
        {t('1.options.0')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.FR, t('1.options.1'))}
      >
        {t('1.options.1')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.DE, t('1.options.2'))}
      >
        {t('1.options.2')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.ES, t('1.options.3'))}
      >
        {t('1.options.3')}
      </button>
    </div>
  );
};
