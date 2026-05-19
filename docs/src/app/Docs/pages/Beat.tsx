import { viExpand, viHeart, viPlay } from "@sippy-platform/valkyrie";

import Code from "@/design/components/Code";

import ApiTable from "../playground/ApiTable";
import Playground, { type IIconCssVariables, type IPlaygroundConfig } from "../playground/Playground";

export default function PageBeat() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viHeart, viExpand, viPlay],
    properties: [
      {
        label: "Beat",
        type: "chip",
        name: "beat",
        values: [true, false],
        default: true,
      },
    ],
    cssVariables: [
      {
        name: "--vi-animation-duration",
        default: "1s",
        description: "Time for a full play through of the animation.",
      },
      {
        name: "--vi-animation-timing-function",
        default: "ease-in-out",
        description: "The timing function used for the animation.",
      },
      {
        name: "--vi-animation-iteration-count",
        default: "infinite",
        description: "Number of times the animation is repeated.",
      },
      {
        name: "--vi-animation-scale",
        default: "1.4",
        description: "The scale at which the icon can grow.",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl font-medium">Beat</h2>
      <p>
        With the <Code>beat</Code> property gives you a basic beat animation.
      </p>

      <Playground config={playgroundConfig} />

      <h3 className="font-display text-2xl font-medium">API</h3>

      <ApiTable cssVariables={playgroundConfig.cssVariables as IIconCssVariables[]} />
    </div>
  );
}
