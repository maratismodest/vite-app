import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <h1>Chamala</h1>
      <div>
        <h2>Наши цели:</h2>
        <ul>
          <li>Популяризация татарского языка в мире</li>
          <li>Повышение уровня владения татарским языком</li>
          <li>Сделать процесс обучения доступным для всех возрастов</li>
        </ul>
      </div>
      <div>
        <h2>Для кого полезно наше приложение:</h2>
        <ul>
          <li>Дети, изучающие язык</li>
          <li>Школьники, студенты</li>
          <li>Взрослым, которым нужна практика</li>
          <li>Туристы</li>
        </ul>
      </div>
    </>
  );
}
