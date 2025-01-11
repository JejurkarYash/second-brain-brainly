import { Share2, Trash2 } from "lucide-react";
import YoutubeIcon from "@/icons/YoutubeIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { Card, CardContent, CardHeader } from "./card";
import { lazy, Suspense, useEffect } from "react";

interface TwitterEmbedProps {
  url: string;
}

// Lazy load Twitter embed component
const TwitterEmbed = lazy(
  () =>
    new Promise<{ default: React.ComponentType<TwitterEmbedProps> }>(
      (resolve) => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.onload = () => {
          resolve({
            default: ({ url }: TwitterEmbedProps) => {
              useEffect(() => {
                // @ts-ignore
                window.twttr?.widgets.load();
              }, [url]);

              return (
                <blockquote className="twitter-tweet">
                  <a href={url.replace("x.com", "twitter.com")}></a>
                </blockquote>
              );
            },
          });
        };
        document.body.appendChild(script);
      }
    )
);

const TweetPlaceholder = () => (
  <div className="animate-pulse space-y-2">
    <div className="h-32 bg-gray-200 rounded-md"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const YoutubeSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-200 rounded-md"></div>
  </div>
);

interface ContentCardProps {
  title: string;
  type: "youtube" | "twitter" | "blog" | "article";
  url: string;
  onDelete?: () => void;
}

export const ContentCard = ({
  title,
  type,
  url,
  onDelete,
}: ContentCardProps) => {
  let icon;
  let videoId;

  if (type === "youtube") {
    icon = <YoutubeIcon />;
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s?]+)/;
    const match = url.match(regex);
    videoId = match ? match[1] : null;
  }
  if (type === "twitter") {
    icon = <TwitterIcon color="#aeb0b2" />;
  }

  const handleShareIconClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Card
      key={title}
      className="min-h-72 min-w-48 w-[22rem]  justify-center  h-96  items-center font-satoshi max-h-96 overflow-x-hidden border shadow-md border-gray-300 lg:w-[22rem]   hover:shadow-xl"
    >
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="container flex items-center justify-between">
          <div className="flex justify-between space-x-4">
            <div className="text-gray-400 size-4">{icon}</div>
            <div>
              <h3 className="text-md font-medium">{title}</h3>
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-3 text-gray-400">
            <Share2
              size={21}
              className="cursor-pointer"
              onClick={handleShareIconClick}
            />
            <Trash2 onClick={onDelete} size={21} className="cursor-pointer" />
          </div>
        </div>
      </CardHeader>

      <CardContent className=" lg:px-6 ">

        {/* rendering the youtube video */}
        {type === "youtube" && (
          <Suspense fallback={<YoutubeSkeleton />}>
            <iframe
              width="310"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-md"
            />
          </Suspense>
        )}


        {/* rendering the tweets  */}
        {type === "twitter" && (
          <Suspense fallback={<TweetPlaceholder />}>
            <TwitterEmbed url={url} />
          </Suspense>
        )}
      </CardContent>
    </Card>
  );
};
