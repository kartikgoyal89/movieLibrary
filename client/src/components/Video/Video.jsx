import React from "react";
import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default Video;
