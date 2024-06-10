import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  createdByUs: boolean;
  comments: string[];
};

export function NewsCard({
  image,
  title,
  description,
  createdByUs,
  comments,
}: BlogCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md mx-2 group border-primary border-2">
      <Link href={`/blog`}>
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden object-contain rounded-t-md"
        >
          <Image
            src={`${image}`}
            alt={title}
            width={400}
            height={200}
            className="transition-all ease-in-out duration-500 mb-4 object-contain group-hover:scale-105"
          />
        </AspectRatio>
        <h2 className="text-xl font-semibold my-2 px-2">{title}</h2>
        <p className="text-muted-foreground text-sm px-2">
          {new Date().getFullYear()}
        </p>
        <p className="px-2 mb-2">{description}</p>
      </Link>
    </div>
  );
}
