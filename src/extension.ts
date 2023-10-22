import * as vscode from "vscode";
import wrapTag from "./warpTag";
import selectTags from "./selectTags";
import { defaultTag, isAutoSelectTag } from "./getConfig";
import { quickWrap } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  let quickWrapDisposable = vscode.commands.registerCommand(
    "wrap-it.quickWrap",
    quickWrap
  );

  context.subscriptions.push(quickWrapDisposable);
}

export function deactivate() {}
