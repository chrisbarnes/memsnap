import { useState } from "react";
import { FlashCards } from "~/components/FlashCards/FlashCards";
import { SetBuilder } from "~/components/SetBuilder/SetBuilder";
import { CardSetProvider } from "~/context/CardSetContext";
import { Toggle } from "~/components/Toggle/Toggle";
import type { MetaFunction } from "@remix-run/node";
import type { ChangeEvent } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Memsnap" },
    { name: "description", content: "Welcome to memsnap!" },
  ];
};

export default function Index() {
  const [isBuilding, setIsBuilding] = useState<boolean>(true);
  const handleConfigure = (e: ChangeEvent<HTMLInputElement>) => {
    setIsBuilding(e.target.checked);
  };

  return (
    <CardSetProvider>
      <div className="w-80 h-full mx-auto flex flex-col">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl text-gray-700 dark:text-white font-extrabold">
            memsnap.co
          </h2>
          <Toggle onChange={handleConfigure} isChecked={isBuilding} />
        </div>
        {isBuilding ? <SetBuilder /> : <FlashCards />}
      </div>
    </CardSetProvider>
  );
}
