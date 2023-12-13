import type { ChangeEvent } from "react";

export interface ICheckboxProps {
  id: string;
  label: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
