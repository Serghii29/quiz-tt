import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
import { LOCALS } from '../i18n/constants';
import '../styles/single-select.styles.scss';

export const LanguegeSelect: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const handleChangeLanguege = useCallback((language: string) => {
    i18next.changeLanguage(language);
    navigation('/quiz/2');
  }, []);

  return (
    <div className="select__container">
      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.EN)}
      >
        {t('1.options.0')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.FR)}
      >
        {t('1.options.1')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.DE)}
      >
        {t('1.options.2')}
      </button>

      <button
        type="button"
        className="select__button"
        onClick={() => handleChangeLanguege(LOCALS.ES)}
      >
        {t('1.options.3')}
      </button>
    </div>
  );
};
