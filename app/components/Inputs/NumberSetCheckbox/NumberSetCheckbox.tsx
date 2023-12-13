import type { ICheckboxProps } from "./types";

export const NumberSetCheckbox = ({
  id,
  label,
  name,
  onChange,
  value,
}: ICheckboxProps) => {
  return (
    <div className="flex items-center relative">
      <input
        className="absolute left-2 top-1/2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer sr-only"
        id={id}
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="inline-flex justify-center items-center w-16 h-16 py-4 text-center text-sm font-medium text-gray-900 dark:text-gray-300 border-2 border-gray-200 rounded dark:border-gray-700 peer-checked:border-blue-700 peer-checked:dark:border-blue-900 peer-checked:border-4 peer-focus:border-blue-400"
      >
        {label}
      </label>
    </div>
  );
};
