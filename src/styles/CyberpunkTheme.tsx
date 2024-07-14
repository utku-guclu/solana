import React, { ReactNode } from "react";

interface CyberpunkThemeProps {
  children: ReactNode;
}

export const CyberpunkTheme: React.FC<CyberpunkThemeProps> = ({ children }) => {
  return (
    <div className="bg-cyber-black text-cyber-blue font-cyber min-h-screen">
      {children}
    </div>
  );
};
