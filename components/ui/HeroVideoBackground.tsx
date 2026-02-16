"use client";

import { useEffect, useRef } from "react";

interface HeroVideoBackgroundProps {
  src: string;
  className?: string;
}

/**
 * Hero background video: autoplay only (muted, loop). No tap-to-play.
 * Starts as soon as the video can play when the user visits the page.
 */
export default function HeroVideoBackground({ src, className = "" }: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => video.play().catch(() => {});
    play();
    const events = ["loadeddata", "canplay", "canplaythrough", "loadedmetadata"] as const;
    events.forEach((e) => video.addEventListener(e, play));
    return () => events.forEach((e) => video.removeEventListener(e, play));
  }, [src]);

  return (
    <div className="absolute inset-0 min-h-full min-w-full">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
