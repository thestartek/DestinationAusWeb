import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
