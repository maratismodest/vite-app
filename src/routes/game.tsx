import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getRandomInt } from "../utils/getRandomInt.ts";

export const Route = createFileRoute("/game")({
  component: GameComponent,
});

type IWord = {
  id: number;
  ru: string;
  ta: string;
  audio: string;
};

const words: IWord[] = [
  {
    id: 1,
    ru: "я",
    ta: "мин",
    audio: "https://fileserver.innoads.ru/uploads/chamala/мин.mp3",
  },
  {
    id: 2,
    ru: "ты",
    ta: "син",
    audio: "https://fileserver.innoads.ru/uploads/chamala/син.mp3",
  },
  {
    id: 3,
    ru: "он/она/оно",
    ta: "ул",
    audio: "https://fileserver.innoads.ru/uploads/chamala/ул.mp3",
  },
];

function GameComponent() {
  const [current, setCurrent] = useState<number>(() =>
    getRandomInt(0, words.length - 1),
  );
  const [open, setOpen] = useState(false);

  const { id, ta, ru, audio } = words[current];

  return (
    <div className="p-2">
      <h1>Game</h1>
      <div key={id}>
        <audio controls>
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? ru : ta}
        </button>
      </div>
      <button
        onClick={() => {
          setCurrent(getRandomInt(0, words.length - 1));
          setOpen(false);
        }}
      >
        Алга
      </button>
    </div>
  );
}
