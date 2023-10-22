import { Position, Selection } from "vscode";

export const selectTagFromPosition = (
  position: Position,
  tagLength: number
): Selection =>
  new Selection(
    position.line,
    position.character + 1,
    position.line,
    position.character + 1 + tagLength
  );
