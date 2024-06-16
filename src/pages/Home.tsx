import ColorInput from "@/components/Home/ColorInput";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <HomeComponent />
      <ColorInput />
    </div>
  );
}
