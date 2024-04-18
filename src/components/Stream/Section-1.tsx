import React from 'react';

// Price tag component for displaying prices
const PriceTag = ({ price }) => (
  <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
    <div className="bg-frame-4 h-12 w-12 flex-shrink-0 bg-contain bg-center bg-no-repeat" />
    <div className="flex justify-center">
      <p>{price}</p>
    </div>
  </div>
);

const Section1 = ({ className = "" }) => {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start gap-y-5 bg-white px-16 pb-1 pt-28 tracking-[0px] text-black ${className}`}>
      {/* Main content */}
      <div className="flex items-center self-stretch text-left text-4xl font-bold leading-tight">
        <p>Experimenta la emoción en tiempo real con nuestras transmisiones interactivas</p>
      </div>
      {/* Play button */}
      <button className="mt-14 flex items-center justify-center self-stretch p-72 bg-gradient">
        <div className="bg-PlayButtonIcon flex items-center justify-center bg-cover bg-center px-16 py-12">
          
        </div>
      </button>
      {/* Frame 3 */}
      <div className="bg-Frame3Icon flex items-center justify-end self-stretch px-1">
      </div>
      {/* Price tags */}
      <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-12 self-stretch pt-7 text-center text-base font-normal leading-normal min-w-[1430px]:flex-nowrap">
        <PriceTag price="$1" />
        <PriceTag price="$3" />
        <PriceTag price="$5" />
      </div>
    </div>
  );
}

export default Section1;

