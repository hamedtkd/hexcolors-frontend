import { ArrowPointingIn, CloseIcon, EyeDropper } from "@/assets/icons";
import { useState } from "react";
import ColorPicker from "react-pick-color";
import "./style.css";
import GradientText from "@/components/ui/GradientText";
import { GetColorName } from "hex-color-to-color-name";
import { getBrightness } from "@/lib/utils";
import CopyButton from "@/components/ui/CopyButtom";
import Button from "@/components/ui/Button";
export default function ColorInput() {
  const [hexColor, setHexColor] = useState("#0098ea");
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const sampleColor = async () => {
    if ("EyeDropper" in window) {
      const eyeDropper = new (window as unknown | any).EyeDropper();
      try {
        const result = await eyeDropper.open();
        if (result && result.sRGBHex) {
          setHexColor(result.sRGBHex);
        }
      } catch (error) {
        console.error("Error using EyeDropper: ", error);
      }
    } else {
      console.error("EyeDropper API is not supported in this browser.");
    }
  };

  const colorName = GetColorName(hexColor);

  const brightness = getBrightness(hexColor);
  const textColor = brightness > 128 ? "#000000" : "#FFFFFF";
  const closeModal = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpen(false);
      setAnimateOut(false);
    }, 500);
  };

  return (
    <section
      style={{
        color: textColor,
      }}
      className="pb-20 3xl:max-w-[1560px] max-w-[1224px] mx-auto w-full transition-all duration-1000"
    >
      <GradientText className="flex items-start mb-6">
        <h3 className="max-w-[170px] text-sm font-semibold  leading-[15px]">
          After mint your color, this color be your own on your telegram
          background
        </h3>
        <img
          className="rotate-[22deg] -translate-x-3 translate-y-1"
          width={56.9}
          height={66.38}
          src="/svg/arrowDown.svg"
          alt="arrow-down"
        />
      </GradientText>
      <div className="flex gap-[10px]">
        <div
          style={{ backgroundColor: `${hexColor}` }}
          className="bg-primary flex flex-col justify-center items-center font-semibold  min-w-[445px] rounded-[14px] "
        >
          <div className="bg-[url('/svg/cats.svg')] w-full  min-h-[230px] bg-no-repeat flex items-center justify-center bg-center">
            <img
              width={120}
              height={120}
              className="rounded-full"
              src="/duck.gif"
              alt=""
            />
          </div>

          <h5 className="text-2xl">Your Name on Telegram</h5>
          <p>last seen recently</p>
        </div>
        <div
          className="min-w-96 flex-1 grid place-content-center text-center rounded-[14px] relative"
          style={{ backgroundColor: `${hexColor}` }}
        >
          <button
            onClick={() => setOpen(true)}
            className="absolute right-6 top-6 "
          >
            <ArrowPointingIn />
          </button>
          <p className=" font-semibold text-xl">{hexColor}</p>
          <h4 className="text-[48px] font-extrabold">{colorName}</h4>
        </div>
        <div className="!rounded-xl border border-[#E2E7EB] pb-4 ">
          <ColorPicker
            theme={{
              background: "transparent",
              inputBackground: "transparent",
              borderRadius: "6px",
              borderColor: "#E2E7EB",
            }}
            hideAlpha
            className="custom-input-color !border-0 input[name='hex']:bg-red-500 !shadow-none [&_*]:!text-base   [&_input]:!py-5 [&_input]:!px-3 [&_input]:!w-[50px] [&_input]:!outline-none [&_input]:!ring-0 [&_input]:focus:!border-none  [&_input]:!h-6"
            color={hexColor}
            onChange={(color) => setHexColor(color.hex)}
          />
          <div className="flex justify-end px-[.6rem] gap-6 mt-4">
            <button onClick={sampleColor}>
              <span role="svg" aria-label="eyedropper">
                <EyeDropper />
              </span>{" "}
            </button>
            <CopyButton text={hexColor} />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button className="!font-semibold text-xl text-white">
          Mint Color Now
        </Button>
      </div>
      <div>
        {open && (
          <div
            className={`fixed left-0 top-0 h-screen w-screen grid place-content-center text-center z-50 ${!animateOut ? "animate-jump-in" : "animate-jump-out"}`}
            style={{ backgroundColor: `${hexColor}` }}
          >
            <p className=" font-semibold text-xl">{hexColor}</p>
            <h4 className="text-[48px] font-extrabold">{colorName}</h4>
            <button
              onClick={closeModal}
              className="absolute right-6 top-8 text-2xl"
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
