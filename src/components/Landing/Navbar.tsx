import React from "react";
import { Link } from 'react-router-dom';

  
interface NavbarProps {
    className?: string;
  }

export default function Navbar({ className = "" }: NavbarProps) {
    return (
      <div
        className={`font-roboto flex items-center justify-between border-b border-solid border-black bg-white px-16 py-3 text-base font-normal leading-normal tracking-[0px] ${className}`}
      >
        <img
          className="h-12 w-12 object-cover object-center"
          src="/assets/Logo.png"
          alt="Live streaming icon"
        />
        <div className="flex items-center gap-x-8 text-left text-black">
          <div>
          <Link to="/Home">
            <p>Inicio</p>
          </Link>
          </div>
          <div>
          <Link to="/Stream">
            <p>Transmisión en Vivo</p>
          </Link>
          </div>
          <div>
            <p>Apadrinar</p>
          </div>
        </div>
        <div className="border border-solid border-black bg-black px-5 py-2 text-center text-white">
          <p>Reservas</p>
        </div>
      </div>
    );
  }

  