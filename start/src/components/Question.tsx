import { QuestionInterface } from "../types";
import Answer from "./Answer";

interface QuestionProps {
  currentQuestion: QuestionInterface;
  currentQuestionAnswers: string[];
  currentAnswer: string | null;
  setCurrentAnswer: (answerText: string) => void;
}

const Question = ({
  currentQuestion,
  currentQuestionAnswers,
  currentAnswer,
  setCurrentAnswer,
}: QuestionProps) => {
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {currentQuestionAnswers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={setCurrentAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
