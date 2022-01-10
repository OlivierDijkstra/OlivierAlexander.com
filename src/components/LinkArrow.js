import { ArrowUpRight } from "phosphor-react";

export default function LinkArrow({ size = 8 }) {
  return (
    <ArrowUpRight
      size={size}
      className="
            transform transform-gpu 
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-transform duration-75"
    />
  );
}
