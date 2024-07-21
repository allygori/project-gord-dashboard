"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef } from "react";
import type {
  ToolConstructable,
  ToolSettings,
  OutputData,
} from "@editorjs/editorjs";
import EditorJS from "@editorjs/editorjs";
import { Tools } from "./tools";
import styles from "./editorjs.module.css";
// import Header from "@editorjs/header";

// const EditorJS = dynamic(async () => ((await import("@editorjs/editorjs")).default), { ssr: false });

// const EditorJS1 = dynamic(() => EditorJS, { ssr: false });

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    // {
    //   "type": "header",
    //   "data": {
    //     "text": "This is my awesome editor!",
    //     "level": 1
    //   }
    // },
  ],
};

type Props = {
  id?: string;
  initialData?: OutputData;
  holder?: string;
  className?: string;
  onChange: (data: OutputData) => void;
};

const EditorJs = ({
  id,
  initialData,
  holder = "editorjs",
  onChange = () => {},
  className = "",
}: Props) => {
  // const EditorJs = (await import('@editorjs/editorjs'));
  const ref = useRef<EditorJS | null>(null);
  const data = initialData ?? DEFAULT_INITIAL_DATA;

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        autofocus: true,
        placeholder: "Text here",
        data: data,
        tools: Tools,
        async onChange(api, event) {
          const content = await api.saver.save();
          onChange(content);
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, holder, onChange]);

  // const initEditor = useCallback(() => {
  //   const editor = new EditorJS({
  //     holder: holder,
  //     autofocus: true,
  //     data: data,
  //     onReady: () => {
  //       editorRef.current = editor;
  //     },
  //     onChange: async () => {
  //       let content = await editor.saver.save();
  //       console.log('content', content);
  //     },
  //     tools: Tools,
  //     // tools: {
  //     //   header: {
  //     //     class: Header,

  //     //   }
  //     // }
  //   });
  // }, [holder, data])

  // useEffect(() => {
  //   if (editorRef.current === null) {
  //     initEditor();
  //   }

  //   return () => {
  //     editorRef.current?.destroy();
  //     editorRef.current = null;
  //   }
  // }, [initEditor])

  return (
    <div id={id} className={clsx(`w-full`, className)}>
      <div id={holder} className={`${styles["wrapper"]}`} />
    </div>
  );
};

export type { OutputData };
export default memo(EditorJs);
