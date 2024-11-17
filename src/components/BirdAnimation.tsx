import React from "react";
import magpieFly1 from "../assets/magpies/magpie-fly1.svg";
import magpieFly2 from "../assets/magpies/magpie-fly2.svg";

interface BirdAnimationProps {
  id: number;
  startLeft: number;
  startTop: number;
  flyDuration: string;
  flyDelay: string;
  endTop: number;
  src: string;
  alt: string;
  flip?: boolean;
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
 * @param {number} props.endTop - Ending top position for the fly-away animation.
 * @param {string} props.src - Source path for the bird's static, sitting image.
 * @param {string} props.alt - Alt text for the bird's static, sitting image.
 * @param {string} [props.alt=false] - Whether to flip the sitting image horizontally.
 *
 * @returns {JSX.Element} JSX for bird animation.
 */
export const BirdAnimation: React.FC<BirdAnimationProps> = ({
  id,
  startLeft,
  startTop,
  flyDuration,
  flyDelay,
  endTop,
  src,
  alt,
  flip = false,
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
      <div
        className="bird-animation"
        style={
          {
            top: `${startTop}px`,
            left: `${startLeft}px`,
            "--fly-duration": flyDuration || "1.5s",
            "--fly-delay": flyDelay || "2s",
            "--start-left": `${startLeft}px`,
            "--start-top": `${startTop}px`,
            "--end-top": `${endTop || 20}px`,
          } as React.CSSProperties
        }
      >
        <img src={magpieFly1} className="frame1" alt={`Bird ${id} frame 1`} />
        <img src={magpieFly2} className="frame2" alt={`Bird ${id} frame 2`} />
      </div>
    </>
  );
};
