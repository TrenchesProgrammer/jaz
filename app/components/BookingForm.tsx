"use client";
import { Bellefair } from "next/font/google";
import Link from "next/link";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const BookingForm = () => {
  return (
    <section
      id="contact"
      className="padding-container flex flex-col md:flex-row justify-between mt-20"
    >
      <div className="md:w-[40%] text-sm mb-10 flex flex-col gap-10">
        <h3 className={`${bellefair.className} text-4xl md:text-5xl`}>
          BOOK NOW WITH JAZ EVENTS
        </h3>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[#7e7e7e]">Phone number:</p>
            <p>+234 (0) 811 830 0072</p>
          </div>
          <div>
            <p className="text-[#7e7e7e]">Address:</p>
            <p>Opposite Royal Palace Hotel, Kusela Bus Stop, Eleyele</p>
          </div>
          <div>
            <p className="text-[#7e7e7e]">Email:</p>
            <p>jaz@gmail.com</p>
          </div>
        <Link className="text-xl mt-5 " href="/refunds">VIEW REFUND POLICY</Link>

        </div>
      </div>
      <form className="max-w-3xl w-full md:w-[55%]  flex flex-col gap-3 rounded-lg">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300"
          >
            Phone/WhatsApp
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-gray-300"
          >
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          >
            <option value="">Select an event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate Meeting</option>
            <option>Conference</option>
            <option>Concert</option>
            <option>Social Gathering</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-300"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
        </div>
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-gray-300"
        >
          Number of Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
        />
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message or Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
        ></textarea>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-white w-full text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
