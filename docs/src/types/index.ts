import { IValkyrieIcon } from "@sippy-platform/valkyrie";

export interface IIcon {
  title: string;
  categories: string[];
  tags: string[];
  created: string;
  updated: string;
}

export interface ILibraryIcon {
  component: string;
  categories: string[];
  tags: string[];
  slug: string;
  icon: IValkyrieIcon;
}

export interface IIconCategory {
  slug: string;
  title: string;
  icon: IValkyrieIcon;
}
