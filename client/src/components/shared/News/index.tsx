import { useQuery } from "@apollo/client";
import { NewsCard } from "../NewsCard";
import { NewsType } from "@/types";
import { GET_ALL_NEWS } from "@/graphql/queries";
import Loader from "@/components/ui/loader";

const News = () => {
  const { data, loading } = useQuery(GET_ALL_NEWS);
  console.log("Client Data: ", data);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.getAllNews.map((news: NewsType) => (
        <NewsCard
          key={news._id}
          title={news.title}
          description={news.description}
          image="/airplane1.svg"
        />
      ))}
    </main>
  );
};

export default News;
