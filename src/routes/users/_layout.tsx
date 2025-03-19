import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/users/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log("test");
  return (
    <>
      <h1>Inner layout</h1>
      <Outlet>
      </Outlet>
    </>
  );
}
