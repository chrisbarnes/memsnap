import type { IButtonProps } from "./types";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: IButtonProps) => {
  let classNames = "";

  if (variant === "primary") {
    classNames =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
  }

  if (variant === "secondary") {
    classNames =
      "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
