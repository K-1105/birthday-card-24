import magpie1 from "../assets/magpies/magpie1.svg";
import magpie2 from "../assets/magpies/magpie2.svg";
import magpie3 from "../assets/magpies/magpie3.svg";
import magpie4 from "../assets/magpies/magpie4.svg";

const magpieImages = [magpie1, magpie2, magpie3, magpie4];

/**
 * Generates an array of bird objects for animation based on provided bird data.
 *
 * @param {Record<number, {reverseFly?: boolean, startTop?: number, flyDelay?: string, magpieImage?: number, flip?: boolean}>} birdData - Object mapping bird IDs to their configurations.
 * @param {number} startLeft - Initial left position for the first bird.
 * @param {number} leftIncrement - Increment of left position between birds.
 *
 * @returns {Array} An array of bird objects ready for animation.
 */
export function generateBirds(
  birdData: Record<
    number,
    {
      reverseFly?: boolean;
      startTop?: number;
      flyDelay?: string;
      magpieImage?: number;
      flip?: boolean;
    }
  >,
  startLeft: number,
  leftIncrement: number
) {
  return Object.entries(birdData).map(([birdId, bird], index) => {
    const {
      reverseFly = false,
      startTop = 60 + Math.random() * 50, // Default random starting position
      flyDelay = `${2 + index * 0.5}s`, // Default staggered delay
      magpieImage = index % magpieImages.length, // Cycle through magpie images
      flip = Math.random() < 0.5, // Random horizontal flip by default
    } = bird;

    return {
      id: parseInt(birdId, 10),
      startLeft: reverseFly ? -30 : startLeft + index * leftIncrement,
      startTop: reverseFly ? 230 + Math.random() * 60 : startTop,
      flyDuration: `${2 + Math.random() * 0.5}s`,
      flyDelay: reverseFly ? `${20 + Math.random()}s` : flyDelay,
      endLeft: reverseFly ? window.innerWidth + 20 : -100,
      endTop: reverseFly ? 230 + Math.random() * 60 : startTop,
      src: magpieImages[magpieImage],
      alt: `Magpie ${birdId}`,
      flip,
      reverseFly,
    };
  });
}