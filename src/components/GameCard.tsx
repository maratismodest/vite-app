import { FC, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer.tsx";
import clsx from "clsx";
import { getRandomInt } from "@/utils/getRandomInt.ts";
import { persons } from "@/constants/words.ts";
import { IWord } from "@/types";

type Props = {
  words: IWord[];
};

const GameCard: FC<Props> = ({ words }) => {
  const [current, setCurrent] = useState<number>(
    getRandomInt(0, words.length - 1),
  );
  const [open, setOpen] = useState(false);
  const toggleCard = () => setOpen((prev) => !prev);

  const { ta, ru, audio, image } = words[current];
  return (
    <>
      <div className="p-4 border rounded-2xl grid grid-cols-1 gap-4 min-h-52">
        <img
          src={image}
          alt={image}
          width={128}
          height={128}
          className="mx-auto"
        />
        <div className="mx-auto">{audio && <AudioPlayer src={audio} />}</div>
        <button
          onClick={toggleCard}
          onTouchStart={toggleCard}
          className="relative cursor-pointer overflow-hidden w-full mx-auto"
        >
          <div
            className={clsx(
              "flex transition-transform duration-500 ease-in-out",
              open ? "-translate-x-full" : "",
            )}
          >
            <span className="text-3xl font-bold text-blue-600 w-full flex-shrink-0 text-center">
              {ta}
            </span>
            <span className="text-3xl font-bold text-green-600 w-full flex-shrink-0 text-center">
              {ru}
            </span>
          </div>
        </button>
      </div>
      <button
        onClick={() => {
          // WebApp.showAlert(`Hello World! Current word is ${ru}`);
          setCurrent(getRandomInt(0, persons.length - 1));
          setOpen(false);
        }}
        className="button"
      >
        Алга
      </button>
    </>
  );
};

export default GameCard;
