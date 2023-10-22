import { Selection, TextEditor } from "vscode";
import { selectTagFromPosition } from "./utils";

const selectTags = async (editor: TextEditor | undefined, tag: string) => {
  const selections = editor?.selections;
  if (!selections) {
    return;
  }
  const toSelect: Array<Selection> = new Array<Selection>();

  await new Promise((resolve) => {
    selections.forEach((selection) => {
      toSelect.push(selectTagFromPosition(selection.start, tag.length));
      resolve(null);
    });

    try {
      editor.selections = toSelect;
    } catch (e) {
      console.log("error in selecting :>> ", e);
    }
  });
};

export default selectTags;
