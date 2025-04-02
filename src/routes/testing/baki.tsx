import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/testing/baki')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/testing/baki"!</div>
}
