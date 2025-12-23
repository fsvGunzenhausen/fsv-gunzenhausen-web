import { createContext, useContext, useState, ReactNode } from "react";

interface NewsContextType {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

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
