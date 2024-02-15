export const questions = {
  'question-one': {
    id: 1,
    type: 'single-select',
    title: 'What is your preferred language?',
    description: 'Choose language',
    options: {
      en: 'English',
      fr: 'French',
      de: 'German',
      es: 'Spanish',
    },
  },

  'question-two': {
    id: 2,
    type: 'single-select',
    title: 'What gender do you identify with?',
    description: 'Please share how do you identify yourself',
    options: {
      female: 'Female',
      male: 'Male',
      other: 'Other',
    },
  },

  'question-three': {
    id: 3,
    type: 'single-select',
    title: 'What is your age?',
    description: '',
    options: ['18-29 years', '30-39 years', '40-49 years', '50+'],
  },

  'question-four': {
    id: 4,
    type: 'multiple-select',
    title: 'do',
    description: '',
    options: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
    button: 'Next',
  },

  'question-five': {
    id: 5,
    type: 'multiple-select',
    title: 'What are your favorite topics?',
    description: 'Choose up to 3 topics you like',
    options: ['18-29 years', '', '', ''],
    button: 'Next',
  },
};
