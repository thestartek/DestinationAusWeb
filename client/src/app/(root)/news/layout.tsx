import Container from "@/components/ui/container";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "News",
  description: "News Page",
};

const NewsLayout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default NewsLayout;
