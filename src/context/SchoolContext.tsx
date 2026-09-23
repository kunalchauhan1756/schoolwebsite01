import { createContext, useContext, useState, ReactNode } from 'react';

interface SchoolContextType {
  schoolName: string;
  currentYear: string;
  contactEmail: string;
  contactPhone: string;
}

const defaultContext: SchoolContextType = {
  schoolName: 'Greenfield Academy',
  currentYear: '2025-2026',
  contactEmail: 'info@greenfieldacademy.edu',
  contactPhone: '(555) 123-4567',
};

const SchoolContext = createContext<SchoolContextType>(defaultContext);

export function SchoolProvider({ children }: { children: ReactNode }) {
  const [context] = useState<SchoolContextType>(defaultContext);

  return (
    <SchoolContext.Provider value={context}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchoolInfo() {
  return useContext(SchoolContext);
}
