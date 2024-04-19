import React from 'react';

export default function Header({ className = "" }: HeaderProps) { 
    return ( 
      <div className={`font-roboto relative inline-flex w-full flex-col items-start gap-y-6 px-80 py-28 text-center tracking-[0px] text-white ${className}`} > 
        <div className="bg-image-2 absolute inset-0 max-h-full max-w-full bg-no-repeat [background-position:0px_-251.82px] [background-size:100%_251%]" /> 
        <div className="absolute inset-0 bg-[#00000080]" /> 
        <div className="relative flex justify-center self-stretch text-[56px] font-bold leading-tight" > 
          <p>Descubre en Vivo</p> 
        </div> 
        <div className="relative flex justify-center self-stretch text-lg font-normal leading-normal" > 
          <p> Explora el mundo desde la comodidad de tu hogar con nuestras transmisiones en vivo de tours. </p> 
        </div>
        <div className="relative flex justify-center self-stretch">
          
        </div>
      </div> 
    ); 
  } 
  
  interface HeaderProps { 
    className?: string; 
  }