import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h1>Chamala</h1>
      <Link to="/game">
        <button>Алга!</button>
      </Link>
    </div>
  );
}
