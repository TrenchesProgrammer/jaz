import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const { name, phone, email, optionalEmail, event, date, guests, message } =
    await req.json();

  const supabase = await createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

  const { data, error } = await supabase.from("Bookings").insert([
    {
      Name: name,
      phone,
      Email: email,
      Event: event,
      date,
      guests,
      Message: message,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to save booking to database",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const customerMailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    cc: optionalEmail,
    subject: "Your Booking Confirmation from Jaz Events",
    html: `
      <h1>Booking Confirmation</h1>
      <p>Dear ${name},</p>
      <p>Thank you for your booking. Here are your details:</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Type:</strong> ${event}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>We will get back to you shortly.</p>
    `,
  };

  const businessMailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: "alexanderajadi533@gmail.com, ireanuheritage@gmail.com, samajadi@yahoo.com",
    subject: "New Booking from Jaz Events",
    html: `
      <h1>New Booking Details</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Optional Email:</strong> ${optionalEmail}</p>
      <p><strong>Event Type:</strong> ${event}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(businessMailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
