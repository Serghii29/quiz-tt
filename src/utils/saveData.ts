interface IData {
  order: number,
  title: string,
  type: string,
  answer: string | string[],
}

export const saveData = (data: IData) => {
  const answers = localStorage.getItem('answers');

  const answersData = answers ? JSON.parse(answers) : [];

  answersData.push(data);

  localStorage.setItem('answers', JSON.stringify(answersData));
};
