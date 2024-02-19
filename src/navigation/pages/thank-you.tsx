import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/button';

import '../../styles/thanks.styles.scss';

const ThankYou: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="thanks">
      <div className="thanks__header-container">
        <h2 className="thanks__title">{t('thanks')}</h2>

        <p className="thanks__description">{t('thanks-description')}</p>
      </div>

      <img className="thanks__checkmark" src="/checkmark.png" alt="checkmark" />

      <button type="button" className="thanks__download">
        <img src="/download.svg" alt="" />

        <p className="thanks">{t('download')}</p>
      </button>

      <Button type="submit" title={t('button-retake')} />
    </div>
  );
};

export default ThankYou;
