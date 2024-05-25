import { Urbanist } from "next/font/google";
import { PropsWithChildren } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`${urbanist.className} h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-800`}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
