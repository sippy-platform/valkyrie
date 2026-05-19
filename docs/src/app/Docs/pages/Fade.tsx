import { viValkyrieSword, viCircleHalfInner, viMusic } from "@sippy-platform/valkyrie";

import Code from "@/design/components/Code";

import ApiTable from "../playground/ApiTable";
import Playground, { type IIconCssVariables, type IPlaygroundConfig } from "../playground/Playground";

export default function PageFade() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viValkyrieSword, viMusic, viCircleHalfInner],
    properties: [
      {
        label: "Fade",
        type: "chip",
        name: "fade",
        values: [true, false],
        default: true,
      },
    ],
    cssVariables: [
      {
        name: "--vi-animation-duration",
        default: "1.5s",
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
        name: "--vi-animation-opacity",
        default: ".4",
        description: "The lowest opacity of the icon.",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl/6 font-medium">Fade</h2>
      <p>
        With the <Code>fade</Code> property gives you a basic fade animation.
      </p>

      <Playground config={playgroundConfig} />

      <h3 className="font-display text-2xl/6 font-medium">API</h3>

      <ApiTable cssVariables={playgroundConfig.cssVariables as IIconCssVariables[]} />
    </div>
  );
}
