import React from 'react';

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
      <div className="bg-Frame3Icon flex items-center justify-end self-stretch px-1">
      </div>
      {/* Price tags */}
      <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-12 self-stretch pt-7 text-center text-base font-normal leading-normal min-w-[1430px]:flex-nowrap">
        <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" >
            <img src="../assets/water-drop.png" alt="water droplet" className="h-8 w-8 flex-shrink-0" />
              <p style={{ marginTop: '0.5rem' }}>$1</p>
          </button>
         </div>
         <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" >
          <img src="../assets/night-vision-camera.png" alt="night vision" className="h-8 w-8 flex-shrink-0" />
            <p style={{ marginTop: '0.5rem' }}>$3</p>
          </button>
        </div>
        <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" >
          <img src="../assets/chicken-leg.png" alt="chicken leg" className="h-8 w-8 flex-shrink-0" />
            <p style={{ marginTop: '0.5rem' }}>$5</p>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Section1;

