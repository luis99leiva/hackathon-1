import React from "react";

export default function Section2({ className = "" }) {
  return (

    <div
      className={`font-roboto inline-flex w-full flex-col items-start bg-white px-16 py-28 tracking-[0px] text-black ${className}`}
    >
      <div className="flex flex-grow flex-wrap items-start justify-center gap-x-20 gap-y-20 self-stretch min-[1430px]:flex-nowrap" >
        <div className="flex w-[617px] flex-shrink-0 flex-col items-center justify-center gap-y-4" >
          <div className="flex items-center self-stretch text-left text-base font-semibold leading-normal" >
            <p>Únete</p>
          </div>
          <div className="flex items-center self-stretch text-left text-5xl font-bold leading-tight" >
            <p>Cómo Interactuar con Nuestras Transmisiones en Vivo</p>
          </div>
          <div className="flex items-end self-stretch pt-8 text-base font-normal leading-normal" >
            <div className="flex items-center justify-center gap-x-6">
              <div className="flex items-center justify-center self-stretch border border-solid border-black px-6 py-3 text-center" >
                <div className="flex flex-grow justify-center">
                  <p>Reservar</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-left" >
                <div className="flex">
                  <p>Ver más</p> 
                  <img src= "../assets/IconChevronRight.svg" alt="Chevron Right" className="h-6 w-6 flex-shrink-0" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[616px] flex-shrink-0 flex-col items-center justify-center gap-y-10 self-stretch" >
          <div className="flex flex-col items-center justify-center gap-y-10 self-stretch" >
            <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-9 self-stretch min-[1430px]:flex-nowrap" >
              <div className="flex flex-col items-center justify-center gap-y-4 self-stretch" >
                <img
                  className="h-12 w-12 flex-shrink-0 object-cover object-center"
                  src="/assets/live-streaming-1.png"
                 />
                <div className="flex items-center justify-center self-stretch" >
                  <div className="flex items-center justify-center self-stretch pl-0.5" >
                  </div>
                </div>
              </div>
              <div className="flex flex-grow flex-col items-center justify-center gap-y-4" >
                <div className="self-stretch text-left text-xl font-bold leading-snug" >
                  <p>Paso Uno</p>
                </div>
                <div className="flex justify-center self-stretch text-center text-base font-normal leading-normal" >
                  <p>
                    Visita nuestro sitio web y encuentra la transmisión en vivo que deseas ver.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-9 self-stretch text-left min-[1430px]:flex-nowrap" >
              <div className="flex flex-col items-center justify-center gap-y-4 self-stretch" >
                <img
                  className="h-12 w-12 flex-shrink-0 object-cover object-center"
                  src="/assets/live-streaming.png"
                 />
                <div className="flex items-center justify-center self-stretch" >
                  <div className="flex items-center justify-center self-stretch pl-0.5" >
                  </div>
                </div>
              </div>
              <div className="flex flex-grow flex-col items-center justify-center gap-y-4" >
                <div className="self-stretch text-xl font-bold leading-snug">
                  <p>Paso Dos</p>
                </div>
                <div className="self-stretch text-base font-normal leading-normal" >
                  <p>
                    Haz clic en el enlace de la transmisión en vivo para unirte.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-9 self-stretch text-left min-[1430px]:flex-nowrap" >
            <div className="flex flex-col items-center justify-center gap-y-4 self-stretch" >
              <img
                className="h-12 w-12 flex-shrink-0 object-cover object-center"
                src="/assets/live-streaming-0.png"
               />
              <div className="flex items-center justify-center self-stretch">
                <div className="flex items-center justify-center self-stretch pl-0.5" >
                </div>
              </div>
            </div>
            <div className="flex flex-grow flex-col items-center justify-center gap-y-4" >
              <div className="self-stretch text-xl font-bold leading-snug">
                <p>Paso Tres</p>
              </div>
              <div className="self-stretch text-base font-normal leading-normal" >
                <p>
                  Disfruta de la transmisión en vivo y participa en el chat en vivo.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center gap-x-10 self-stretch text-left" >
            <img
              className="h-12 w-12 flex-shrink-0 object-cover object-center"
              src="/assets/live-streaming-2.png"
             />
            <div className="flex flex-grow flex-col items-center justify-center gap-y-4 self-stretch" >
              <div className="self-stretch text-xl font-bold leading-snug">
                <p>Paso Cuatro</p>
              </div>
              <div className="self-stretch text-base font-normal leading-normal" >
                <p>
                  Comparte la transmisión en vivo con tus amigos y familiares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Section2Props {
  className?: string;
}
