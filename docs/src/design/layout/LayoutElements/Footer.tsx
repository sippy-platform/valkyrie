import { NavLink } from 'react-router';

import Valkryie, { viGithub, viHeart, viSippy, viValkyrieSword } from '@sippy-platform/valkyrie';

import pkg from '../../../../../valkyrie/package.json';

export default function Footer() {
  return (
    <div className="container m-auto my-4 max-w-7xl px-4">
      <div className="rounded-lg border border-blue-200 bg-blue-100 p-8 text-black">
        <div className="mb-8 grid grid-cols-2 grid-rows-[auto_auto] gap-4 lg:grid-cols-[3fr_1fr_1fr] lg:grid-rows-1">
          <div className="col-span-full mb-4 lg:col-span-1 lg:mb-0">
            <NavLink
              to="/"
              className="flex flex-row items-center gap-2 rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600"
            >
              <Valkryie icon={viValkyrieSword} className="text-4xl" />
              <span className="hiddem font-display text-3xl lg:block">
                Valkyrie <span className="text-sm font-light opacity-50">v{pkg.version}</span>
              </span>
            </NavLink>
            <p className="mt-2">
              Valkyrie is a set of SVG icons made with <Valkryie icon={viHeart} /> in Belgium.
            </p>
          </div>
          <div className="-ms-4 lg:ms-0">
            <h2 className="font-display mb-4 ps-2.5 text-lg font-medium">Support</h2>

            <div className="flex flex-col gap-0.5">
              <NavLink
                to="/docs/installation"
                className="flex h-8 items-center gap-2 rounded-sm px-2.5 text-sm hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
              >
                Documentation
              </NavLink>
              <NavLink
                to="/changelog"
                className="flex h-8 items-center gap-2 rounded-sm px-2.5 text-sm hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
              >
                Changelog
              </NavLink>
              <a
                href="https://github.com/sippy-platform/valkyrie/issues/new/choose"
                className="flex h-8 items-center gap-2 rounded-sm px-2.5 text-sm hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
              >
                Report a bug
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-display mb-4 ps-2.5 text-lg font-medium">Community</h2>

            <div className="flex flex-col gap-0.5">
              <a
                href="https://github.com/sippy-platform/valkyrie"
                className="flex h-8 items-center gap-2 rounded-sm px-2.5 text-sm hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
              >
                <Valkryie icon={viGithub} /> GitHub
              </a>
              <a
                href="https://sippy.cloud"
                className="flex h-8 items-center gap-2 rounded-sm px-2.5 text-sm hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500"
              >
                <Valkryie icon={viSippy} /> Sippy
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-between">
          <a
            href="https://sippy.cloud"
            className="font-dev inline-flex items-center justify-center gap-1.5 text-2xl font-bold hover:underline hover:decoration-blue-500 hover:decoration-1 hover:underline-offset-1"
          >
            <Valkryie icon={viSippy} className="mt-0.5 text-blue-600" />
            Sippy
          </a>
          <p className="text-sm">&copy; 2021-2026</p>
        </div>
      </div>
    </div>
  );
}
