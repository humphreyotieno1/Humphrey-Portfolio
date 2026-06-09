export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="text-center">
        <p className="mb-2 text-xs uppercase tracking-widest text-ink-faint">404</p>
        <h1 className="font-serif text-4xl text-ink">Page not found</h1>
        <a href="/" className="editorial-link mt-8 inline-flex">
          Back home
        </a>
      </div>
    </main>
  )
}
