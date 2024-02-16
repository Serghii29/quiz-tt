import React from 'react';
import '../../i18n';
import { useParams } from 'react-router-dom';
// import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import '../../styles/quiz.styles.scss';
import { ProgressBar } from '../../components/progress-bar';

const Quiz: React.FC = () => {
  const { id = 1 } = useParams();

  const { t } = useTranslation();

  return (
    <div className="quiz">
      <header className="quiz__header">
        <div className="quiz__prodress-container">
          <span className="quiz__header-number">{id}</span>
          <span>/ 5</span>
        </div>

        <ProgressBar progress={(+id / 5) * 100} />
      </header>
      <div className="quiz__question-container">
        <h2 className="quiz__question-title">{t(`${id}.title`)}</h2>
        <p className="quiz__question-description">{t(`${id}.description`)}</p>
      </div>
    </div>
  );
};

export default Quiz;
