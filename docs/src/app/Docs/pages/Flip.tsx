import { viValkyrieSword, viHouse, viMessageSmile } from "@sippy-platform/valkyrie";

import Code from "@/design/components/Code";

import Playground, { type IPlaygroundConfig } from "../playground/Playground";

export default function PageFlip() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [viMessageSmile, viValkyrieSword, viHouse],
    properties: [
      {
        label: "Flip",
        type: "chip",
        name: "flip",
        values: [true, "x", "y", false],
        default: true,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl font-medium">Flip</h2>
      <p>
        With the <Code>flip</Code> property you can mirror your icon on its x-axis, y-axis or both.
      </p>

      <Playground config={playgroundConfig} />
    </div>
  );
}
