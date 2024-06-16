import GradientText from "../ui/GradientText";

export default function HeroSection() {
  return (
    <div className="max-w-[720px] text-center ] tracking-wider">
      <GradientText>
        <h1 className="text-[72px] leading-[73px] font-semibold">
          Use, see, enjoy <br />
          and OWN Colors...
        </h1>
      </GradientText>
      <p className="font-semibold text-xl leading-[25px]">
        Hex Colors is a collection of 16M possible colors in the world minted on
        TON. Now, you can OWN your favorite color beside enjoying it. Also, you
        can use it to customize your wallet, GameFi character or maybe your
        Telegram account in future.
      </p>
    </div>
  );
}
