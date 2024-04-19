import React from "react";

export default function Header({ className = "" }: HeaderProps) {
    return (
      <div className={`font-roboto relative inline-flex w-full flex-col items-start gap-y-6 px-80 py-28 text-center tracking-[0px] text-white ${className}`}>
        <div className="bg-image-3 absolute inset-0 max-h-full max-w-full bg-no-repeat [background-position:0px_-129.61px] [background-size:100%_251%]" />
        <div className="absolute inset-0 bg-[#00000080]" />
        <div className="relative flex justify-center self-stretch text-[56px] font-bold leading-tight">
          <p>Reserva tu tour</p>
        </div>
        <div className="relative flex justify-center self-stretch text-lg font-normal leading-normal">
          <p>Ayuda a promover el turismo sostenible y apoya a nuestras comunidades locales.</p>
        </div>
      </div>
    );
  }
  
  interface HeaderProps {
    className?: string;
  }