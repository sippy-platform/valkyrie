import { IValkyrieIcon } from ".";
import HTMLReactParser from "html-react-parser";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ValkyrieProps {
  icon: IValkyrieIcon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean | "pulse";
  beat?: boolean;
  fade?: boolean;
  bounce?: boolean;
}

export default function ValkyrieIcon({
  icon,
  className,
  beat = undefined,
  bounce = undefined,
  fade = undefined,
  flip = undefined,
  rotate = undefined,
  spin = undefined,
  ...props
}: ValkyrieProps & ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={clsx(className, "vi-icon", {
        "vi-rotate-90": rotate === 90,
        "vi-rotate-180": rotate === 180,
        "vi-rotate-270": rotate === 270,
        "vi-flip-x": flip === "x",
        "vi-flip-y": flip === "y",
        "vi-flip": flip === true,
        "vi-spin": spin === true,
        "vi-spin vi-spin-pulse": spin === "pulse",
        "vi-beat": beat,
        "vi-fade": fade,
        "vi-bounce": bounce,
      })}
      {...props}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
