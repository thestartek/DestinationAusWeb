"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import Loader from "@/components/ui/loader";
import { GET_ARTICLE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";

const Article = ({ articleId }: { articleId: string }) => {
  const { data, loading, error } = useQuery(GET_ARTICLE, {
    variables: { id: articleId },
  });
  const article = data?.getArticle;

  if (loading)
    return (
      <Container className="min-h-[70vh] justify-center">
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container className="min-h-[70vh] justify-center">
        Error: {error.message}
      </Container>
    );

  return (
    <Container className="min-h-[70vh] max-w-[48rem] my-8">
      <div className="flex items-center gap-4 my-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center -space-y-1 select-none">
          <span>Username</span>
          <span className="text-muted-foreground text-sm">Date</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">{article?.title}</h1>
      <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
        <Image src={"/blog1.webp"} fill alt="Article Thumbnail Image" />
      </AspectRatio>
      <div className="mt-2">{article?.description}</div>
    </Container>
  );
};

export default Article;
