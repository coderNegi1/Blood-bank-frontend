"use client";
import Link from "next/link";
import { Heart, User, CalendarCheck, Home } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/donor", label: "Dashboard", icon: Home },
  { href: "/donor/profile", label: "Profile", icon: User },
  { href: "/donor/donations", label: "Donations", icon: Heart },
  { href: "/donor/upcoming-camps", label: "Camps", icon: CalendarCheck },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-red-700 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Donor Panel</h2>
      <nav className="space-y-3">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              pathname === href ? "bg-red-600" : "hover:bg-red-600/80"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
