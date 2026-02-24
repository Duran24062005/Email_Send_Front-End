import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

export default function HomeLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 font-open-sans-custom md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Suspense fallback={null}>
          <Outlet />
          <Analytics />
        </Suspense>
      </div>
    </div>
  )
}
