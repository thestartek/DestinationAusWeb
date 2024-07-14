import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles Page",
};

const ArticleLayout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default ArticleLayout;
