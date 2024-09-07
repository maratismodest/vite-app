import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <h1>Chamala</h1>
      <Link to="/about">
        <button>Алга!</button>
      </Link>
    </>
  );
}
