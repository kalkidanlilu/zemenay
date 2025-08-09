// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">MyApp</h1>
          <ModeToggle />
        </div>
      </header>

      <main className="container flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Welcome to My Awesome Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Discover amazing content about web development, design, and more
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">Explore Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}