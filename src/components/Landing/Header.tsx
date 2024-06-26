import React from 'react';
import {Link} from 'react-router-dom';

export default function Header({ className = "" }) {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-start gap-y-20 bg-white pb-20 tracking-[0px] ${className}`}>
      <div className="bg-image h-[663px] self-stretch bg-cover bg-center" />
      <div className="flex flex-wrap items-start justify-center gap-x-20 gap-y-20 self-stretch px-16 min-[1430px]:flex-nowrap">
        <div className="w-[616px] flex-shrink-0 self-stretch text-left text-[56px] font-bold leading-tight text-black">
          <p>Descubre nuevas experiencias en nuestro sitio</p>
        </div>
        <div className="flex w-[617px] flex-shrink-0 flex-col items-center justify-center gap-y-10 pl-px font-normal leading-normal">
          <div className="self-stretch text-left text-lg leading-normal text-black">
            <p>Explora nuestras transmisiones en vivo, reserva emocionantes tours y descubre oportunidades de apadrinar.</p>
          </div>
          <div className="flex items-center self-stretch text-center text-base leading-normal">
            <div className="flex items-center justify-center gap-x-3.5 self-stretch">
            <Link to="/Stream">
              <button className="button primary">
                  <p>Explorar</p>
              </button>
              </Link>

              <Link to="/Stream">
              <button className="button secondary">

                    <p>Más información</p>
                  
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
