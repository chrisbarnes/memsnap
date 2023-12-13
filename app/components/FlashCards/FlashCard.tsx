import type { IMathFlashCardProps } from "./types";

export const FlashCard = ({
  displayAnswer,
  sideA,
  sideB,
}: IMathFlashCardProps) => {
  return (
    <div
      className={`group ${
        displayAnswer ? "flip" : ""
      } relative w-80 h-[440px] mb-2 text-9xl text-gray-900 dark:text-white font-extrabold overflow-hidden [perspective-1000px]`}
    >
      <section
        className={`group-[.flip]:[transform:rotateY(180deg)] absolute left-0 w-full p-12 text-right transition-all duration-200 [transform-style:preserve-3d] [backface-visibility:hidden] rounded shadow-lg border-[1px] border-gray-100 dark:border-gray-950 h-[440px] dark:bg-gray-700`}
      >
        <div className="leading-[112px]">{sideA.x}</div>
        <span className="absolute left-12 top-52 text-6xl pb-4">
          {sideA.operand}
        </span>
        <div className="leading-[112px] pb-4 border-b-8 border-black dark:border-white">
          {sideA.y}
        </div>
      </section>
      <section
        className={`group-[.flip]:[transform:rotateY(0deg)] absolute left-0 w-full p-12 text-center flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(-180deg)] [transform-style:preserve-3d] transition-all duration-200 rounded shadow-lg border-[1px] border-gray-100 dark:border-gray-950 h-[440px] dark:bg-gray-700`}
      >
        {sideB}
      </section>
    </div>
  );
};
