import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CircleProgressBar } from '../../components/circle-progress-bar';
import '../../styles/loader.styles.scss';

const Loader: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let delay = 50;
    let timeout = setTimeout(() => {
      setProgress(progress + 1);

      if (progress < 100) {
        delay += 50;
        timeout = setTimeout(() => {
          setProgress(progress + 1);
        }, delay);
      } else {
        navigate('/email');
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="loader">
      <CircleProgressBar progress={progress} circleWidth="252" />
      <p className="loader__description">{t('progress')}</p>
    </div>
  );
});

export default Loader;
