import GradientText from "../ui/GradientText";

export default function HeroSection() {
  return (
    <div className="max-w-[720px] text-center ] -tracking-[.5px] space-y-6">
      <GradientText>
        <h1 className="text-[72px] leading-[73px] font-semibold">
          Use, see, enjoy <br />
          and OWN Colors...
        </h1>
      </GradientText>
      <p className="font-semibold text-xl leading-[25px] max-w-[614px]">
        Hex Colors offers 16 million colors on TON, letting you own and enjoy
        your favorite hues. Use them to customize your wallet, GameFi character,
        or even your Telegram account in the future.
      </p>
    </div>
  );
}
