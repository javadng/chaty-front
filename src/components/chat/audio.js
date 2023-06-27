import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ src, recived, sended }) => {
  const waveformRef = useRef(null);
  const waveform = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined'; // Check if running in a browser environment

    if (isBrowser && waveformRef.current !== null) {
      waveform.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#4C82F6',
        progressColor: '#1E40AF',
        height: 50, // adjust this value to change the height of the waveform
        responsive: true,
        minPxPerSec: 25, // adjust this value to change the zoom level of the waveform
      });

      waveform.current.load(src);

      // Listen to events emitted by WaveSurfer to update the isPlaying state
      waveform.current.on('play', () => {
        setIsPlaying(true);
      });
      waveform.current.on('pause', () => {
        setIsPlaying(false);
      });
      waveform.current.on('stop', () => {
        setIsPlaying(false);
      });

      return () => {
        waveform.current.destroy();
      };
    }
  }, [src]);

  return (
    <li
      className={`relative rounded-lg shadow-lg py-1 max-w-xs my-8 ${
        sended ? 'ml-auto bg-royal-purp' : 'bg-dark-c'
      }`}
    >
      <span className="absolute left-1 -top-6 text-white">13:05</span>
      <div className="relative w-5/6 ml-auto">
        <div className="absolute inset-0 rounded-lg opacity-50" />
        <div className="wavesurfer-container" ref={waveformRef} />
      </div>
      <div className="flex justify-center mt-4 absolute -top-1 left-2 z-10 bg-white rounded-[50%] w-9 h-9">
        <button
          className="mx-2 text-gray-600 hover:text-blue-600 select-none"
          onClick={() => waveform.current.playPause()}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            {isPlaying ? (
              <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            ) : (
              <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            )}
          </svg>
        </button>
      </div>
    </li>
  );
};

export default AudioPlayer;
