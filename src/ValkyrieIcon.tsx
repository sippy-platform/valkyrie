import { IValkyrieIcon } from ".";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ValkyrieProps {
  icon: IValkyrieIcon;
  rotate?: number | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean | "pulse";
  beat?: boolean;
  fade?: boolean;
  bounce?: boolean;
}

export default function ValkyrieIcon({
  icon,
  beat = undefined,
  bounce = undefined,
  fade = undefined,
  flip = undefined,
  rotate = undefined,
  spin = undefined,
  className,
  style,
  ...props
}: ValkyrieProps & ComponentPropsWithoutRef<"span">) {
  const rotateStyle =
    rotate !== undefined && rotate !== false
      ? ({ "--vi-rotate": `${rotate}deg` } as React.CSSProperties)
      : {};

  return (
    <span
      className={clsx(className, "vi-icon", {
        "vi-rotate": !!rotate || rotate === 0,
        "vi-flip-x": flip === "x",
        "vi-flip-y": flip === "y",
        "vi-flip": flip === true,
        "vi-spin": spin === true,
        "vi-spin vi-spin-pulse": spin === "pulse",
        "vi-beat": beat,
        "vi-fade": fade,
        "vi-bounce": bounce,
      })}
      style={{ ...rotateStyle, ...style }}
      dangerouslySetInnerHTML={{ __html: icon.data }}
      {...props}
    />
  );
}
