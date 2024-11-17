import { useEffect, useRef } from "react";

type DelayedAudioPlayerProps = {
  delay: number;
  audioSrc: string;
  loop?: boolean;
};

/**
 * A React component that plays a .wav audio file after a specified delay, with an optional looping feature.
 * 
 * @param {DelayedAudioPlayerProps} props - Props for the DelayedAudioPlayer component.
 * @param {number} props.delay - Delay in milliseconds before the audio starts playing.
 * @param {string} props.audioSrc - Path to the .wav file.
 * @param {boolean} [props.loop=false] - Whether the audio should loop.
 * 
 * @returns {null} - This component does not render anything.
 */
function DelayedAudioPlayer({ delay, audioSrc, loop = false }: DelayedAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = loop;

    const timer = setTimeout(() => {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }, delay);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0; // Reset audio position
    };
  }, [delay, audioSrc, loop]);

  return null; // No visual component needed
}

export default DelayedAudioPlayer;
