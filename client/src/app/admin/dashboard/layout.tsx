"use client";

import { PropsWithChildren } from "react";
import { Sidebar } from "@/components/DashboardComponents";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/utils";

const AdminInnerLayout = ({ children }: PropsWithChildren) => {
  return (
    <Sidebar>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Sidebar>
  );
};

export default AdminInnerLayout;
