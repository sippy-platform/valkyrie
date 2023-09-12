import { IValkyrieIcon } from ".";
import HTMLReactParser from "html-react-parser";
import { cx, css, keyframes } from "@emotion/css";

interface ValkyrieProps {
  icon: IValkyrieIcon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean;
}

export default function ValkyrieIcon({
  flip = false,
  icon,
  rotate = 0,
  spin = false,
  ...props
}: ValkyrieProps) {
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const aiClass = css`
    height: 1em;
    width: 1em;
    min-width: 1em;
    line-height: 1em;
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: 0;
    flex-shrink: 0;
    transition: inherit;
  `;

  const rotateClass = css`
    transform: rotate(${rotate}deg);
  `;

  const flipClass = css`
    transform: ${flip === "x"
      ? "scaleX(-1)"
      : flip === "y"
      ? "scaleY(-1)"
      : "scale(-1)"};
  `;

  const spinClass = css`
    svg {
      animation: ${spinAnimation} var(--ai-animation-duration, 2s) infinite
        linear;
    }
  `;

  return (
    <span
      {...props}
      className={cx({
        [aiClass]: true,
        [rotateClass]: !!rotate,
        [flipClass]: !!flip,
        [spinClass]: spin
      })}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
