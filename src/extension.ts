import * as vscode from "vscode";
import wrapTag from "./warpTag";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "wrap-it.helloWorld",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor === null) {
        return;
      }
      const tag = "span";
      await wrapTag(editor, tag);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}