import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/"!</div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link
          to="/users/$userId"
          params={{ userId: "1" }}
          search={{ q: "tee", asc: true, timestamp: 1}}
        >
          Users with param
        </Link>
      </div>
    </div>
  );
}
