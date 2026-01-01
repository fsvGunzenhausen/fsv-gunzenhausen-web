import { createContext, useContext, useState, ReactNode } from "react";
import newsDaten from "./Newsdaten";
interface NewsContextType {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {

   const availableYears = Array.from(
    new Set(newsDaten.map(item => Number(item.id.slice(0, 4))))
  ).sort((a, b) => b - a);

  const initialYear =
    availableYears.find(year => year <= new Date().getFullYear()) ??
    availableYears[0] ??
    new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState<number>(initialYear);

  return (
    <NewsContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within NewsProvider");
  return context;
}
