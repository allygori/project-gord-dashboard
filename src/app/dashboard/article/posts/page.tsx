"use client";

import clsx from "clsx";
import { useState } from "react";

type Props = {
  className?: string;
};

const Page = ({ className = "" }: Props) => {
  return (
    <section className={clsx("flex flex-row", className)}>Page Posts</section>
  );
};

export default Page;
