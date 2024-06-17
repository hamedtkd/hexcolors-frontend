import { Link } from "react-scroll";
import { FAQDataProps } from "./FAQ/data";
import GradientText from "@/components/ui/GradientText";

const InfoSection = ({ title, description, link }: FAQDataProps) => {
  return (
    <section className="max-w-[914px] mx-auto">
      <GradientText>
        <h3 className="text-[48px] leading-[53px] font-extrabold mb-4">
          {title}
        </h3>
      </GradientText>
      <p className="text-xl  leading-[25px] mb-6 font-semibold">
        {description}
      </p>
      {link && (
        <Link
          className="cursor-pointer relative hex-button max-w-fit min-w-[221px] "
          to={link.href}
          spy={true}
          smooth={true}
          offset={50}
          duration={3000}
        >
          {link.title}
        </Link>
      )}
    </section>
  );
};

export default InfoSection;
