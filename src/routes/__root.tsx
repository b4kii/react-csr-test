import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Suspense fallback="LOADING..">
      <header className="bg-zinc-200 h-10">
        some header
      </header>
      <div className="w-[1000px] mx-auto">
        <Outlet />
      </div>
    </Suspense>
  )
}
