"use client";

import clsx from "clsx";

type Props = {
  className?: string;
};

const Page = ({ className = "" }: Props) => {
  return (
    // 100vh - header_height - (padding_t + padding_b)
    <section
      className={clsx("flex flex-row w-full h-[calc(100vh_-_64px)]", className)}
    >
      <div className="grid grid-cols-4 gap-5 w-full h-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <div
              key={item}
              className="bg-gradient-to-t from-slate-100  w-full flex h-full"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Page;
