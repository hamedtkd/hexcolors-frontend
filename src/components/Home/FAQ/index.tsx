import InfoSection from "../InfoSection";
import { faqData } from "./data";

export default function FAQ() {
  return (
    <div className="bg-[#F4F6F7] ">
      <div className="flex items-start max-w-[1558px] mx-auto">
        <img src="/svg/duck.svg" height={1382} width={750} alt="duck" />
        <div className="flex flex-col">
          <img
            className="self-end"
            src="/svg/pen.svg"
            height={400}
            width={400}
            alt="duck"
          />

          <div className="space-y-[152px] -translate-x-[120px] translate-y-[120px]">
            {faqData.map((item, index) => (
              <InfoSection
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
