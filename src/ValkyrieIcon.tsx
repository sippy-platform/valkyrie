import { IValkyrieIcon } from ".";
import HTMLReactParser from "html-react-parser";
import { cx, css, keyframes } from "@emotion/css";

interface ValkyrieProps {
  icon: IValkyrieIcon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean;
  beat?: boolean;
}

export default function ValkyrieIcon({
  flip = false,
  icon,
  rotate = undefined,
  spin = false,
  beat = false,
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

  const beatAnimation = keyframes`
    0%, 90% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.4);
    }
  `;

  const viClass = css`
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
    transition: transform var(--vi-transition-duration, .2s) var(--vi-transition-timing-function, ease-in-out);
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
      animation-name: ${spinAnimation};
      animation-timing-function: var(--vi-animation-timing-function, linear);
      animation-duration: var(--vi-animation-duration, 2s);
      animation-iteration-count: var(--vi-animation-iteration-coun, infinite);
    }
  `;

  const beatClass = css `
    svg {
      animation-name: ${beatAnimation};
      animation-timing-function: var(--vi-animation-timing-function, ease-in-out);
      animation-duration: var(--vi-animation-duration, 1s);
      animation-iteration-count: var(--vi-animation-iteration-coun, infinite);
    }
  `;

  console.log(beat);

  return (
    <span
      {...props}
      className={cx({
        [viClass]: true,
        [rotateClass]: rotate !== null && rotate !== undefined,
        [flipClass]: !!flip,
        [spinClass]: spin,
        [beatClass]: beat
      })}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
