import React from "react";
import magpieFly1 from "../assets/magpies/magpie-fly1.svg";
import magpieFly2 from "../assets/magpies/magpie-fly2.svg";

interface FlyingBirdsProps {
  id: number;
  startLeft: number;
  startTop: number;
  flyDuration: string;
  flyDelay: string;
  endLeft: number;
  endTop: number;
  reverse?: boolean;
}

/**
 * FlyingBirds component animates a bird flying sequence.
 *
 * @param {FlyingBirdsProps} props - Props for the FlyingBirds component.
 * @param {number} props.id - Unique identifier for the bird.
 * @param {number} props.startLeft - Starting left position in pixels.
 * @param {number} props.startTop - Starting top position in pixels.
 * @param {string} props.flyDuration - Duration of the fly-away animation in seconds.
 * @param {string} props.flyDelay - Delay before the fly-away animation starts.
 * @param {number} props.endLeft - Ending left position for the fly-away animation.
 * @param {number} props.endTop - Ending top position for the fly-away animation.
 * @param {boolean} [props.reverse=false] - Whether to reverse the flying direction.
 *
 * @returns {JSX.Element} JSX for the flying bird animation.
 */
export const FlyingBirds: React.FC<FlyingBirdsProps> = ({
  id,
  startLeft,
  startTop,
  flyDuration,
  flyDelay,
  endLeft,
  endTop,
  reverse = false,
}) => {
  return (
    <div
      className="bird-animation"
      style={
        {
          top: `${startTop}px`,
          left: `${startLeft}px`,
          transform: `${reverse ? "scale(-1, 1)" : "scale(1)"}`,
          "--fly-duration": flyDuration,
          "--fly-delay": flyDelay,
          "--start-left": `${startLeft}px`,
          "--start-top": `${startTop}px`,
          "--end-left": `${endLeft || -100}px`,
          "--end-top": `${endTop || 20}px`,
        } as React.CSSProperties
      }
    >
      <img src={magpieFly1} className="frame1" alt={`Bird ${id} frame 1`} />
      <img src={magpieFly2} className="frame2" alt={`Bird ${id} frame 2`} />
    </div>
  );
};
