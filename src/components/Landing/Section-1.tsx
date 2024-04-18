import React from "react";



export default function Section1({ className = "" }) {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start bg-white px-16 py-28 tracking-[0px] text-black ${className}`}>
      <div className="flex flex-grow items-center justify-center gap-x-20 self-stretch">
        <div className="flex w-[617px] flex-shrink-0 flex-col items-center justify-center pt-px">
          <div className="flex flex-grow flex-col items-center justify-center gap-y-4 self-stretch">
            <div className="flex items-center self-stretch text-left text-base font-semibold leading-normal">
              <p>Descubre</p>
            </div>
            <div className="flex items-center self-stretch text-left text-5xl font-bold leading-tight">
              <p>Una experiencia única de tours en vivo</p>
            </div>
            <div className="flex items-center self-stretch pt-2 text-left text-lg font-normal leading-normal">
              <p>
                Sumérgete en la magia de nuestros tours y descubre destinos fascinantes desde la comodidad de tu hogar. Disfruta de una experiencia auténtica y emocionante mientras nuestros guías expertos te llevan a lugares increíbles a través de transmisiones en vivo de alta calidad.
              </p>
            </div>
            <div className="flex items-end self-stretch pt-6 text-base font-normal leading-normal">
              <div className="flex items-center justify-center gap-x-6">
                <button  className="button secondary">
                  <p>Reservar</p>
                </button>
                <button className="button-alternative">
                <p>Mas informacion</p>
                <img src= "../assets/IconChevronRight.svg" alt="Chevron Right" className="h-6 w-6 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="h-[640px] w-[616px] flex-shrink-0 object-cover object-center" src="../assets/Jaguar2.png" alt="Placeholder" />
      </div>
    </div>
  );
}

