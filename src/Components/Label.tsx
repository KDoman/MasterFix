import { ReactNode } from "react";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-1 px-2 border-2  rounded-md text-[10px] font-bold mb-2 mr-2 -bg--active-bg-filter">
      {children}
    </div>
  );
};
