import type { ICheckboxProps } from "../NumberSetCheckbox/types";

export const Checkbox = ({
  id,
  label,
  name,
  value,
  onChange,
}: ICheckboxProps) => {
  return (
    <div className="flex items-center me-4">
      <input
        defaultChecked
        id={id}
        name={name}
        type="checkbox"
        value={value}
        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};
