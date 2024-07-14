import { useQuery } from "@apollo/client";
import { ArticleCard } from "../ArticleCard";
import { ArticleType } from "@/types";
import Loader from "@/components/ui/loader";
import { GET_ALL_ARTICLES } from "@/graphql/queries";

const Articles = () => {
  const { data, loading } = useQuery(GET_ALL_ARTICLES);
  console.log("Client Data: ", data);

  if (loading) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center my-8">
      {data?.getAllArticles.map((article: ArticleType) => (
        <ArticleCard
          key={article._id}
          _id={article._id}
          title={article.title}
          description={article.description}
          image="/blog1.webp"
        />
      ))}
    </main>
  );
};

export default Articles;
