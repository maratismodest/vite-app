import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

const links: { to: string; title: string; props: object }[] = [
  {
    to: "/",
    title: "Главная",
    props: {
      activeOptions: { exact: true },
    },
  },
  {
    to: "/about",
    title: "О нас",
    props: {},
  },
];

function RootComponent() {
  return (
    <>
      <header className="py-2 px-4 flex gap-2 text-lg">
        {links.map(({ to, title, props }, index) => (
          <Link
            key={index}
            to={to}
            activeProps={{
              className: "font-bold",
            }}
            {...props}
          >
            {title}
          </Link>
        ))}
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
