
import { MESSAGES, PASS_THRESHOLD } from "../../constants/Constants";
import type { StatisticsProps } from "../../model/StatisticProperties";

export function Statistics({ results, onReset }: StatisticsProps) {
  if (!results.length) return <p>{MESSAGES.NO_RESULTS}</p>;

  const avg = Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length);

  return (
    <div className="mt-4">
      <h2>{MESSAGES.STATS_TITLE}</h2>
      <p>
        {MESSAGES.ATTEMPTS}: {results.length}
      </p>
      <p>
        {MESSAGES.AVERAGE_SCORE}: {avg}%
      </p>

    <ul className="list-group mt-2">
      {results.slice(-5).map((r, i) => (
        <li
          key={i}
          className="list-group-item d-flex justify-content-between align-items-center py-3"
        >
          <span className="me-3">
            {new Date(r.date).toLocaleString()} ({r.mode === "Exam" ? MESSAGES.SIMULATION : MESSAGES.PRACTICE})
          </span>
          <span className="ms-3">
            {r.score}% {r.score >= PASS_THRESHOLD ? MESSAGES.PASS : MESSAGES.FAIL}
          </span>
        </li>
      ))}
    </ul>

      {onReset && (
        <button className="btn btn-danger  quiz-btn mt-3" onClick={onReset}>
          {MESSAGES.RESET_STATS}
        </button>
      )}
    </div>
  );
}