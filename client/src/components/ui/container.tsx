import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-2 max-w-7xl mx-auto my-4">{children}</div>
  );
};

export default Container;
