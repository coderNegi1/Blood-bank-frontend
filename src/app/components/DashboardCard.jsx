    export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <p className="text-3xl font-bold text-red-700 mt-2">{value}</p>
    </div>
  );
}
