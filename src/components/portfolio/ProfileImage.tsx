import { useState } from "react";

type ProfileImageProps = { className?: string };

/** Loads the user's public profile image and falls back gracefully until it is added. */
export function ProfileImage({ className = "" }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-cream text-center text-sm font-semibold text-plum/70 ${className}`}
        role="img"
        aria-label="Profile photo placeholder"
      >
        <span className="max-w-36 rounded-full border border-rose/50 bg-white/70 px-4 py-2">
          Profile photo
        </span>
      </div>
    );
  }
  return (
    <img
      src="/images/profile.jpg"
      alt="Purva Jadhav portrait"
      width={900}
      height={1100}
      onError={() => setHasError(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
