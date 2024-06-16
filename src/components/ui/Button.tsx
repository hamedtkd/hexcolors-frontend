import React from "react";
import { cn } from "@/lib/utils";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
  disabled = false,
  style,
}) => {
  return (
    <button className={cn('hex-button',className)} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export default Button;
