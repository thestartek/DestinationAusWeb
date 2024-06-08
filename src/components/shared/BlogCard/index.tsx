import { useState } from "react";
import Image from "next/image";
import { Ellipsis, Heart, Reply, Share } from "lucide-react";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  createdByUs: boolean;
  comments: string[];
};

export function BlogCard({
  image,
  title,
  description,
  createdByUs,
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
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
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
              {comments.map((comment, index) => (
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
    <div className="bg-white rounded shadow-md">
      <Image
        src={image}
        alt="Blog post image"
        width={200}
        height={150}
        objectFit="cover"
        className="rounded-t"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700 text-sm truncate overflow-hidden">
          {description.substring(0, 100)}...
        </p>
        {createdByUs ? (
          <div className="flex justify-end text-xs text-gray-500">...</div>
        ) : null}
      </div>
      <div className="bg-white border-t pt-4 px-4 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Heart />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          <Reply />
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <Share />
        </button>
      </div>

      {showComments ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {comments.map((comment, index) => (
              <p key={index} className="text-sm text-gray-500 py-2">
                {comment}
                <button
                  onClick={() => console.log("Comment clicked")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  <Reply />
                </button>
              </p>
            ))}
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setShowComments(!showComments)}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 mt-2 mb-2"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}
