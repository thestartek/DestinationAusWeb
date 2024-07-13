import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type BlogCardProps = {
  _id: string;
};

export function BlogCard({ _id }: BlogCardProps) {
  return (
    <Link
      href={`blogs/${_id}`}
      className="relative group cursor-pointer overflow-hidden rounded-lg"
    >
      <div className="bg-white rounded-lg shadow-md max-w-[480px]">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
          <Image
            src={"/blog1.webp"}
            fill
            alt="Blog Image"
            className="group-hover:scale-105 trnasition-all ease-in-out duration-500 filter"
          />
        </AspectRatio>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-black/0 group-hover:bg-black/20 transition-all ease-in-out duration-500" />
      <div className="flex items-center justify-center gap-4 py-2 pl-2 pr-4 bg-primary rounded-[5em] w-fit absolute z-40 top-1 left-1 opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-500">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center -space-y-1 select-none">
          <span>Username</span>
          <span className="text-muted-foreground text-sm">Date</span>
        </div>
      </div>
    </Link>
  );
}
