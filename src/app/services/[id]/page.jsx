import { redirect } from 'next/navigation';

// Services list (for validation)
const services = ['whole-human-blood-dehradun', 'packed-red-blood-cells-dehradun', 'single-donor-platelets-sdp-dehradun', 'random-donor-platelets-dehradun', 'fresh-frozen-plasma-dehradun', 'cryoprecipitate-dehradun'];

export default function ServiceDetail({ params }) {
  const { id } = params;

  // Agar valid service hai → uske page pe redirect
  if (services.includes(id)) {
    redirect(`/services/${id}`);
  }

  // Agar galat URL hai
  return (
    <div className="text-center py-40 text-xl">
      Service Not Found
    </div>
  );
}