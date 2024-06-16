import ColorInput from "@/components/Home/ColorInput";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <HeroSection />
      <ColorInput />
    </div>
  );
}
