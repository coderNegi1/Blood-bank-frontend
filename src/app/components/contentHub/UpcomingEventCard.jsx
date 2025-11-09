"use client";
import React from "react";
import { CalendarCheck, Clock, MapPin, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function UpcomingEventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6 border-t-8 border-red-500 hover:shadow-2xl transition duration-300">
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-extrabold text-red-700 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.details}</p>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center font-semibold"><CalendarCheck className="w-4 h-4 mr-2 text-red-500" /> {event.date}</p>
          <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-red-500" /> {event.time}</p>
          <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-red-500" /> {event.location}</p>
        </div>
        <Link
          href={event.registerLink || "/donor-register"}
          target="_blank"
          className="mt-5 block w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-center"
        >
          <PlusCircle className="w-5 h-5 mr-2" /> Register / Get Directions
        </Link>
      </div>
    </div>
  );
}
