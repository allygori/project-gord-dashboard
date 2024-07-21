import { ComponentType, ReactElement, ReactNode } from "react";
import IconNote from "@/components/svgs/note";
import IconAnalytic from "@/components/svgs/analytic";
import IconDotSquare from "@/components/svgs/dot-square";

export type MenuItem = {
  // icon?: ({ className }: { className?: string }) => JSX.Element;
  icon?: ReactElement;
  // icon?: ComponentType<{ className?: string}>;
  text?: string;
  href?: string;
  children?: MenuItem[];
};

export type Menu = {
  header?: string;
  items: MenuItem[];
};

export const MENUS: Menu[] = [
  {
    header: "MENU",
    items: [
      {
        icon: <IconAnalytic />,
        text: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: <IconNote />,
        text: "Article",
        href: "/dashboard/article",
        children: [
          {
            icon: <IconDotSquare />,
            text: "Posts",
            href: "/dashboard/article/posts",
          },
          {
            icon: <IconDotSquare />,
            text: "Detail",
            href: "/dashboard/article/detail",
          },
        ],
      },
      {
        icon: <IconAnalytic />,
        text: "eCommerce",
        href: "/dashboard/test",
      },
      {
        icon: <IconAnalytic />,
        text: "Marketing",
        href: "/dashboard/test",
        children: [
          {
            icon: <IconAnalytic />,
            text: "Google Ads",
            href: "/dashboard/article",
          },
          {
            icon: <IconAnalytic />,
            text: "Facebook Ads",
            href: "/dashboard/article",
          },
        ],
      },
    ],
  },
  {
    header: "APPS",
    items: [
      {
        icon: <IconAnalytic />,
        text: "Contact",
        href: "/dashboard/article",
      },
      {
        icon: <IconAnalytic />,
        text: "Blog",
        href: "/dashboard/article",
        children: [
          {
            icon: <IconAnalytic />,
            text: "Posts",
            href: "/dashboard/article",
          },
          {
            icon: <IconAnalytic />,
            text: "Detail",
            href: "/dashboard/article",
          },
        ],
      },
    ],
  },
];
