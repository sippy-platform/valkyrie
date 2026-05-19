import { Fragment } from "react";
import { NavLink, useLocation } from "react-router";

import Valkyrie, {
  viArrowRotateRight,
  viArrowsRotateRight,
  viArrowUp,
  viCircleHalfInner,
  viHeart,
  viReact,
  viSpinner,
  viStar,
  viValkyrieSword,
} from "@sippy-platform/valkyrie";
import clsx from "clsx";

export default function DocsNavigation() {
  const location = useLocation();

  const pages = [
    {
      title: "Get started",
      icon: viValkyrieSword,
      pages: [
        {
          title: "Installation",
          icon: viValkyrieSword,
          link: "/docs/installation",
        },
      ],
    },
    {
      title: "React component",
      icon: viReact,
      pages: [
        {
          title: "Spin",
          icon: viSpinner,
          link: "/docs/spin",
        },
        {
          title: "Bounce",
          icon: viArrowUp,
          link: "/docs/bounce",
        },
        {
          title: "Rotate",
          icon: viArrowRotateRight,
          link: "/docs/rotate",
        },
        {
          title: "Flip",
          icon: viArrowsRotateRight,
          link: "/docs/flip",
        },
        {
          title: "Beat",
          icon: viHeart,
          link: "/docs/beat",
        },
        {
          title: "Fade",
          icon: viCircleHalfInner,
          link: "/docs/fade",
        },
      ],
    },
    {
      title: "More",
      icon: viStar,
      pages: [
        {
          title: "Changelog",
          icon: viStar,
          link: "/changelog",
        },
      ],
    },
  ];

  return (
    <>
      {pages.map((category, key) => (
        <Fragment key={key}>
          <h3 className="font-display text-md mb-2 flex items-center gap-2 px-2.5 font-medium not-first:mt-4">
            <Valkyrie icon={category.icon} /> <span>{category.title}</span>
          </h3>
          <div className="flex flex-col gap-0.5">
            {category.pages.map((page) => (
              <NavLink
                key={page.link}
                to={page.link}
                data-selected={location.pathname.includes(page.link) || undefined}
                className={clsx(
                  "group flex h-8 items-center gap-2 rounded-sm px-2.5 text-start text-sm hover:cursor-pointer hover:bg-blue-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500 data-selected:focus-visible:outline-blue-700",
                  {
                    "bg-blue-500 text-white hover:bg-blue-600": location.pathname.includes(page.link),
                  },
                )}
              >
                <span className="truncate group-data-noicons:opacity-50">{page.title}</span>
              </NavLink>
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
}
