import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:5000/api",
  }),
  name: "startek_server",
  version: "1.0.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export const timeAgo = (createdDate: number) => {
  const now = moment();
  const postDate = moment.unix(createdDate);

  // Calculate the difference in seconds
  const diffSeconds = now.diff(postDate, "seconds");

  if (diffSeconds < 60) {
    return `${diffSeconds} s`;
  } else if (diffSeconds < 3600) {
    return `${Math.floor(diffSeconds / 60)} min`;
  } else if (diffSeconds < 86400) {
    return `${Math.floor(diffSeconds / 3600)} hr`;
  } else if (diffSeconds < 2592000) {
    return `${Math.floor(diffSeconds / 86400)} d`;
  } else if (diffSeconds < 31536000) {
    return `${Math.floor(diffSeconds / 2592000)} mo`;
  } else {
    return `${Math.floor(diffSeconds / 31536000)} yr`;
  }
};
