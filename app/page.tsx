import Image from "next/image";
import { FaRegSnowflake } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import BookingForm from "./components/BookingForm";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import { Bellefair } from "next/font/google";
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div>
      <Hero />
      <section className="flex  gap-10 padding-container justify-center mt-20 px-4">
        <div className="flex items-center gap-5">
          <FaRegSnowflake className="w-12 h-12 md:w-13 md:h-13" />
          <p className="text-lg md:text-xl ">Fully Air Conditioned</p>
        </div>
        <div className="flex items-center gap-5">
          <BsFillLightningChargeFill className="w-12 h-12 md:w-13 md:h-13" />
          <p className="text-lg md:text-xl ">Stable Electricity</p>
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineSecurity className="w-12 h-12 md:w-13 md:h-13" />
          <p className="text-lg md:text-xl ">24/7 Security Personnel</p>
        </div>
      </section>
      <section className="padding-container mt-20 flex flex-col md:flex-row gap-10">
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
            conferences. Our spacious hall accommodates over 200 guests
            comfortably, featuring full air-conditioning, uninterrupted power
            supply, and top-tier security to ensure every event runs smoothly.
            We understand that hosting an event is more than just finding a
            venue — it’s about creating an experience that leaves lasting
            memories. That’s why Jaz Events Centre combines functionality,
            beauty, and comfort to make your special day truly remarkable.
          </p>
        </div>
        <Image src="/event-1.jpg" className="rounded-lg w-full md:w-1/2  " width={100} height={100} alt="event" />
      </section>
      <Faq />
      <BookingForm />
    </div>
  );
}
