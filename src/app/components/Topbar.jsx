"use client";
import { Bell, LogOut } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-6 py-3">
      <h1 className="text-xl font-semibold text-red-700">Donor Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-700 cursor-pointer" />
        <button className="flex items-center gap-2 bg-red-700 text-white px-3 py-1.5 rounded-md">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </header>
  );
}
