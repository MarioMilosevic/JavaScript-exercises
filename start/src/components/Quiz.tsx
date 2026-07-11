import Question from "./Question";
import { useState, useEffect, useMemo } from "react";
import { loadQuestions, shuffleAnswers } from "../api";
import { QuestionInterface } from "../types";

const Quiz = () => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [hasAnsweredCurrentQuestion, setHasAnsweredCurrentQuestion] =
    useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);

  useEffect(() => {
    loadQuestions().then((data) => setQuestions(data));
  }, []);

  const currentQuestion = questions[0];

  const currentQuestionAnswers = useMemo(() => {
    return shuffleAnswers(currentQuestion);
  }, [currentQuestion]);

  const selectAnswer = (answerText: string) => {
    if (answerText === questions[currentQuestionIndex].correctAnswer) {
      console.log("tacan odgovor");
      // setCorrectAnswersCount((previous) => previous++);
    } else {
      console.log("netacan odgovor");
    }
    setHasAnsweredCurrentQuestion(true);
    // setShowResults(true);
  };

  return (
    <div className="quiz">
      {showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {correctAnswersCount} of &nbsp;
              {questions.length} right.
            </div>
          </div>
          <div className="next-button">Restart</div>
        </div>
      )}
      {!showResults && questions.length > 0 && (
        <div>
          <div className="score">
            Question {currentQuestionIndex + 1}/{questions.length}
          </div>
          <Question
            currentQuestion={currentQuestion}
            currentQuestionAnswers={currentQuestionAnswers}
            currentAnswer={currentAnswer}
            setCurrentAnswer={(answerText) => selectAnswer(answerText)}
          />
          {hasAnsweredCurrentQuestion && (
            <div className="next-button">Next question</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
