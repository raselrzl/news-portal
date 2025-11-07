"use client";

import { useEffect } from "react";

interface InstagramPostPreviewProps {
  igLink: string;
}

export default function InstagramPostPreviewEmbedded({ igLink }: InstagramPostPreviewProps) {
  useEffect(() => {
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
    }
  }, [igLink]);

  return (
    <div className="flex justify-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={igLink}
        data-instgrm-version="14"
        data-instgrm-captioned="true"
        style={{
          width: "100%",       // take full width of parent
          maxWidth: "100%",    // remove fixed maxWidth
          minWidth: 320,       // ensure small screens work
          margin: "auto",
          background: "#fff",
          borderRadius: "12px",
        }}
      ></blockquote>
    </div>
  );
}
