import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, event, date, guests, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_EMAIL_USER,
      pass: process.env.NEXT_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER,
    to: "alexanderajadi533@gmail.com",
    subject: "New Booking from Jaz Events",
    html: `
      <h1>New Booking Details</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Type:</strong> ${event}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
