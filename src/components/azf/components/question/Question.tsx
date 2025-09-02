import { useState, useEffect, useMemo } from "react";
import questions from "../../data/catalogue.json";
import type { Question } from "../../model/Question";
import type { Questionaire } from "../../model/Questionaire";
import { MESSAGES, EXAM_TIME_SECONDS, EXAM_QUESTIONS } from "../../constants/Constants";

// Shuffle helper
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Prepare questions: shuffle options + update answer index
function prepareQuestions(base: Question[]): Question[] {
  return base.map((q) => {
    const shuffledOptions = shuffle(q.options);
    const newAnswerIndex = shuffledOptions.indexOf(q.options[q.answer]);
    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIndex,
    };
  });
}

export default function QuestionaireUI({ mode, onFinish, onCancel }: Questionaire & { onCancel?: () => void }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  // Memoize pool so shuffling happens once per session
  const pool: Question[] = useMemo(() => {
    const prepared = prepareQuestions(questions as Question[]);
    return mode === "Exam" ? shuffle(prepared).slice(0, EXAM_QUESTIONS) : prepared;
  }, [mode]);

  const current = pool[index];

  // Timer effect
  useEffect(() => {
    if (mode !== "Exam") return;
    if (timeLeft <= 0) return;

    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [mode, timeLeft]);

  // Finish when time runs out
  useEffect(() => {
    if (timeLeft === 0) finish();
  }, [timeLeft]);

  const selectAnswer = (i: number) => {
    if (answers[index] != null) return; // prevent changing answer
    const newAnswers = [...answers];
    newAnswers[index] = i;
    setAnswers(newAnswers);

    if (i === current.answer) setScore((s) => s + 1);
  };

  const finish = () => {
    const percent = Math.round((score / pool.length) * 100);
    onFinish(percent);
  };

  const goPrev = () => index > 0 && setIndex(index - 1);
  const goNext = () => index < pool.length - 1 && setIndex(index + 1);
  const goToQuestion = (i: number) => setIndex(i);

  const getButtonClass = (i: number) => {
    if (answers[index] == null) return "btn btn-outline-primary m-1 quiz-btn";
    if (i === current.answer) return "btn btn-success m-1 quiz-btn";
    if (i === answers[index] && i !== current.answer) return "btn btn-danger m-1 quiz-btn";
    return "btn btn-outline-secondary m-1";
  };

  const getProgressClass = (i: number) => {
    const ans = answers[i];
    if (ans == null) return "bg-secondary";
    return ans === pool[i].answer ? "bg-success" : "bg-danger";
  };

  return (
    <div className="container mt-3 pb-5">
      {mode === "Exam" && (
        <div className="alert alert-danger">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </div>
      )}

      {/* Progress Navigation */}
      <div className="d-flex flex-wrap mb-3">
        {pool.map((_, i) => (
          <div
            key={i}
            className={`border m-1 ${getProgressClass(i)}`}
            style={{ width: "10px", height: "10px", cursor: "pointer" }}
            onClick={() => goToQuestion(i)}
          />
        ))}
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title min-w-[80">{current.question}</h5>
          <div className="d-flex flex-column">
            {current.options.map((opt: string, i: number) => (
              <button
                key={i}
                className={getButtonClass(i) }
                onClick={() => selectAnswer(i)}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="d-flex justify-content-between mt-3">
            <div>
              <button className="btn btn-secondary quiz-btn me-2" onClick={goPrev} disabled={index === 0}>
                {MESSAGES.PREVIOUS}
              </button>
              {index < pool.length - 1 ? (
                <button className="btn btn-secondary quiz-btn" onClick={goNext}>
                  {MESSAGES.NEXT}
                </button>
              ) : (
                <button className="btn btn-primary  quiz-btn" onClick={finish}>
                  {MESSAGES.FINISH}
                </button>
              )}
            </div>
          </div>

          <p className="text-muted mt-3">
            {MESSAGES.QUESTION_OF} {index + 1} {MESSAGES.OF} {pool.length}
          </p>
        </div>
      </div>

      {onCancel && (
        <div className="mt-5 text-end">
          <button className="btn btn-outline-dark  quiz-btn" onClick={onCancel}>
            {MESSAGES.CANCEL}
          </button>
        </div>
      )}
    </div>
  );
}
