import React from "react";
import { Link } from 'react-router-dom';

export default function Layout216({ className = "" }: Layout216Props) {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start bg-white px-16 py-28 tracking-[0px] text-black ${className}`}>
      <div className="flex flex-grow items-center justify-center gap-x-20 self-stretch">
        <img className="h-[640px] w-[616px] flex-shrink-0 object-cover object-center" src="/assets/image-5.png" />
        <div className="flex w-[617px] flex-shrink-0 flex-col items-center justify-center pt-px">
          <div className="flex flex-grow flex-col items-center justify-center gap-y-6 self-stretch">
            <div className="flex items-center self-stretch text-left text-5xl font-bold leading-tight">
              <p>Donacion a los Yaguaretés!</p>
            </div>
            {/* Uncommented and corrected the missing closing tag for the div */}
            <div className="flex items-center self-stretch text-left text-lg font-normal leading-normal">
              <p>
                Donar a los Yaguaretés!
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 self-stretch pt-4 text-left min-[1430px]:flex-nowrap">
              <div className="flex w-72 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch">
                <div className="self-stretch text-5xl font-bold leading-tight">
                  <p>50%</p>
                </div>
                <div className="self-stretch text-base font-normal leading-normal">
                  <p>
                    Directamente para la interactúacion con el animal atravez del live stream.
                  </p>
                </div>
              </div>
              <div className="flex w-72 flex-shrink-0 flex-col items-center justify-center gap-y-2 self-stretch">
                <div className="self-stretch text-5xl font-bold leading-tight">
                  <p>50%</p>
                </div>
                <div className="self-stretch text-base font-normal leading-normal">
                  <p>
                    Donaciones para una fundacion dedicada el cuidado de los Yaguaretés.
                  </p>
                </div>
              </div>
            </div>
            {/* Corrected the nesting of the div containing "Mas información" and the chevron icon */}
            <div className="flex items-center self-stretch pt-6 text-base font-normal leading-normal">
              <Link to ="/Stream">
                <div className="flex items-center justify-center self-stretch border border-solid border-black px-6 mr-2 py-3 text-center">
                  <p>Donar</p>
                  </div>
                </Link>
                <div className="flex items-center justify-center gap-x-2 text-left">
                  <div>
                    <p>Mas información</p>
                  </div>
                  <img src="/assets/IconChevronRight.svg" alt="Chevron Right" className="h-6 w-6 flex-shrink-0" />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Layout216Props {
  className?: string;
}
