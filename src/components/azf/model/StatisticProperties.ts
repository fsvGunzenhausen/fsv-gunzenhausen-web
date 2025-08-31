import type { ResultList } from "./ResultList";

export interface StatisticsProps extends ResultList {
  onReset?: () => void;
}
