import { workspace } from "vscode";

export const defaultTag = workspace
  .getConfiguration()
  .get<string>("wrap-it.defaultTag");
export const isAutoSelectTag = workspace
  .getConfiguration()
  .get<boolean>("wrap-it.autoSelectTag");
