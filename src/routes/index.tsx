import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <h1>Chamala</h1>
      <Link to="/game">
        <button>Алга!</button>
      </Link>
    </>
  );
}
