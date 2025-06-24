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

export function ValkyrieTailwind({
  flip = undefined,
  icon,
  rotate = undefined,
  spin = undefined,
  beat = undefined,
  fade = undefined,
  bounce = undefined,
  className,
  ...props
}: ValkyrieProps & ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={clsx(
        '"h-[1em] w-[1em] min-w-[1em] leading-[1em] box-content inline-block relative overflow-visible shrink-0 transition-all align-[0]',
        className,
        {
          ["rotate-90"]: rotate === 90,
          ["rotate-180"]: rotate === 180,
          ["rotate-270"]: rotate === 270,
          ["-scale-x-100"]: flip === "x",
          ["-scale-y-100"]: flip === "y",
          ["-scale-100"]: flip === true,
          ["animate-spin"]: spin === true,
          ["animate-spin animate-spin-steps"]: spin === "pulse",
          ["animate-beat"]: beat,
          ["animate-fade"]: fade,
          ["animate-bounce"]: bounce,
        },
      )}
      {...props}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
