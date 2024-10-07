import Features from "../components/Feautres";
import HeroSection from "../components/HeroSection";
import DownloadAsk from "@/components/DownloadAsk";
import Asked from "@/components/Asked";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <DownloadAsk />
      <Asked />
      <Newsletter/>
    </>
  );
}
