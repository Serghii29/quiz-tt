export const questions = [
  {
    id: 1,
    type: 'language-selection',
    title: 'What is your preferred language?',
    description: 'Choose language',
    options: ['English', 'French', 'German', 'Spanish'],
    emoji: [],
    button: '',
  },

  {
    id: 2,
    type: 'gender-selection',
    title: 'What gender do you identify with?',
    description: 'Please share how do you identify yourself',
    options: ['Female', 'Male', 'Other'],
    emoji: ['👩', '🧔', '😉'],
    button: '',
  },

  {
    id: 3,
    type: 'single-select',
    title: 'What is your age?',
    description: '',
    options: ['18-29 years', '30-39 years', '40-49 years', '50+'],
    emoji: [],
    button: '',
  },

  {
    id: 4,
    type: 'multiple-select',
    title: 'What do you hate the most in a book?',
    description: '',
    options: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
    emoji: [],
    button: 'Next',
  },

  {
    id: 5,
    type: 'bubble',
    title: 'What are your favorite topics?',
    description: 'Choose up to 3 topics you like',
    emoji: ['🐺', '💃', '👑', '🥰', '💁‍♀️', '🤠', '🤑'],
    options: [
      'Werewolf',
      'Action',
      'Royal Obsession',
      'Romance',
      'Young Adult',
      'Bad Boy',
      'Billionaire',
    ],
    button: 'Next',
  },
];
