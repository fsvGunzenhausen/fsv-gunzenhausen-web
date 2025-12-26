import { useState } from "react";

interface YearSelectorProps {
  selectedYear: number;
  availableYears: number[];
  onChange: (year: number) => void;
}

export function YearSelector({ selectedYear, availableYears, onChange }: YearSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="year-selector d-inline-block position-relative">
      <button
        className="btn dropdown-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: '#1879b4',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.4rem 1rem',
          fontSize: '1.2rem',
          width: '6rem',
          textAlign: 'left',
        }}
      >
        {selectedYear}
      </button>

      <ul
        className={`dropdown-menu${open ? " show" : ""}`}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          minWidth: '6rem',
          borderRadius: '0.5rem',
          padding: 0,
          margin: 0,
          fontSize: '1.2rem',
          backgroundColor: '#d3d3d3',
          zIndex: 1000,
        }}
      >
        {availableYears.map(year => (
          <li key={year}>
            <button
              className="dropdown-item"
              style={{
                backgroundColor: '#d3d3d3',
                color: '#000',
                fontSize: '1.2rem',
              }}
              onClick={() => { onChange(year); setOpen(false); }}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

