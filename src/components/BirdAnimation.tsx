import React from "react";
import { FlyingBirds } from "./BirdFlying";

interface BirdAnimationProps {
  id: number;
  startLeft: number;
  startTop: number;
  flyDuration: string;
  flyDelay: string;
  endLeft: number;
  endTop: number;
  src: string;
  alt: string;
  flip?: boolean;
  reverseFly?: boolean;
}

/**
 * BirdAnimation component renders a bird animation sequence to sit then sing and fly away.
 *
 * @param {BirdAnimationProps} props - Props for the BirdAnimation component.
 * @param {number} props.id - Unique identifier for the bird.
 * @param {number} props.startLeft - Starting left position in pixels.
 * @param {number} props.startTop - Starting top position in pixels.
 * @param {string} props.flyDuration - Duration of the fly-away animation in seconds (e.g., '1.5s').
 * @param {string} props.flyDelay - Delay before the fly-away animation starts in seconds (e.g., '2s').
 * @param {number} props.endLeft - Ending left position for the fly-away animation.
 * @param {number} props.endTop - Ending top position for the fly-away animation.
 * @param {string} props.src - Source path for the bird's static, sitting image.
 * @param {string} props.alt - Alt text for the bird's static, sitting image.
 * @param {string} [props.alt=false] - Whether to flip the sitting image horizontally.
 * @param {string} [props.reverseFly=false] - Whether to flip the flying image horizontally. 
*
 * @returns {JSX.Element} JSX for bird animation.
 */
export const BirdAnimation: React.FC<BirdAnimationProps> = ({
  id,
  startLeft,
  startTop,
  flyDuration,
  flyDelay,
  endLeft,
  endTop,
  src,
  alt,
  flip = false,
  reverseFly = false,
}) => {
  return (
    <>
      <div
        className="magpie"
        style={
          {
            top: `${startTop}px`,
            left: `${startLeft}px`,
            transform: `${flip ? "scale(-1, 1)" : "scale(1)"}`,
            "--fly-duration": flyDuration,
            "--fly-delay": flyDelay,
          } as React.CSSProperties
        }
      >
        <img src={src} alt={alt} />
      </div>
      <div
        className="song-symbol"
        style={
          {
            top: `${startTop}px`,
            left: `${startLeft}px`,
            "--fly-delay": flyDelay || "2s",
          } as React.CSSProperties
        }
      >
        <p>&#x266A;</p> {/* ♪ */}
      </div>
      <FlyingBirds
        id={id}
        startLeft={startLeft}
        startTop={startTop}
        flyDuration={flyDuration}
        flyDelay={flyDelay}
        endLeft={endLeft}
        endTop={endTop}
        reverse={reverseFly}
      />
    </>
  );
};
