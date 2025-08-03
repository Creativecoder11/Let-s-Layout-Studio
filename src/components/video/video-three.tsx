import React from "react";

export default function VideoThree() {
  return (
    <div className="tp-video-3-area">
      <div className="tp-video-3-wrap p-relative">
        <video
          data-speed=".7"
          className="play-video"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source
            src="https://youtu.be/dP1ZtdzMbBY?si=x-FkIkKB72YNrTsl"
            // type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
