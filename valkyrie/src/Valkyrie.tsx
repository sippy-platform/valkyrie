import { type ComponentPropsWithoutRef } from "react";

import { type IValkyrie, viCircleQuestion } from ".";

interface ValkyrieProps {
  icon?: IValkyrie;
  rotate?: number | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean | "pulse";
  beat?: boolean;
  fade?: boolean;
  bounce?: boolean;
}

export default function Valkyrie({
  flip = undefined,
  icon,
  rotate = undefined,
  spin = undefined,
  beat = undefined,
  fade = undefined,
  bounce = undefined,
  className,
  style,
  ...props
}: ValkyrieProps & ComponentPropsWithoutRef<"span">) {
  // Use fallback icon if icon is not provided or invalid
  const resolvedIcon = icon && icon.data ? icon : viCircleQuestion;
  const isFallback = !icon || !icon.data;

  const rotateStyle =
    rotate !== undefined && rotate !== false ? ({ "--vi-rotate": `${rotate}deg` } as React.CSSProperties) : {};

  const classes = [
    className,
    "vi-icon",
    (!!rotate || rotate === 0) && "vi-rotate",
    flip === "x" && "vi-flip-x",
    flip === "y" && "vi-flip-y",
    flip === true && "vi-flip",
    spin === true && "vi-spin",
    spin === "pulse" && "vi-spin vi-spin-pulse",
    beat && "vi-beat",
    (isFallback || fade) && "vi-fade",
    bounce && "vi-bounce",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      style={{ ...rotateStyle, ...style }}
      dangerouslySetInnerHTML={{ __html: resolvedIcon.data }}
      {...props}
    />
  );
}
