"use client";

import clsx from "clsx";
import {
  Children,
  createElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import type { MenuItem } from "./menus.constant";
import Link from "next/link";
import IconChevronDown from "@/components/svgs/chevron-down-1";

type Props = {
  item: MenuItem;
};

const MenuItem = ({ item = {} }: Props) => {
  const childRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  // const ParentIcon = item.icon;
  const ParentIcon: React.ReactElement | undefined = Children.only(item.icon);
  const childrenLength = (item.children || []).length;
  // const ParentIcon = item.icon;

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open && childRef.current) {
      childRef.current.style.maxHeight = childRef.current.scrollHeight + "px";
    } else if (childRef.current) {
      childRef.current.style.maxHeight = "0px";
    }
  }, [open]);

  // const children = Children.toArray(ParentIcon);
  // const child: React.ReactElement | undefined = Children.only(ParentIcon);

  return (
    <li className="w-full text-sm text-brand-100">
      {item.href && childrenLength === 0 ? (
        <Link
          href={item.href}
          className="flex flex-row justify-between items-center hover:bg-brand-200 hover:rounded-lg hover:overflow-hidden pl-2 pr-4 py-3 w-full"
        >
          <div className="flex flex-row">
            {/* {ParentIcon && <ParentIcon className="mr-2" />} */}
            {/* {cloneElement(ParentIcon, { className = "" })} */}
            {/* {createElement(ParentIcon, { className = "" })} */}
            {/* {cloneElement(item.icon, { className = "" })} */}
            {/* {ParentIcon} */}
            {/* {cloneElement(ParentIcon, { className: "mr-4" })} */}
            {/* {Children.map(children, child => {
              // return cloneElement(child, )
              return cloneElement(child,  { className: "mr-4" })
            })} */}
            {ParentIcon && cloneElement(ParentIcon, { className: "mr-2" })}
            <span>{item.text}</span>
          </div>
        </Link>
      ) : (
        <div
          onClick={toggleOpen}
          className="flex flex-row justify-between items-center hover:bg-brand-200 hover:rounded-lg hover:overflow-hidden pl-2 pr-4 py-3 w-full cursor-pointer"
        >
          <div className="flex flex-row">
            {/* {ParentIcon && <ParentIcon className="mr-2" />} */}
            {/* {ParentIcon} */}
            {ParentIcon && cloneElement(ParentIcon, { className: "mr-2" })}
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
          // const ChildIcon = child.icon;
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
                  className="flex flex-row pl-6 pr-4 py-3 hover:bg-brand-200 hover:rounded-lg hover:overflow-hidden w-full"
                >
                  {/* {ChildIcon && <ChildIcon className="mr-2" />} */}
                  {/* {ChildIcon} */}
                  {ChildIcon && cloneElement(ChildIcon, { className: "mr-2" })}
                  <span>{child.text}</span>
                </Link>
              ) : (
                <div className="flex flex-row p-2 hover:bg-brand-200 hover:rounded-lg hover:overflow-hidden w-full">
                  {/* {ChildIcon && <ChildIcon className="mr-2" />} */}
                  {/* {ChildIcon} */}
                  {ChildIcon && cloneElement(ChildIcon, { className: "mr-2" })}
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
