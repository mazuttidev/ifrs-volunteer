import { Button } from "@/components/ui/button";

interface CampaignCardProps {
  title: string;
  location: string;
  date: string;
  image: string;
}

export function CampaignCard({ title, location, date, image }: CampaignCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-64">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{location} – {date}</p>
        <Button className="mt-2 w-full">Estou dentro</Button>
      </div>
    </div>
  );
}