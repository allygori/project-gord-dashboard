import clsx from "clsx";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import { EditorJs, type OutputData } from "@/components/editors";
import { type OutputData } from "@/components/editors";

const EditorJs = dynamic(() => import("../../editors/editor-js/editorjs"), {
  ssr: false,
});

type Props = {
  label?: string;
  id?: string;
  className?: string;
  co?: {
    label?: string;
    input?: string;
  };
  onChange?: (data: OutputData) => void;
};

const InputEditor = ({
  label,
  id,
  className = "",
  co,
  onChange = () => {},
}: Props) => {
  return (
    <div className={clsx("flex flex-col w-full mb-4", className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx("font-bold text-base mb-2", co?.label)}
        >
          {label}
        </label>
      )}
      {/* <Suspense> */}
      <EditorJs
        onChange={onChange}
        id={id}
        className={clsx(
          "border border-gray-300 px-2 py-2.5 rounded-lg",
          co?.input
        )}
      />
      {/* </Suspense> */}
    </div>
  );
};

export default InputEditor;
