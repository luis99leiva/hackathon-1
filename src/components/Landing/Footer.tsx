import React from 'react';

export default function Footer3({ className = "" }) {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start bg-white px-16 py-20 text-left text-sm leading-normal tracking-[0px] text-black ${className}`}>
      <img className="h-12 w-12 object-cover object-center" src="/assets/logo.png" alt="Logo" />
      <div className="flex items-end self-stretch pt-8 font-semibold">
        <p>Contacto:</p>
      </div>
      <div className="flex items-end self-stretch pt-1 font-normal">
        <p><span className="underline">+(595)992 587120</span></p>
      </div>
      <div className="w-[864px] font-normal">
        <p><span className="underline">yaguaretePy@wwf.org.py</span></p>
      </div>
      <div className="flex items-end self-stretch pt-6">
        <div className="flex items-center justify-center gap-x-3">
          <button className=""> 
          <img src="../assets/IconFacebook.svg" alt="Description of the image" className="h-6 w-6 flex-shrink-0"  />
          </button>
          <button className=""> 
          <img src="../assets/IconInstagram.svg" alt="Description of the image" className="h-6 w-6 flex-shrink-0"  />
          </button>
          <button className=""> 
          <img src="../assets/IconLinkedin.svg" alt="Description of the image" className="h-6 w-6 flex-shrink-0"  />
          </button>
          <button className=""> 
          <img src="../assets/IconX.svg" alt="Description of the image" className="h-6 w-6 flex-shrink-0"  />
          </button>
          <button className=""> 
          <img src="../assets/IconYoutube.svg" alt="Description of the image" className="h-6 w-6 flex-shrink-0"  />
          </button>
          
        </div>
      </div>
      <div className="flex h-20 flex-col items-center justify-end self-stretch">
        <div className="h-px w-[1312px] flex-shrink-0 border border-solid border-black bg-black" />
      </div>
      <div className="flex items-end justify-center self-stretch pt-8 font-normal">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 min-[1430px]:flex-nowrap">
        </div>
      </div>
    </div>
  );
}
