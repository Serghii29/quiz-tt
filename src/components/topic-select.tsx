import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { IQuestion } from '../types/type';
import { Button } from './button';
import '../styles/bubble.styles.scss';
import { saveData } from '../utils/saveData';

type Props = {
  question: IQuestion;
};

export const TopicSelect: React.FC<Props> = ({ question }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { options, emoji, id } = question;

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleSelectTopic = useCallback(
    (topic: string) => {
      if (selectedTopics.includes(topic)) {
        setSelectedTopics(selectedTopics.filter((e) => e !== topic));
      } else if (selectedTopics.length < 3) {
        setSelectedTopics([...selectedTopics, topic]);
      }
    },
    [selectedTopics],
  );

  const handleDataManagment = useCallback(() => {
    const data = {
      order: id,
      title: t(`${id}.title`),
      type: t(`${id}.type`),
      answer: selectedTopics,
    };

    saveData(data);

    navigate('/loader');
  }, [selectedTopics]);

  return (
    <>
      <div className="bubble__container">
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            className={cn('bubble__button', {
              selected: selectedTopics.includes(option),
            })}
            onClick={() => handleSelectTopic(t(`5.options.${index}`))}
          >
            <p className="bubble__emoji">{emoji[index]}</p>
            <p className="bubble__title">{t(`5.options.${index}`)}</p>
          </button>
        ))}
      </div>

      <Button type="button" title={t('button-next')} handleDataManagment={handleDataManagment} />
    </>
  );
};
