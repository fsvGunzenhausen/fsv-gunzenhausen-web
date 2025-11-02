import type { TestMode } from "./TestMode";

export interface Result {
  date: number;
  score: number;
  mode: TestMode; // "Practice" | "Exam"
}