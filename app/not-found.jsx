import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent/80 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
