"use client";
import React from "react";
import { Map } from "lucide-react";
import UpcomingEventCard from "./UpcomingEventCard";

export default function UpcomingEventsSection({ events }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 flex items-center justify-center">
          <Map className="w-8 h-8 mr-3 text-red-600" /> Upcoming Blood Donation Camps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => <UpcomingEventCard key={event.id} event={event} />)}
        </div>
        {events.length === 0 && (
          <p className="text-center text-lg text-gray-500 p-8 border border-dashed rounded-xl mt-8">
            Currently, no upcoming camps are scheduled. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
