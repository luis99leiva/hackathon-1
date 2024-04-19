import React, { useState } from 'react';

const Section1 = ({ className = "" }) => {
  const videos = ["../assets/video2.mp4", "../assets/video3.mp4", "../assets/video1.mp4", "../assets/Video-main.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleButtonClick = (index) => {
    console.log("Button clicked with index:", index);
    // set the index with the new index
    setCurrentVideoIndex(index);
  };

  console.log("Current video index:", currentVideoIndex);

  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start gap-y-5 bg-white px-16 pb-1 pt-28 tracking-[0px] text-black ${className}`}>
      {/* Main content */}
      <div className="flex-row items-center self-stretch text-left text-4xl font-bold leading-tight">
        <p className='mb-10 '>Experimenta la emoción en tiempo real con nuestras transmisiones interactivas</p>
        <video key={videos[currentVideoIndex]} width="2000" height="1500" controls>
          <source src={videos[currentVideoIndex]} type="video/mp4"/>
        </video>
      </div>
      {/* Price tags */}
      <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-12 self-stretch pt-7 text-center text-base font-normal leading-normal min-w-[1430px]:flex-nowrap">
        <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" onClick={() => handleButtonClick(0)}>
            <img src="../assets/water-drop.png" alt="water droplet" className="h-8 w-8 flex-shrink-0" />
              <p style={{ marginTop: '0.5rem' }}>$1</p>
          </button>
        </div>
        <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" onClick={() => handleButtonClick(1)}>
            <img src="../assets/night-vision-camera.png" alt="night vision" className="h-8 w-8 flex-shrink-0" />
            <p style={{ marginTop: '0.5rem' }}>$3</p>
          </button>
        </div>
        <div className="flex w-56 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch rounded-xl border border-solid border-black bg-white p-3">
          <button className="button-primary" onClick={() => handleButtonClick(2)}>
            <img src="../assets/chicken-leg.png" alt="chicken leg" className="h-8 w-8 flex-shrink-0" />
            <p style={{ marginTop: '0.5rem' }}>$5</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
