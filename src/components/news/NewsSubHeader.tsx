import { useNews } from "./NewsContext";
import { YearSelector } from "./YearSelector";
import newsDaten from "./Newsdaten";

export function NewsSubHeader() {
  const { selectedYear, setSelectedYear } = useNews();

  // Get only valid years from newsDaten
const availableYears = Array.from(
  new Set(newsDaten.map(item => Number(item.id.slice(0, 4))))
).sort((a, b) => b - a);


  // Ensure selectedYear is always valid
  const yearToShow = availableYears.includes(selectedYear)
    ? selectedYear
    : availableYears[0] || new Date().getFullYear();

  return (
    <YearSelector
      selectedYear={yearToShow}
      availableYears={availableYears.length > 0 ? availableYears : [new Date().getFullYear()]}
      onChange={setSelectedYear}
    />
  );
}
