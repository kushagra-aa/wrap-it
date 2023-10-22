import { Selection, TextEditor } from "vscode";

const selectTags = async (editor: TextEditor | undefined, tag: string) => {
  const selections = editor?.selections;
  if (!selections) {
    return;
  }
  const toSelect: Array<Selection> = new Array<Selection>();

  await new Promise((resolve) => {
    selections.forEach((selection) => {
      let startPosition = selection.start.character + 1;
      let endPosition = startPosition + tag.length;

      const newSelection = new Selection(
        selection.start.line,
        startPosition,
        selection.start.line,
        endPosition
      );

      toSelect.push(newSelection);
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
