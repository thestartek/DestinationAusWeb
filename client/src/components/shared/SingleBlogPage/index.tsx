import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";
import Loader from "@/components/ui/loader";
import { GET_BLOG } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";

const Blog = ({ blogId }: { blogId: string }) => {
  const { data, loading, error } = useQuery(GET_BLOG, {
    variables: { id: blogId },
  });

  const blog = data?.getBlog;

  console.log("Blog", blog);

  if (loading)
    return (
      <Container className="justify-center min-h-[70vh]">
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container className="min-h-[70vh] justify-center">
        <h2>Server Error !</h2>
        <h3>or Blog might be deleted</h3>
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
      <h1 className="text-3xl font-bold mb-2">{blog?.title}</h1>
      <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
        <Image src={"/blog1.webp"} fill alt="Blog Image" className="" />
      </AspectRatio>
      <div className="mt-2">{blog?.description}</div>
    </Container>
  );
};

export default Blog;
