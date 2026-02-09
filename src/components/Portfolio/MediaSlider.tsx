import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Type definition for media items (video or image)
type MediaType = "video" | "image";

interface MediaItem {
  type: MediaType;
  src: string;
  alt?: string; // Optional alt text for accessibility
}

interface MediaSliderProps {
  // Array of media items to display
  media: MediaItem[];
  // Auto-advance interval in milliseconds (default: 4000ms)
  autoPlayInterval?: number;
  // Whether to enable auto-advance (default: true)
  autoPlay?: boolean;
  // Maximum width constraint for the slider (default: 100%)
  maxWidth?: string;
  // Additional CSS classes for the container
  className?: string;
}

/**
 * MediaSlider Component
 * 
 * A reusable media slider that supports both video and images.
 * 
 * VIDEO SIZING STRATEGY:
 * ---------------------
 * To prevent zooming/cropping and show the full body in videos:
 * 
 * 1. object-contain (NOT object-cover):
 *    - object-cover fills the container and crops overflow (causes zoomed-in look)
 *    - object-contain scales the video to fit entirely within the container
 *    - This ensures the full body is visible without any cropping
 * 
 * 2. max-height constraint:
 *    - Limits the video height so it doesn't overflow the viewport
 *    - Set to 70vh (70% of viewport height) for desktop
 *    - Set to 50vh for mobile to maintain proportions
 * 
 * 3. Flexible container:
 *    - Container uses w-full and h-full to fill available space
 *    - No forced aspect-ratio means the container adapts to the media's natural ratio
 *    - Black background fills any empty space when using object-contain
 * 
 * 4. Responsive behavior:
 *    - Desktop: max-height of 70vh, centered in the viewport
 *    - Mobile: max-height of 50vh, maintains readable size
 * 
 * Features:
 * - Auto-advances between slides every 4 seconds
 * - Manual navigation with arrow buttons (appear on hover)
 * - Smooth fade transitions between slides
 * - Dot indicators for direct slide access
 * - Videos autoplay, muted, and looped with no controls
 * - Fully responsive for mobile and desktop
 * 
 * @example
 * <MediaSlider
 *   media={[
 *     { type: "video", src: "/assets/roller-hockey.mp4" },
 *     { type: "image", src: "/assets/team-india.jpg", alt: "Team India" }
 *   ]}
 *   autoPlayInterval={4000}
 * />
 */
const MediaSlider = ({
  media,
  autoPlayInterval = 4000,
  autoPlay = true,
  maxWidth = "100%",
  className = "",
}: MediaSliderProps) => {
  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to control transition animation
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Ref for the auto-play timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Navigate to a specific slide with smooth transition
   */
  const goToSlide = useCallback((index: number) => {
    // Prevent navigation if already transitioning
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    // Small delay to allow fade-out effect (300ms)
    setTimeout(() => {
      setCurrentIndex(index);
      // Allow fade-in effect after index changes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  }, [isTransitioning]);

  /**
   * Navigate to the next slide (wraps around to first after last)
   */
  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % media.length;
    goToSlide(nextIndex);
  }, [currentIndex, media.length, goToSlide]);

  /**
   * Navigate to the previous slide (wraps around to last from first)
   */
  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, media.length, goToSlide]);

  /**
   * Auto-advance slides at specified interval
   */
  useEffect(() => {
    // Only auto-play if enabled and there's more than one media item
    if (!autoPlay || media.length <= 1) return;

    // Set up the timer to call goToNext at intervals
    timerRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    // Cleanup timer on unmount or when dependencies change
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, media.length, goToNext]);

  // Don't render if no media provided
  if (!media || media.length === 0) {
    return null;
  }

  const currentMedia = media[currentIndex];

  return (
    <div
      className={`relative w-full h-full group ${className}`}
      style={{ maxWidth }}
    >
      {/* 
        Main container for media content
        - Uses object-contain for videos to show full content without cropping
        - No forced aspect-ratio allows natural video dimensions
        - Black background fills any letterbox areas
      */}
      <div className="relative w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
        {/* Media element with smooth fade transition */}
        <div
          className={`
            w-full h-full flex items-center justify-center
            transition-opacity duration-500 ease-in-out
            ${isTransitioning ? "opacity-0" : "opacity-100"}
          `}
        >
          {currentMedia.type === "video" ? (
            /*
              VIDEO RENDERING:
              - object-contain: Ensures entire video is visible without cropping
              - max-h-[70vh] on desktop, max-h-[50vh] on mobile: Prevents overflow
              - w-full: Takes full width of container
              - autoPlay + muted + loop: Continuous playback without user interaction
              - playsInline: Required for autoplay on mobile Safari
              - No controls: Clean look, navigation via arrows/dots only
            */
            <video
              key={currentMedia.src}
              src={currentMedia.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-h-[70vh] md:max-h-[60vh] lg:max-h-[70vh] object-contain"
            />
          ) : (
            /*
              IMAGE RENDERING:
              - Also uses object-contain for consistency
              - Same max-height constraints as video
              - Lazy loading: Defers loading until near viewport
              - Alt text: For accessibility and SEO
            */
            <img
              key={currentMedia.src}
              src={currentMedia.src}
              alt={currentMedia.alt || "Slide image"}
              loading="lazy"
              className="w-full max-h-[70vh] md:max-h-[60vh] lg:max-h-[70vh] object-contain"
            />
          )}
        </div>
      </div>

      {/* Navigation Arrows - only show if there's more than one slide */}
      {media.length > 1 && (
        <>
          {/* Left Arrow - Previous Slide */}
          <button
            onClick={goToPrevious}
            className="
              absolute left-2 md:left-4 top-1/2 -translate-y-1/2
              w-10 h-10 md:w-12 md:h-12
              flex items-center justify-center
              bg-black/50 hover:bg-black/70
              text-white rounded-full
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50
              backdrop-blur-sm
              z-10
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow - Next Slide */}
          <button
            onClick={goToNext}
            className="
              absolute right-2 md:right-4 top-1/2 -translate-y-1/2
              w-10 h-10 md:w-12 md:h-12
              flex items-center justify-center
              bg-black/50 hover:bg-black/70
              text-white rounded-full
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50
              backdrop-blur-sm
              z-10
            "
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Slide Indicators - dots at bottom for direct navigation */}
      {media.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? "bg-white w-6" 
                  : "bg-white/50 hover:bg-white/70"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Subtle gradient overlay for control visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-2xl" />
    </div>
  );
};

export default MediaSlider;
