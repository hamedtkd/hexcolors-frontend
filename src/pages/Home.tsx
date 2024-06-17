import ColorInput from "@/components/Home/ColorInput";
import FAQ from "@/components/Home/FAQ";
import HeroSection from "@/components/Home/HeroSection";
import RoadMap from "@/components/Home/OurRoadMap";

export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <ColorInput />
      <FAQ />
      <RoadMap />
    </div>
  );
}
