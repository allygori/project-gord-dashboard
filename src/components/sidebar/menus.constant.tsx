import { ComponentType, ReactElement, ReactNode } from "react";
import IconNote from "@/components/svgs/note";
import IconAnalytic from "@/components/svgs/analytic";
import IconDotSquare from "@/components/svgs/dot-square";
import IconImage from "@/components/svgs/image";

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
        icon: <IconImage />,
        text: "Media Library",
        href: "/dashboard/image",
      },
      {
        icon: <IconNote />,
        text: "Article",
        href: "#",
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
      // {
      //   icon: <IconAnalytic />,
      //   text: "eCommerce",
      //   href: "/dashboard/test",
      // },
      // {
      //   icon: <IconAnalytic />,
      //   text: "Marketing",
      //   href: "/dashboard/test1",
      //   children: [
      //     {
      //       icon: <IconAnalytic />,
      //       text: "Google Ads",
      //       href: "/dashboard/test11",
      //     },
      //     {
      //       icon: <IconAnalytic />,
      //       text: "Facebook Ads",
      //       href: "/dashboard/test12",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   header: "APPS",
  //   items: [
  //     {
  //       icon: <IconAnalytic />,
  //       text: "Contact",
  //       href: "/dashboard/contact",
  //     },
  //     {
  //       icon: <IconAnalytic />,
  //       text: "Blog",
  //       href: "#",
  //       children: [
  //         {
  //           icon: <IconAnalytic />,
  //           text: "Posts",
  //           href: "/dashboard/test21",
  //         },
  //         {
  //           icon: <IconAnalytic />,
  //           text: "Detail",
  //           href: "/dashboard/test22",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
