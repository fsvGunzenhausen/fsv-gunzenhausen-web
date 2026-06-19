import { useNews } from "./NewsContext";
import { YearSelector } from "./YearSelector";

import { useEffect } from "react";

export function NewsSubHeader() {
  const { selectedYear, setSelectedYear } = useNews();

  // Get only valid years from newsDaten
const availableYears = [2025,2026];


  useEffect(() => {
    if (availableYears.length === 0) return;

    if (!availableYears.includes(selectedYear)) {
      const closestPreviousYear =
        availableYears.find(year => year < selectedYear) ??
        availableYears[0];

      setSelectedYear(closestPreviousYear);
    }
  }, [availableYears, selectedYear, setSelectedYear]);



  return (
    <YearSelector
      selectedYear={selectedYear}
      availableYears={availableYears}
      onChange={setSelectedYear}
    />
  );
}
