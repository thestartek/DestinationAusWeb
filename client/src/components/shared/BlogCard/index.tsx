import { useState } from "react";
import Image from "next/image";
import { Ellipsis, Heart, Reply, Share, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
        showOverlay ? "fixed inset-0 z-50" : "hover:shadow-lg"
      } ${showOverlay ? "transform scale-100" : "transform scale-100"}`}
    >
      <div
        className="relative w-full h-48 cursor-pointer"
        onClick={handleCardClick}
      >
        <Image
          src={"/airplane1.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-gray-600 truncate">{description}</p>
        {createdByUs && (
          <div className="absolute top-2 right-2">
            <Ellipsis className="text-gray-600" />
          </div>
        )}
      </div>
      <div className="px-4 py-2 flex justify-between items-center border-t border-gray-200">
        <button className="flex items-center space-x-1 text-gray-600">
          <Heart />
          <span>Like</span>
        </button>
        <button
          className="flex items-center space-x-1 text-gray-600"
          onClick={handleCardClick}
        >
          <Reply />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <Share />
          <span>Share</span>
        </button>
      </div>

      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-2xl">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleOverlayClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <div className="space-y-4">
              {comments?.map((comment, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-lg">
                  <p className="text-gray-800">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
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
