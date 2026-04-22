import * as React from "react";

interface FacebookIconProps {
  className?: string;
}

export default function FacebookIcon({ className }: FacebookIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.6v2.1H8.5V14H11v7h2.5Z" />
    </svg>
  );
}
