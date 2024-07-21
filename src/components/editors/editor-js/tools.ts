import type {
  ToolConstructable,
  BlockToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";
// import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import List from "@editorjs/list";

// export const Tools = () => {

//   return {
//     header: {
//       class: Header,
//       inlineToolbar: ['link']
//     },
//     // list: {
//     //   class: List,
//     //   inlineToolbar: true,
//     // }
//   }
// }

export const Tools = {
  // paragraph: {
  //   class: Paragraph,
  // },
  header: {
    class: Header as unknown as ToolConstructable,
    inlineToolbar: ["link"],
  },
};
