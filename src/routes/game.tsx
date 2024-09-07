import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getRandomInt } from "../utils/getRandomInt";
import { words } from "../constants/words";
import WebApp from "@twa-dev/sdk";

export const Route = createFileRoute("/game")({
  component: GameComponent,
});

function GameComponent() {
  const [current, setCurrent] = useState<number>(() =>
    getRandomInt(0, words.length - 1),
  );
  const [open, setOpen] = useState(false);

  const { ta, ru, audio } = words[current];

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1>Game</h1>
      <div className="p-4 border rounded grid grid-cols-1 gap-4">
        <audio controls className="mx-auto">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className="text-6xl w-full"
        >
          {open ? ru : ta}
        </button>
      </div>
      <button
        onClick={() => {
          WebApp.showAlert(`Hello World! Current word is ${ru}`);
          setCurrent(getRandomInt(0, words.length - 1));
          setOpen(false);
        }}
        className="button"
      >
        Алга
      </button>
    </div>
  );
}
