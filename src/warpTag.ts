import { Position, Selection, TextEditor, commands } from "vscode";

const wrapTag = async (editor: TextEditor | undefined, tag: string) => {
  const selections = editor?.selections;
  if (!selections) {
    return;
  }
  selections.forEach(async (selection) => {
    const selectionText = editor.document.getText(selection);

    editor.edit((e) =>
      e.replace(selection, `<${tag}>${selectionText}</${tag}>`)
    );

    try {
      await commands.executeCommand("editor.action.formatDocument");
    } catch (err) {
      console.log("Formatting Error:", err);
    }
  });
};

export default wrapTag;
