import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const isMobile = window.innerWidth <= 640; // Check if the screen width is less than or equal to 640px

  const opts = {
    height: isMobile ? "240" : "360", // Set height to 240px on mobile, and 360px on larger screens
    width: isMobile ? "100%" : "640px", // Set width to 100% on mobile, and 640px on larger screens
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <YouTube
        videoId="_jSZjyJsjTM" // Replace with your YouTube video ID
        opts={opts}
      />
    </div>
  );
};

export default VideoPlayer;
