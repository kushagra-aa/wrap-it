import { workspace } from "vscode";

export const getDefaultCommand = () =>
  workspace.getConfiguration().get<string>("wrap-it.defaultCommand");

export const getDefaultTag = () =>
  workspace.getConfiguration().get<string>("wrap-it.defaultTag");

export const getIsAutoSelectTag = () =>
  workspace.getConfiguration().get<boolean>("wrap-it.autoSelectTag");
