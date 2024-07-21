"use client";

import clsx from "clsx";
import { Children, cloneElement, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuItem } from "./menus.constant";
import IconChevronDown from "@/components/svgs/chevron-down-1";

type Props = {
  item: MenuItem;
};

const MenuItem = ({ item = {} }: Props) => {
  const pathname = usePathname();
  const childRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const ParentIcon: React.ReactElement | undefined = Children.only(item.icon);
  const childrenLength = (item.children || []).length;

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  console.log("pathname", pathname);

  const isActive = (item: any) => {
    console.log("item", item);
    if (item.href === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  useEffect(() => {
    if (open && childRef.current) {
      childRef.current.style.maxHeight = childRef.current.scrollHeight + "px";
    } else if (childRef.current) {
      childRef.current.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <li className="w-full text-sm text-brand-100">
      {item.href && childrenLength === 0 ? (
        <Link
          href={item.href}
          className={clsx(
            "flex flex-row justify-between items-center pl-2 pr-4 py-3 w-full mb-2",
            isActive(item)
              ? "bg-brand-200 rounded-md overflow-hidden text-brand-95 font-medium"
              : "hover:bg-slate-100 hover:rounded-lg hover:overflow-hidden "
          )}
        >
          <div className="flex flex-row">
            {ParentIcon &&
              cloneElement(ParentIcon, { className: "mr-2 text-brand-95" })}
            <span>{item.text}</span>
          </div>
        </Link>
      ) : (
        <div
          onClick={toggleOpen}
          className={clsx(
            "flex flex-row justify-between items-center pl-2 pr-4 py-3 w-full cursor-pointer",
            isActive(item)
              ? "bg-brand-200 rounded-md overflow-hidden text-brand-95 font-medium"
              : "hover:bg-slate-100 hover:rounded-lg hover:overflow-hidden"
          )}
        >
          <div className="flex flex-row">
            {ParentIcon &&
              cloneElement(ParentIcon, { className: "mr-2 text-brand-95" })}
            <span>{item.text}</span>
          </div>
          <IconChevronDown
            className={clsx(
              "transition-transform ease-in-out delay-150",
              open ? "-rotate-180" : "rotate-0"
            )}
          />
        </div>
      )}

      <ul
        ref={childRef}
        role="menuitem"
        aria-expanded={open}
        className={clsx(
          "m-0 p-0 overflow-hidden transition-[max-height] ease-in-out delay-150 ",
          open ? "" : "max-h-0"
        )}
      >
        {(item?.children || []).map((child, idx) => {
          const ChildIcon: React.ReactElement | undefined = Children.only(
            child.icon
          );

          return (
            <li
              key={`${child.text}-${idx}`}
              className="w-full text-sm text-brand-100 flex flex-row items-center"
            >
              {child.href ? (
                <Link
                  href={child.href}
                  className={clsx(
                    "flex flex-row pl-6 pr-4 py-3 hover:text-brand-95 hover:text-opacity-80 w-full",
                    isActive(child) ? "text-brand-95 font-medium" : ""
                  )}
                >
                  {ChildIcon &&
                    cloneElement(ChildIcon, {
                      className: clsx(
                        "mr-2 text-brand-95",
                        isActive(child) ? "fill-brand-95" : "fill-transparent"
                      ),
                    })}
                  <span>{child.text}</span>
                </Link>
              ) : (
                <div
                  className={clsx(
                    "flex flex-row p-2 hover:text-brand-95 hover:text-opacity-80 w-full",
                    isActive(child) ? "text-brand-95 font-medium" : ""
                  )}
                >
                  {ChildIcon &&
                    cloneElement(ChildIcon, {
                      className: clsx(
                        "mr-2 text-brand-95",
                        isActive(child) ? "fill-brand-95" : "fill-transparent"
                      ),
                    })}
                  <span>{child.text}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default MenuItem;
