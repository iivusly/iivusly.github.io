'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <article>
      <h1>Something went wrong</h1>

      <pre>{error.message}</pre>
    </article>
  )
}