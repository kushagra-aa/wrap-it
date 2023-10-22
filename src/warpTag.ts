import { Position, Selection, TextEditor, commands } from "vscode";

const wrapTag = async (editor: TextEditor | undefined, tag: string) => {
  const selections = editor?.selections;
  if (!selections) {
    return;
  }
  console.log("selections :>> ", selections);
  editor.edit((e) => {
    selections.forEach(async (selection, i) => {
      console.log(
        `selection-${i} :>> `,
        `startline: ${selection.start.line} endline: ${selection.end.line}`
      );
      const selectionText = editor.document.getText(selection);
      console.log("selectionText :>> ", selectionText);
      const outputString = `<${tag}>${selectionText}</${tag}>`;
      console.log("outputString :>> ", outputString);

      e.replace(selection, outputString);

      try {
        await commands.executeCommand("editor.action.formatDocument");
      } catch (err) {
        console.log("Formatting Error:", err);
      }
    });
  });
};

export default wrapTag;
