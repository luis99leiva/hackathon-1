import React from 'react';

const DateBox = ({ day, date, monthYear }) => (
  <div className="flex w-28 flex-shrink-0 flex-col items-center justify-center self-stretch border border-solid border-black bg-white px-3 py-3 text-center">
    <p className="text-base font-normal leading-normal">{day}</p>
    <p className="text-[32px] font-bold leading-tight">{date}</p>
    <p className="text-base font-normal leading-normal">{monthYear}</p>
  </div>
);

const EventSection = ({ title, location, description, buttonText, isSoldOut }) => (
  <div className="flex flex-grow flex-col items-end justify-end gap-y-2">
    {/* Whole thing div */}
    <div className="self-stretch text-2xl font-bold leading-snug">
      <p>{title}</p>
    </div>
    {isSoldOut && (
      <div className="flex items-center justify-end bg-zinc-100 px-10 py-2 border border-solid border-gray text-center text-sm font-semibold leading-normal"> 
      {/* Agotado */}
        <div className="flex flex-grow justify-center">{isSoldOut}</div>
      </div>
    )}
    <div className="self-stretch text-sm font-normal leading-normal">
      <p>{location}</p>
    </div>
    <div className="flex items-center self-stretch pt-4 text-base font-normal leading-normal">
      <p>{description}</p>
    </div>
    <button className="flex items-center justify-center border border-solid border-black px-9 py-2 text-center text-base font-normal leading-normal">
      <div className="flex flex-grow justify-center">{buttonText}</div>
    </button>
  </div>
);

export default function Section1({ className = "" }) {
  return (
    <div className={`font-roboto inline-flex w-full flex-col items-center gap-y-12 bg-white px-16 py-28 tracking-[0px] text-black ${className}`}>
      {/* ... rest of the upper part of the code ... */}
      <div className="flex gap-x-6">
        <DateBox day="Viernes" date="09" monthYear="Feb 2024" />
        <EventSection title="Event title heading" location="Location" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." buttonText="Reservar" isSoldOut="Agotado" />
      </div>
      <div className="flex gap-x-6">
        <DateBox day="Sábado" date="10" monthYear="Feb 2024" />
        <EventSection title="Event title heading" location="Location" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." buttonText="Reservar" isSoldOut={undefined} />
      </div>
      <div className="flex gap-x-6">
        <DateBox day="Domingo" date="11" monthYear="Feb 2024" />
        <EventSection title="Event title heading" location="Location" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." buttonText="Reservar" isSoldOut={undefined} />
      </div>
    </div>
  );
}
