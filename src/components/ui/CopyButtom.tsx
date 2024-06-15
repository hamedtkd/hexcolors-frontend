import {
  TooltipArrow,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/Tooltip";

import { handleCopy } from "@/lib/utils";
import { useState } from "react";
import { CopyIcon } from "@/assets/icons";

export default function CopyButton({ text }: { text: string }) {
  const [isCopy, setIsCopy] = useState(false);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={isCopy}>
        <TooltipTrigger
          onClick={() => {
            setIsCopy(true);
            setTimeout(() => {
              setIsCopy(false);
            }, 2000);
            handleCopy(text ?? "");
          }}
          className="w-fit"
        >
          <span className="text-white flex gap-sp1 items-center w-fit">
            <CopyIcon />
            <span className="sr-only">Copy</span>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipArrow className="TooltipArrow" />
          <p className="text-white">Copied!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
