import React, { useEffect, useState } from 'react';
import '../../i18n';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from '../../components/progress-bar';
import { LanguegeSelect } from '../../components/languege-select';
import { questions } from '../../data';
import { IQuestion } from '../../types/type';
import { GenderSelect } from '../../components/gender-select';
import { AgeSelect } from '../../components/age-select';
import { TopicSelect } from '../../components/topic-select';
import '../../styles/quiz.styles.scss';
import { BookSelect } from '../../components/book-select';

const Quiz: React.FC = () => {
  const { id = 1 } = useParams();

  const [question, setQuestion] = useState<IQuestion>(questions[+id - 1]);

  const { t } = useTranslation();

  useEffect(() => {
    setQuestion(questions[+id - 1]);
  }, [id]);

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

      {question.type === 'single-select' && question.id === 1 && <LanguegeSelect question={question} />}

      {question.type === 'single-select-image' && <GenderSelect question={question} />}

      {question.type === 'single-select' && question.id === 3 && <AgeSelect question={question} />}

      {question.type === 'multiple-select' && <BookSelect question={question} />}

      {question.type === 'bubble' && <TopicSelect question={question} />}
    </div>
  );
};

export default Quiz;
