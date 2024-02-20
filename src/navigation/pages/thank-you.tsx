import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import { Button } from '../../components/button';
import '../../styles/thanks.styles.scss';

const ThankYou: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const downloadAnswers = () => {
    const data = localStorage.getItem('answers');

    const answersData = data ? JSON.parse(data) : [];

    const csv = Papa.unparse(answersData);

    const blob = new Blob([csv], { type: 'text/csv' });
    const filename = 'answers.csv';
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const handleRetareQuiz = useCallback(() => {
    localStorage.clear();

    navigate('/');
  }, []);

  return (
    <div className="thanks">
      <div className="thanks__header-container">
        <h2 className="thanks__title">{t('thanks')}</h2>

        <p className="thanks__description">{t('thanks-description')}</p>
      </div>

      <img className="thanks__checkmark" src="/checkmark.png" alt="checkmark" />

      <button
        type="button"
        className="thanks__download"
        onClick={downloadAnswers}
      >
        <img src="/download.svg" alt="" />

        <p className="thanks">{t('download')}</p>
      </button>

      <Button type="button" title={t('button-retake')} handleDataManagment={handleRetareQuiz} />
    </div>
  );
};

export default ThankYou;
