"use client";
import { Bellefair } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const BookingForm = ({id}: {id: string}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    guests: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      event: "",
      date: "",
      guests: "",
    };
    if (!name) newErrors.name = "Full name is required";
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must be a valid number";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
  

    if (!event) newErrors.event = "Event type is required";
    if (!date) {
      newErrors.date = "Preferred date is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(date);
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Preferred date cannot be in the past";
      }
    }
    if (!guests) {
      newErrors.guests = "Number of guests is required";
    } else if (parseInt(guests, 10) <= 0) {
      newErrors.guests = "Number of guests must be greater than 0";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            event,
            date,
            guests,
            message,
          }),
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Form submitted successfully!");
          setName("");
          setPhone("");
          setEmail("");
          setEvent("");
          setDate("");
          setGuests("");
          setMessage("");
        } else {
          toast.error("Failed to send booking details. Please try again.");
        }
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <section
      id={id}
      className="padding-container flex flex-col md:flex-row justify-between mt-20"
    >
      <div className="md:w-[40%] text-sm mb-10 flex flex-col gap-10">
        <h3 className={`${bellefair.className} text-4xl md:text-5xl`}>
          BOOK NOW WITH JAZ EVENTS
        </h3>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[#7e7e7e]">Phone numbers:</p>
            <p>+234 (0) 902 870 8098</p>
            <p>+234 (0) 913 235 2070</p>
            <p>+234 (0) 803 306 5857</p>
          </div>
          <div>
            <p className="text-[#7e7e7e]">Address:</p>
            <p>Opposite Royal Palace Hotel, Kusela Bus Stop, Eleyele</p>
          </div>
          <div>
            <p className="text-[#7e7e7e]">Email:</p>
            <p>jazeventcenter@gmail.com</p>
            <p>samajadi@yahoo.com</p>
          </div>
          <Link className="text-xl mt-5 " href="/refunds">
            VIEW REFUND POLICY
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full md:w-[55%]  flex flex-col gap-3 rounded-lg"
      >
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
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
            value={event}
            onChange={(e) => {
              setEvent(e.target.value);
            }}
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
          {errors.event && (
            <p className="text-red-500 text-xs">{errors.event}</p>
          )}
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
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
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
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          className="mt-1 block w-full bg-[#1a1a1a] border  border-[#242424] rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white p-2"
        />
        {errors.guests && (
          <p className="text-red-500 text-xs">{errors.guests}</p>
        )}
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
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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
