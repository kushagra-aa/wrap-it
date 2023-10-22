import { window } from "vscode";
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

export const selectedWrap = async () => {
  const editor = window.activeTextEditor;
  if (editor === null) {
    return;
  }
  const tag =
    (await window.showInputBox({
      placeHolder: "Name of the tag to wrap in(Leave empty for default tag)",
    })) || "span";
  await wrapTag(editor, tag);
};

export const fragmentWrap = async () => {
  const editor = window.activeTextEditor;
  if (editor === null) {
    return;
  }
  const tag = "";
  await wrapTag(editor, tag);
};
