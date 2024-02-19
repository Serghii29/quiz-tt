export interface IQuestion {
  id: number;
  title: string;
  type: string;
  description: string;
  options: string[];
  emoji: string[];
  button: string;
}
