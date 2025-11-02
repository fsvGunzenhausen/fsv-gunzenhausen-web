import { useState } from "react";
import type { Result } from "./model/Result";
import QuestionaireUI from "./components/question/Question";
import type { TestMode } from "./model/TestMode";
import { BUTTONS } from "./constants/Constants";

// Import your image
import mainImage from "./assets/main.jpg";
import { Statistics } from "./components/statistics/Statistics";


export default function AZFApp() {
  const [mode, setMode] = useState<TestMode | null>(null);
  const [results, setResults] = useState<Result[]>(() => {
    return JSON.parse(localStorage.getItem("results") || "[]");
  });

  const saveResult = (score: number) => {
    if (!mode) return; // safeguard
    const newResults = [...results, { date: Date.now(), score, mode }];
    setResults(newResults);
    localStorage.setItem("results", JSON.stringify(newResults));
  };

  return (
    <div className="container quiz-scope">
      <div className="text-center px-2">
        {/* Header */}
        <img
          src={mainImage}
          alt="Quiz Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: "400px"}}
        />

        {/* Content */}
        {!mode ? (
          <>
            <div className="d-grid gap-3 mb-4 max-w-[700px]">
              <button className="btn btn-primary  quiz-btn" onClick={() => setMode("Practice")}>
                {BUTTONS.PRACTICE}
              </button>
              <button className="btn btn-success  quiz-btn" onClick={() => setMode("Exam")}>
                {BUTTONS.EXAM}
              </button>
            </div>

            <Statistics
              results={results}
              onReset={() => {
                setResults([]);
                localStorage.removeItem("results");
              }}
            />
          </>
        ) : (
          <QuestionaireUI
            mode={mode}
            onFinish={(score: number) => {
              saveResult(score);
              setMode(null);
            }}
            onCancel={() => setMode(null)} // cancels without saving
          />
        )}
      </div>
    </div>
  );
}

