import { TextEditor, window } from "vscode";
import { defaultTag, isAutoSelectTag } from "./getConfig";
import wrapTag from "./warpTag";
import selectTags from "./selectTags";

export const quickWrap = async () => {
  const editor = window.activeTextEditor;
  if (editor === null) {
    return;
  }
  const tag = defaultTag || "span";
  await wrapTag(editor, tag);
  if (isAutoSelectTag) {
    await selectTags(editor, tag);
  }
};
