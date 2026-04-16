import { redirect } from 'next/navigation';

// Services list (for validation)
const services = ['whole-human-blood-dehradun', 'prbc', 'sdp', 'rdp', 'ffp', 'cryo'];

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