import { useEffect, useState } from "react";
import whiteNoise from "./assets/outdoor_white_noise.mp3";
import song from "./assets/magpie_happy_birthday.wav";
import sunset from "./assets/sunset-forground.svg";
import { BirdAnimation } from "./components/BirdAnimation";
import DelayedAudioPlayer from "./components/DelayedAudioPlayer";

const App: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [play, setPlay] = useState(false);

  const handleGoClick = () => {
    setPlay(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const magpieImages = [
    "src/assets/magpies/magpie1.svg",
    "src/assets/magpies/magpie2.svg",
    "src/assets/magpies/magpie3.svg",
    "src/assets/magpies/magpie4.svg",
  ];

  /**
   * Generates an array of bird objects using predefined bird data.
   *
   * @param {Record<number, {startTop: number, flyDelay: string}>} birdDataMap - Object mapping each bird ID to its configuration.
   * @param {number} startLeft - Initial left position for the first bird.
   * @param {number} leftIncrement - Increment of left position between birds.
   * @returns {Array} An array of bird objects with random src.
   */
  function generateBirds(
    birdDataMap: Record<
      number,
      { startTop: number; flyDelay: string; magpieImage: number; flip: boolean }
    >,
    startLeft: number,
    leftIncrement: number
  ) {
    return Object.entries(birdDataMap).map(([birdId, birdData], index) => {
      return {
        id: parseInt(birdId, 10),
        startLeft: startLeft + index * leftIncrement,
        startTop: birdData.startTop,
        flyDuration: `${1.5 + Math.random() * 1}s`,
        flyDelay: birdData.flyDelay,
        endTop: 10 + Math.floor(Math.random() * 300),
        src: magpieImages[birdData.magpieImage], // Random src
        alt: `Magpie ${birdId}`,
        flip: birdData.flip,
      };
    });
  }

  // Define bird data for 22 birds
  const birdData = {
    // hap
    1: { startTop: 63, flyDelay: "2s", magpieImage: 1, flip: false },
    2: { startTop: 68, flyDelay: "2.5s", magpieImage: 2, flip: true },
    3: { startTop: 50, flyDelay: "3s", magpieImage: 3, flip: false },
    4: { startTop: 70, flyDelay: "3.5s", magpieImage: 0, flip: true },
    5: { startTop: 44, flyDelay: "4.5s", magpieImage: 1, flip: false },
    6: { startTop: 65, flyDelay: "5s", magpieImage: 2, flip: true },
    // hap
    7: { startTop: 80, flyDelay: "6.2s", magpieImage: 3, flip: false },
    8: { startTop: 78, flyDelay: "6.7s", magpieImage: 0, flip: true },
    9: { startTop: 66, flyDelay: "7.3s", magpieImage: 1, flip: true },
    10: { startTop: 87, flyDelay: "8s", magpieImage: 2, flip: false },
    11: { startTop: 55, flyDelay: "8.7s", magpieImage: 3, flip: true },
    12: { startTop: 65, flyDelay: "9.2s", magpieImage: 0, flip: false },
    // hap
    13: { startTop: 87, flyDelay: "10.3s", magpieImage: 1, flip: true },
    14: { startTop: 87, flyDelay: "11s", magpieImage: 2, flip: false },
    15: { startTop: 17, flyDelay: "11.7s", magpieImage: 3, flip: true },
    16: { startTop: 33, flyDelay: "12.4s", magpieImage: 0, flip: false },
    17: { startTop: 50, flyDelay: "13.1s", magpieImage: 1, flip: true },
    18: { startTop: 70, flyDelay: "13.8s", magpieImage: 2, flip: false },
    19: { startTop: 87, flyDelay: "14.5s", magpieImage: 3, flip: true },
    // hap
    20: { startTop: 7, flyDelay: "15.1s", magpieImage: 0, flip: false },
    21: { startTop: 7, flyDelay: "15.7s", magpieImage: 1, flip: true },
    22: { startTop: 24, flyDelay: "16.3s", magpieImage: 2, flip: false },
    23: { startTop: 33, flyDelay: "16.9s", magpieImage: 0, flip: true },
    24: { startTop: 17, flyDelay: "17.5s", magpieImage: 3, flip: false },
    25: { startTop: 30, flyDelay: "18s", magpieImage: 2, flip: true },
  };

  // Generate birds
  const birds = generateBirds(birdData, 170, 21);

  return (
    <div className="app">
      {isPortrait ? (
        <div className="portrait-warning active">
          Please rotate your device to landscape
        </div>
      ) : (
        <div>
          {!play && (
            <button onClick={handleGoClick} className="go-button">
              Go
            </button>
          )}
          {play && (
            <>
              <DelayedAudioPlayer delay={0} audioSrc={whiteNoise} />
              <DelayedAudioPlayer delay={1000} audioSrc={song} />
              <img src={sunset} className="sunset" alt="An SVG of a sunset" />
              {birds.map((bird) => (
                <BirdAnimation key={bird.id} {...bird} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
