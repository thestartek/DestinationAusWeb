import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 max-w-7xl mx-auto my-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
