import { useState } from "react";
import Image from "next/image";
import { Ellipsis, Heart, Reply, Share, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  source: string;
  createdByUs: boolean;
  comments?: string[];
};

export function BlogCard({
  image,
  title,
  description,
  createdByUs = false,
  comments,
}: BlogCardProps) {
  return (
    <main className="relative group">
      <div className="bg-white rounded-lg shadow-md max-w-[480px]">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
          <Image
            src={"/blog1.webp"}
            fill
            alt="Blog Image"
            className="group-hover:scale-105 trnasition-all ease-in-out duration-500"
          />
        </AspectRatio>
      </div>
      <div className="flex items-center justify-center gap-4 py-2 pl-2 pr-4 bg-primary rounded-[5em] w-fit absolute top-1 left-1 opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-500">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center -space-y-1 select-none">
          <span>Username</span>
          <span className="text-muted-foreground text-sm">Date</span>
        </div>
      </div>
    </main>
  );
}

export function AnotherBlogCard({
  image,
  title,
  description,
  createdByUs,
  comments,
}: BlogCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <main>
      <div className="bg-white rounded-lg shadow-md mx-2 group border-primary border-2 max-w-[480px]">
        <Link href={`/blog`}>
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden object-contain rounded-t-md"
          >
            <Image
              src={"/airplane1.svg"}
              alt={title}
              width={400}
              height={200}
              className="transition-all ease-in-out duration-500 mb-4 object-contain group-hover:scale-105"
            />
          </AspectRatio>
          <h2 className="text-xl font-semibold my-2 px-2 truncate">{title}</h2>
          <p className="text-muted-foreground text-sm px-2">
            {new Date().getFullYear()}
          </p>
          <p className="px-2 mb-2 truncate">{description}</p>
        </Link>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mx-4 mt-2 border-primary border-2">
        <div className="flex items-center justify-around">
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <Heart size={24} />
          </button>
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <Reply size={24} />
          </button>
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <Share size={24} />
          </button>
        </div>
      </div>
    </main>
  );
}
