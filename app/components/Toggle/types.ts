import type { ChangeEvent } from "react";

export interface IToggleProps {
  disabled?: boolean;
  isChecked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
