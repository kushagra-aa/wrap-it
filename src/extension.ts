import * as vscode from "vscode";
import { fragmentWrap, quickWrap, selectedWrap } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  let quickWrapDisposable = vscode.commands.registerCommand(
    "wrap-it.quickWrap",
    quickWrap
  );
  let selectedWrapDisposable = vscode.commands.registerCommand(
    "wrap-it.selectedWrap",
    selectedWrap
  );
  let fragmentWrapDisposable = vscode.commands.registerCommand(
    "wrap-it.fragmentWrap",
    fragmentWrap
  );

  context.subscriptions.push(
    quickWrapDisposable,
    selectedWrapDisposable,
    fragmentWrapDisposable
  );
}

export function deactivate() {}
