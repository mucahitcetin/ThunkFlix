import React from "react";
import YouTube from "react-youtube";

const Video = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Fragman</h2>
      {data.map((fragman) => (
        <YouTube
          key={fragman.key} //
          width="480"
          height="270"
          videoId={fragman.key}
          className="gap-5"
        ></YouTube>
      ))}
    </div>
  );
};

export default Video;
