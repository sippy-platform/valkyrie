import { NavLink, useLocation } from "react-router";

import { NavigationMenu } from "@base-ui/react";
import Valkryie, { viGithub, viValkyrieSword } from "@sippy-platform/valkyrie";
import clsx from "clsx";

import pkg from "../../../../../valkyrie/package.json";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="sticky top-0 z-50 container m-auto max-w-7xl px-4 py-4">
        <NavigationMenu.Root className="grid h-15 grid-cols-[repeat(3,auto)] items-center justify-between rounded-lg border border-blue-400/90 bg-blue-400/90 px-3.5 backdrop-blur-sm backdrop-saturate-200 md:grid-cols-3">
          <NavigationMenu.List className="flex justify-start gap-1">
            <NavigationMenu.Item>
              <NavLink
                to="/"
                className="flex flex-row items-center gap-2 rounded-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600"
              >
                <Valkryie icon={viValkyrieSword} className="text-2xl" />
                <span className="font-display hidden text-xl md:block">
                  Valkryie <span className="text-sm font-light opacity-75">v{pkg.version}</span>
                </span>
              </NavLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <NavigationMenu.List className="flex justify-center gap-1">
            <NavigationMenu.Item>
              <NavLink
                to="/"
                className={clsx(
                  "font-display flex h-8 items-center justify-center rounded-sm px-2.5 text-sm font-medium text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500",
                  {
                    "bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-700":
                      location?.pathname === "/" || location?.pathname?.startsWith("/icons"),
                  },
                )}
              >
                Home
              </NavLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavLink
                to="/docs/installation"
                className={clsx(
                  "font-display flex h-8 items-center justify-center rounded-sm px-2.5 text-sm font-medium text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500",
                  {
                    "bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-700":
                      location?.pathname?.startsWith("/docs"),
                  },
                )}
              >
                Docs
              </NavLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavLink
                to="/changelog"
                className={clsx(
                  "font-display flex h-8 items-center justify-center rounded-sm px-2.5 text-sm font-medium text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500",
                  {
                    "bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-700":
                      location?.pathname?.startsWith("/changelog"),
                  },
                )}
              >
                Changelog
              </NavLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <NavigationMenu.List className="flex justify-end gap-1">
            <NavigationMenu.Item>
              <a
                href="https://github.com/sippy-platform/valkyrie"
                target="_blank"
                className="flex size-8 items-center justify-center rounded-sm text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
                rel="noreferrer"
              >
                <Valkryie icon={viGithub} /> <span className="sr-only">GitHub repository</span>
              </a>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </>
  );
}
