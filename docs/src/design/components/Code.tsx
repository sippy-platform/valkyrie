import { type PropsWithChildren } from "react";

export default function Code(props: PropsWithChildren) {
  return <span className="text-em rounded-sm bg-blue-100 px-0.75 py-px font-mono text-blue-600" {...props} />;
}
