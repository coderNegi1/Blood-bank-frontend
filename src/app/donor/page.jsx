"use client";
import DashboardCard from "@/app/components/DashboardCard";

export default function DonorDashboardPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <DashboardCard title="Total Donations" value="8" />
      <DashboardCard title="Upcoming Camps" value="3" />
      <DashboardCard title="Blood Type" value="O+" />
    </div>
  );
}
