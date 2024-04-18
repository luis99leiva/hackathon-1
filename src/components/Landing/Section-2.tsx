import React from "react";

const GuideSection = () => (
  <div className="flex w-96 flex-shrink-0 flex-col items-center justify-center gap-y-6 self-stretch">
    <div className="bg-card-1 h-60 flex-shrink-0 self-stretch rounded-2xl bg-cover bg-center" />
    <div className="flex justify-center self-stretch pt-2 text-[32px] font-bold leading-tight">
      <p>Guías expertos y conocimiento local</p>
    </div>
    <div className="flex justify-center self-stretch text-base font-normal leading-normal">
      <p>Nuestros guías expertos te llevarán a los lugares más impresionantes y te contarán historias fascinantes sobre la cultura y la historia local.</p>
    </div>
  </div>
);

const JaguarSection = () => (
  <div className="flex w-96 flex-shrink-0 flex-col items-center justify-center gap-y-6 self-stretch">
    <div className="bg-card-2 h-60 max-h-full max-w-full flex-shrink-0 self-stretch rounded-2xl bg-no-repeat [background-position:0px_-125px] [background-size:100%_200%]" />
    <div className="flex justify-center self-stretch pt-2 text-[32px] font-bold leading-tight">
      <p>Observa en vivo a los Yaguaretés</p>
    </div>
    <div className="flex justify-center self-stretch text-base font-normal leading-normal">
      <p>Entra en el vivo y interactúa con los Yaguaretés, prueba las funciones de darle comida y agua. También puedes observarles a la noche.</p>
    </div>
  </div>
);

const BookingSection = () => (
  <div className="flex w-96 flex-shrink-0 flex-col items-center justify-center gap-y-6 self-stretch">
    <div className="bg-card-3 h-60 max-h-full max-w-full flex-shrink-0 self-stretch rounded-2xl bg-no-repeat [background-position:0px_0px] [background-size:100%_100%]" />
    <div className="flex justify-center self-stretch pt-2 text-[32px] font-bold leading-tight">
      <p>Reserva fácil y segura en línea</p>
    </div>
    <div className="flex justify-center self-stretch text-base font-normal leading-normal">
      <p>Nuestro proceso de reserva en línea es rápido, sencillo y seguro, para que puedas asegurar tu lugar en el tour de tu elección sin complicaciones.</p>
    </div>
  </div>
);

export default function Section2({ className = "" }) {
    return (
        <div>
          <div className={`font-roboto inline-flex w-full flex-row items-center justify-center gap-y-4 gap-x-20 bg-white px-16 py-28 tracking-[0px] text-black `}>
            <GuideSection />
            <JaguarSection />
            <BookingSection />
    
          </div>
          <div className="flex items-center justify-center gap-x-6">
             <button className="button secondary">
                <p>Reservar</p></button>
             <button className="button-alternative">
                <p>Mas informacion</p>
                <img src="/assets/IconChevronRight.svg" alt="Chevron Right" className="h-6 w-6 flex-shrink-0" />
                </button>
          </div>
        </div>
      );
      
}