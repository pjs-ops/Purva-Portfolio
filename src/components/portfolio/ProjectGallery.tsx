import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ProjectGalleryProps = { images: string[]; projectName: string };

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const availableImages = images.filter((image) => !failedImages.includes(image));
  const activeImage = availableImages[activeIndex] ?? null;
  useEffect(() => {
    if (activeIndex >= availableImages.length)
      setActiveIndex(Math.max(availableImages.length - 1, 0));
  }, [activeIndex, availableImages.length]);
  const selectImage = useCallback(
    (index: number) => {
      if (!availableImages.length) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex((index + availableImages.length) % availableImages.length);
    },
    [activeIndex, availableImages.length],
  );
  const previous = useCallback(() => selectImage(activeIndex - 1), [activeIndex, selectImage]);
  const next = useCallback(() => selectImage(activeIndex + 1), [activeIndex, selectImage]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);
  if (!activeImage)
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-[1.4rem] bg-cream text-center text-sm font-semibold text-plum/70">
        <ImageOff className="mr-2 h-5 w-5" aria-hidden="true" />
        Add {projectName} screenshots to its project folder
      </div>
    );
  return (
    <div className="w-full space-y-3" aria-label={`${projectName} image gallery`}>
      <div
        className="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-[1.4rem] bg-cream"
        onTouchStart={(event) => {
          const startX = event.touches[0]?.clientX ?? 0;
          const onTouchEnd = (endEvent: TouchEvent) => {
            const deltaX = (endEvent.changedTouches[0]?.clientX ?? startX) - startX;
            if (Math.abs(deltaX) > 50) {
              if (deltaX > 0) previous();
              else next();
            }
            window.removeEventListener("touchend", onTouchEnd);
          };
          window.addEventListener("touchend", onTouchEnd, { once: true });
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={`${projectName} screenshot ${activeIndex + 1}`}
            loading="lazy"
            width={1600}
            height={1000}
            onError={() => setFailedImages((current) => [...current, activeImage])}
            custom={direction}
            initial={{ opacity: 0, x: direction * 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -18 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-contain p-1"
          />
        </AnimatePresence>
        <GalleryButton direction="previous" onClick={previous} />
        <GalleryButton direction="next" onClick={next} />
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {activeIndex + 1} / {availableImages.length}
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto px-1 pb-1" aria-label="Choose a screenshot">
        {availableImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => selectImage(index)}
            aria-label={`Show ${projectName} screenshot ${index + 1}`}
            aria-current={index === activeIndex}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-16 sm:w-24 ${index === activeIndex ? "border-berry shadow-soft" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function GalleryButton({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Previous image" : "Next image"}
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-ink shadow-soft backdrop-blur transition hover:scale-110 hover:bg-white ${isPrevious ? "left-3" : "right-3"}`}
    >
      {isPrevious ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );
}
