"use client";

import { useEffect, useState } from "react";

interface CastButtonProps {
  mediaUrl: string;
  mediaType?: string;
  title: string;
  poster?: string | null;
}

declare global {
  interface Window {
    chrome?: any;
    cast?: any;
    __onGCastApiAvailable?: (available: boolean) => void;
  }
}

export default function CastButton({
  mediaUrl,
  mediaType = "video/mp4",
  title,
  poster,
}: CastButtonProps) {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [castAvailable, setCastAvailable] = useState(false);

  // Load Google Cast SDK
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.cast && window.cast.framework) {
      setIsReady(true);
      setCastAvailable(true);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-cast-sdk="true"]'
    );
    window.__onGCastApiAvailable = (available: boolean) => {
      setCastAvailable(available);
      setIsReady(available && !!window.cast?.framework);
    };
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
      script.async = true;
      script.dataset.castSdk = "true";
      document.body.appendChild(script);
    }
    return () => {
      window.__onGCastApiAvailable = undefined;
    };
  }, []);

  // Initialize Cast Framework
  useEffect(() => {
    if (!isReady || typeof window === "undefined") return;
    const cast = window.cast;
    const chrome = window.chrome;
    if (!cast?.framework || !chrome?.cast) return;
    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    });
  }, [isReady]);

  async function handleCast() {
    try {
      setIsLoading(true);
      const cast = window.cast;
      const chrome = window.chrome;
      if (!cast?.framework || !chrome?.cast) {
        setErrorMessage("Google Cast is not ready yet.");
        return;
      }
      const context = cast.framework.CastContext.getInstance();
      await context.requestSession();
      const session = context.getCurrentSession();
      if (!session) {
        throw new Error("Cast session was not established.");
      }
      const mediaInfo = new chrome.cast.media.MediaInfo(mediaUrl, mediaType);
      mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
      mediaInfo.metadata.title = title;
      if (poster) {
        mediaInfo.metadata.images = [{ url: poster }];
      }
      const request = new chrome.cast.media.LoadRequest(mediaInfo);
      await session.loadMedia(request);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to start casting."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleCast}
        disabled={!isReady || isLoading || !castAvailable}
        className="button-secondary px-4 py-2.5 text-sm"
      >
        {isLoading
          ? "Preparing cast..."
          : !castAvailable
          ? "No devices found"
          : "Cast to TV"}
      </button>
      {errorMessage ? (
        <p className="text-xs text-rose-300">{errorMessage}</p>
      ) : null}
    </div>
  );
}