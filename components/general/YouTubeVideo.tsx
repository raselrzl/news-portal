// components/YouTubeVideo.tsx

interface YouTubeVideoProps {
    videoId: string;
    title?: string;
  }
  
  const YouTubeVideo = ({ videoId, title = "YouTube video" }: YouTubeVideoProps) => {
    return (
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-[200px] md:h-[220px]"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <p className="text-xl my-4 font-bold text-foreground/80">{title}</p>
      </div>
    );
  };
  
  export default YouTubeVideo;
  