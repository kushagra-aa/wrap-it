import { window, workspace } from "vscode";
import {
  getDefaultCommand,
  getDefaultTag,
  getIsAutoSelectTag,
} from "./getConfig";
import wrapTag from "./warpTag";
import selectTags from "./selectTags";

export const quickWrap = async () => {
  switch (getDefaultCommand()) {
    case "defaultWrap":
      await defaultWrap();
      break;
    case "selectedWrap":
      await selectedWrap();
      break;
    case "fragmentWrap":
      await fragmentWrap();
      break;
    default:
      await defaultWrap();
  }
};

export const defaultWrap = async () => {
  const editor = window.activeTextEditor;
  if (editor === null) {
    return;
  }
  const tag = getDefaultTag() || "span";
  await wrapTag(editor, tag);
  if (getIsAutoSelectTag()) {
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
