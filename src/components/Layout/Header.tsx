import { TonConnectButton } from "@tonconnect/ui-react";

export const Header = () => {
  return (
    <header className="container mx-auto py-10">
      <TonConnectButton className="[&_button]:bg-red-500" />
    </header>
  );
};
