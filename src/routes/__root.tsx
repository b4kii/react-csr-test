import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Suspense fallback="LOADING..">
      <div>nav</div>
      <Outlet />
    </Suspense>
  )
}
