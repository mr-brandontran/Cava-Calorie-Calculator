import React from 'react';

// Authentic CAVA Brand-Inspired Geometric Vector Wordmark
export default function CavaLogo({ className = "h-7" }) {
  return (
    <div className={`flex items-center space-x-2.5 select-none ${className}`}>
      {/* Precision Geometric CAVA Monolithic Wordmark */}
      <svg
        viewBox="0 0 148 36"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter C */}
        <path
          d="M26.5 10.5 C24 8 20.5 6.5 16.5 6.5 C9.6 6.5 4 12.1 4 19 C4 25.9 9.6 31.5 16.5 31.5 C20.5 31.5 24 30 26.5 27.5 L22.5 23.5 C21 25 19 26 16.5 26 C12.6 26 9.5 22.9 9.5 19 C9.5 15.1 12.6 12 16.5 12 C19 12 21 13 22.5 14.5 L26.5 10.5 Z"
          fill="#1A1D1A"
        />

        {/* Letter A */}
        <path
          d="M44 6.5 L32 31.5 L38 31.5 L40.5 26 L47.5 26 L50 31.5 L56 31.5 L44 6.5 Z M44 14.5 L46.2 21 L41.8 21 L44 14.5 Z"
          fill="#1A1D1A"
        />

        {/* Letter V (with signature CAVA warm golden amber accent) */}
        <path
          d="M62 6.5 L69 31.5 L75 31.5 L82 6.5 L76 6.5 L72 23 L68 6.5 L62 6.5 Z"
          fill="#E5A823"
        />

        {/* Letter A */}
        <path
          d="M100 6.5 L88 31.5 L94 31.5 L96.5 26 L103.5 26 L106 31.5 L112 31.5 L100 6.5 Z M100 14.5 L102.2 21 L97.8 21 L100 14.5 Z"
          fill="#1A1D1A"
        />
      </svg>

      {/* Unofficial / Independent Calculator Identifier */}
      <div className="flex flex-col justify-center border-l border-gray-300 pl-2.5">
        <span className="font-condensed font-black text-xs sm:text-sm tracking-wider uppercase text-[#451400] leading-none">
          Nutrition Calculator
        </span>
        <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-gray-500 leading-none mt-0.5">
          Unofficial Fan Tool
        </span>
      </div>
    </div>
  );
}
