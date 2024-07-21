"use client";

import clsx from "clsx";
import { useState } from "react";
// import { EditorJs } from "@/components/editors";
import { InputText } from "@/components/inputs/input-text";
import { InputEditor } from "@/components/inputs/input-editor";

type Props = {
  className?: string;
};

type Model = {
  title: string;
  content?: {
    time?: Date;
    blocks?: [];
    version?: string;
  };
};

const Page = ({ className = "" }: Props) => {
  const [model, setModel] = useState<Model>();

  const handleSave = (content: unknown) => {
    console.log("Home::handleSace content", content);
  };

  return (
    <section className={clsx("flex flex-row", className)}>
      <div className="w-8/12">
        <div>
          <InputText label={`Title`} />
        </div>
        <div>
          <InputEditor label={`Article`} />
        </div>
      </div>
      <div className="w-4/12"></div>
      {/* <EditorJs onChange={handleSave} /> */}
    </section>
  );
};

export default Page;
