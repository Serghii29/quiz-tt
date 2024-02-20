import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../styles/loader.styles.scss';

const Loader: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);

    return () => {
      if (progress === 100) {
        clearInterval(interval);
        navigate('/email');
      }
    };
  }, [progress]);

  return (
    <div className="loader">
      <div className="loader__progress-bar loader__progress-bar--animated">
        <p>
          {' '}
          {progress}
          %
        </p>
      </div>
      <p className="loader__description">{t('progress')}</p>
    </div>
  );
};

export default Loader;
