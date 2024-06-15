import { cn } from "@/lib/utils";
import React from "react";

export default function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        " bg-clip-text bg-gradient-to-r from-[#2D83EC] to-[#1AC9FF] text-transparent ",
        className
      )}
    >
      {children}
    </div>
  );
}
