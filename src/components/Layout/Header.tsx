import { TonConnectButton } from "@tonconnect/ui-react";

export const Header = () => {
  return (
    <header className="container mx-auto py-10">
      <nav>
        <ul className="flex items-center justify-between w-full">
          <li>
            <a href="/">
              <img src="/logo.svg" alt="Logo" />
            </a>
          </li>
          <li className="flex items-center divide-x divide-[#C8D2D9]">
            <div className="flex gap-2 pr-6">
              <a href="">
                <img src="/svg/Gem.svg" alt="" />
              </a>
              <a href="">
                <img src="/svg/ether.svg" alt="" />
              </a>
            </div>
            <div className="pl-6">
              <TonConnectButton className="[&_button]:bg-primary [&_button]:h-[56px] [&_button]:ring-2 [&_button]:!ring-[#00558D]" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
