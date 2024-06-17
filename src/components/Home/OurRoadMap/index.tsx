import { useRef } from "react";
import InfoSection from "../InfoSection";
import HorizontalScroll from "./HorizontalScroll";

export default function RoadMap() {
  const container = useRef(null);
  return (
    <div
      ref={container}
      id="roadmap-section"
      className="mt-[197px] space-y-[120px]"
    >
      <div className="text-center">
        <InfoSection
          title="Our Roadmap"
          description="Any DApp or App can integrate with this collection to enhance user experience using their own colors. find out more at the roadmap"
        />
      </div>
      <div>
        <HorizontalScroll containerRef={container} />
      </div>
    </div>
  );
}
