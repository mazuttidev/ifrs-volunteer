import { Banner } from "@/components/Banner";
import { Filters } from "@/components/Filters";
import { CampaignCarousel } from "@/components/CampaignCarousel";
import { Ranking } from "@/components/Ranking";
import { QuickSignup } from "@/components/QuickSignup";

export default function Home() {
  return (
    <div>
      <Banner />
      <Filters />
      <CampaignCarousel />
      <Ranking />
      <QuickSignup />
    </div>
  );
}
