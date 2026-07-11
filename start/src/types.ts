export interface QuestionInterface {
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
}

export interface BackendQuestionInterface {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
