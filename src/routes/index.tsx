import { createFileRoute, Link } from "@tanstack/react-router";
import Hero from "./../assets/hero.svg?react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Hero className="w-full max-w-2xl" />
      <h1>Chamala</h1>
      <p>Изучение татарского языка в формате мини-игр</p>
      <ul>
        <li>
          Прослушайте аудио, прочитайте слово вслух и попробуйте перевести
        </li>
        <li>Правильный ответ можно узнать, нажав на слово.</li>
      </ul>
      <Link to="/game">
        <button className="button">Алга!</button>
      </Link>
    </>
  );
}
