import { CampaignCard } from "./CampaignCard";

export function CampaignCarousel() {
  const campaigns = [
    { title: "Doação de Sangue", location: "Campus A", date: "20/09", image: "/sangue.jpg" },
    { title: "Arrecadação de Alimentos", location: "Campus B", date: "22/09", image: "/alimentos.jpg" },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Destaques de Campanhas</h2>
      <div className="flex gap-4 overflow-x-auto">
        {campaigns.map((c, i) => (
          <CampaignCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
