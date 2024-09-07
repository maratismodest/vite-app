import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <h1>Chamala</h1>
      <ul>
        <li>Изучение татарских слов с помощью карточек</li>
        <li>
          Прослушайте аудио, прочитайте слово вслух и попробуйте перевести
        </li>
        <li>Правильный ответ можно узнать, нажав на слово.</li>
      </ul>
      <Link to="/game">
        <button className="button">Алга!</button>
      </Link>
    </div>
  );
}
