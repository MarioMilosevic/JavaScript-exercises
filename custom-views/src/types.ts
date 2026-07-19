export type BackendView = {
  id: number;
  title: string;
  content: string;
};
export type View = {
  id: number;
  title: string;
  content: Content;
};
export type Content = {
  questions: Question[];
};
export type Question = {
  questionName: string;
  answers: Answer[];
};

export type Answer = {
  text: string;
};
