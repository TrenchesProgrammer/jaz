import React from "react";
import Image from "next/image";
import { Bellefair } from "next/font/google";
import BookingForm from "../components/BookingForm";
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const page = () => {
  return (
    <div className="">
      <div className="h-screen w-full bg-about-cover flex flex-col relative justify-end pb-40 p-5  md:pb-30 gap-5 pl-5 md:pl-32">
        <div className="absolute inset-0 bg-black/50 z-1 h-full w-full " />
        <div className="z-1 flex flex-col gap-3">
          <p className="text-[#b3b3b3] w-full flex-nowrap">ABOUT JAZ EVENTS</p>
          <h3 className={`${bellefair.className} flex-nowrap text-3xl md:text-5xl`}>
            THE BEST EVENTS <br /> CENTER IN IBADAN
          </h3>
        </div>
      </div>
      <section className="padding-container mt-20 flex flex-col-reverse md:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <p className="text-[#e0e0e0]">ABOUT JAZ EVENTS</p>
          <h3 className={`${bellefair.className} text-4xl md:text-5xl`}>
            THE BEST EVENTS <br /> CENTER IN IBADAN
          </h3>
          <p>
            At Jaz Events Centre, we believe every occasion deserves to be
            celebrated in style. Located in the serene heart of Ibadan, our
            modern event space was designed to host unforgettable moments. From
            weddings and birthdays to corporate gatherings, concerts, and
            conferences. Our spacious hall accommodates over 1000 guests
            comfortably, featuring full air-conditioning, uninterrupted power
            supply, and top-tier security to ensure every event runs smoothly.
            We understand that hosting an event is more than just finding a
            venue — it’s about creating an experience that leaves lasting
            memories. That’s why Jaz Events Centre combines functionality,
            beauty, and comfort to make your special day truly remarkable.
          </p>
        </div>
        <Image
          src="/event-1.svg"
          className="rounded-lg w-full md:w-1/2  "
          width={100}
          height={100}
          alt="event"
        />
      </section>
      <BookingForm id="" />
    </div>
  );
};

export default page;
