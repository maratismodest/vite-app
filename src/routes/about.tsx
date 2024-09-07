import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h1>Chamala</h1>
      <Link to="/about">
        <button>Алга!</button>
      </Link>
    </div>
  );
}
