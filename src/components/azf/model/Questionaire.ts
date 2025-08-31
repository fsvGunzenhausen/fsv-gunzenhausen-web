import type { TestMode } from "./TestMode";

export interface Questionaire {
  mode: TestMode;
  onFinish: (score: number) => void;
}


