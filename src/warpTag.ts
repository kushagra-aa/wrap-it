import { Position, Selection, TextEditor, commands } from "vscode";

const wrapTag = async (editor: TextEditor | undefined, tag: string) => {
  const selections = editor?.selections;
  if (!selections) {
    return;
  }
  editor.edit((e) => {
    selections.forEach(async (selection, i) => {
      const selectionText = editor.document.getText(selection);
      const outputString = `<${tag}>${selectionText}</${tag}>`;

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
