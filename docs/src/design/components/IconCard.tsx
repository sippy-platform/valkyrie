import { NavLink } from "react-router";

import Valkyrie from "@sippy-platform/valkyrie";

import { type ILibraryIcon } from "@/types";

export function IconCard({ icon }: { icon: ILibraryIcon }) {
  return (
    <NavLink
      to={`/icons/${icon.slug}`}
      className="relative flex flex-col items-center justify-center gap-3 rounded-md bg-neutral-100 p-4 text-black focus-within:bg-blue-200 focus-within:text-blue-700 hover:bg-blue-200 hover:text-blue-700"
    >
      <Valkyrie icon={icon.icon} className="mt-1 text-3xl" />
      <span className="max-w-full truncate font-mono text-xs text-nowrap text-neutral-700">{icon.slug}</span>
    </NavLink>
  );
}
