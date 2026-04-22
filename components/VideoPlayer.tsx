"use client";

import { useEffect, useRef, useState } from "react";
import CastButton from "@/components/CastButton";

interface VideoPlayerProps {
  castSessionPath?: string;
  filmId: string;
  introSourceType?: string;
  introSourceUrl?: string;
  introTitle?: string;
  title: string;
  sourceUrl: string;
  sourceType?: string;
  poster?: string | null;
  initialProgressSeconds?: number;
  viewerUserId?: string;
  showCastButton?: boolean;
}

export default function VideoPlayer({
  castSessionPath,
  filmId,
  introSourceType = "video/mp4",
  introSourceUrl,
  introTitle,
  title,
  sourceUrl,
  sourceType = "video/mp4",
  poster,
  initialProgressSeconds = 0,
  viewerUserId,
  showCastButton = true,
}: VideoPlayerProps) {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const shouldAutoplayMainFeatureRef = useRef(false);
  const shouldPlayIntro = Boolean(introSourceUrl);
  const [isPlayingIntro, setIsPlayingIntro] = useState(shouldPlayIntro);
  const activeSourceUrl = isPlayingIntro && introSourceUrl ? introSourceUrl : sourceUrl;
  const activeSourceType = isPlayingIntro && introSourceUrl ? introSourceType : sourceType;
  const activeTitle = isPlayingIntro && introSourceUrl ? (introTitle ?? title) : title;

  const preventContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    setIsPlayingIntro(shouldPlayIntro);
    shouldAutoplayMainFeatureRef.current = false;
  }, [shouldPlayIntro, introSourceUrl, sourceUrl]);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) {
      return;
    }
    videoElement.src = activeSourceUrl;
    return () => {
      videoElement.removeAttribute("src");
    };
  }, [activeSourceUrl]);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) {
      return;
    }
    const resumePlayback = () => {
      if (!isPlayingIntro && initialProgressSeconds > 0) {
        videoElement.currentTime = initialProgressSeconds;
      }
    };
    if (videoElement.readyState >= 1) {
      resumePlayback();
    }
    videoElement.addEventListener("loadedmetadata", resumePlayback);
    return () => {
      videoElement.removeEventListener("loadedmetadata", resumePlayback);
    };
  }, [initialProgressSeconds, isPlayingIntro, activeSourceUrl]);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement || !isPlayingIntro || !introSourceUrl) {
      return;
    }
    const handleIntroEnded = () => {
      shouldAutoplayMainFeatureRef.current = true;
      setIsPlayingIntro(false);
    };
    videoElement.addEventListener("ended", handleIntroEnded);
    return () => {
      videoElement.removeEventListener("ended", handleIntroEnded);
    };
  }, [introSourceUrl, isPlayingIntro]);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement || isPlayingIntro || !shouldAutoplayMainFeatureRef.current) {
      return;
    }
    const playMainFeature = () => {
      void videoElement.play().catch(() => undefined);
      shouldAutoplayMainFeatureRef.current = false;
    };
    if (videoElement.readyState >= 2) {
      playMainFeature();
      return;
    }
    videoElement.addEventListener("loadeddata", playMainFeature, { once: true });
    return () => {
      videoElement.removeEventListener("loadeddata", playMainFeature);
    };
  }, [activeSourceUrl, isPlayingIntro]);

  useEffect(() => {
    if (!viewerUserId || isPlayingIntro) {
      return;
    }
    const intervalId = window.setInterval(async () => {
      const videoElement = videoElementRef.current;
      if (!videoElement) {
        return;
      }
      const progressSeconds = Math.floor(videoElement.currentTime ?? 0);
      if (progressSeconds <= 0) {
        return;
      }
      await fetch("/api/watch-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filmId,
          progressSeconds,
        }),
      }).catch(() => undefined);
    }, 10_000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [filmId, isPlayingIntro, viewerUserId]);

  return (
    <div className="space-y-4">
      <div
        className="surface-panel-strong overflow-hidden rounded-[2rem] p-3"
        onContextMenu={preventContextMenu}
      >
        <video
          ref={videoElementRef}
          key={activeSourceUrl}
          className="aspect-video w-full rounded-[1.45rem] bg-black"
          controls
          controlsList="nodownload"
          onContextMenu={preventContextMenu}
          playsInline
          preload="metadata"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {isPlayingIntro ? (
          <p className="text-sm text-[var(--muted)]">
            Intro clip is playing before the feature starts.
          </p>
        ) : viewerUserId ? (
          <p className="text-sm text-[var(--muted)]">
            Progress sync saves every 10 seconds and resumes from your last watch
            point.
          </p>
        ) : (
          <p className="text-sm text-[var(--muted)]"></p>
        )}
        {showCastButton && !isPlayingIntro ? (
          <CastButton
            mediaUrl={activeSourceUrl}
            mediaType={activeSourceType}
            title={activeTitle}
            poster={poster}
          />
        ) : null}
      </div>
    </div>
  );
}