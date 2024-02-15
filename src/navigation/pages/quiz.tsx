import React from 'react';
import '../../i18n';
import { useParams } from 'react-router-dom';
// import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Quiz: React.FC = () => {
  const { id } = useParams();

  const { t } = useTranslation();

  return (
    <>
      <header>
        {id}
        /5
      </header>
      <h2>{t(`${id}.title`)}</h2>
      <p>{t(`${id}.description`)}</p>
    </>
  );
};

export default Quiz;
