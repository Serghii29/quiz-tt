import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { IQuestion } from '../types/type';
import { Button } from './button';
import '../styles/bubble.styles.scss';

type Props = {
  question: IQuestion;
};

export const TopicSelect: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  const { options, emoji } = question;

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
            onClick={() => handleSelectTopic(option)}
          >
            <p className="bubble__emoji">{emoji[index]}</p>
            <p className="bubble__title">{t(`5.options.${index}`)}</p>
          </button>
        ))}
      </div>

      <Button type="button" title={t('button-next')} />
    </>
  );
};
