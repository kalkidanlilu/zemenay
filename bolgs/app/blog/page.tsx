"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { CalendarDays, Clock, Heart, MessageSquare, Share2 } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Next.js 15: What's New and Exciting",
      excerpt: "Explore the latest features in Next.js 15 including partial prerendering, React 19 support, and more.",
      author: { name: "Jane Doe", avatar: "/avatars/01.png" },
      date: "May 15, 2024",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Frontend"],
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      title: "Building Beautiful UIs with Shadcn/ui",
      excerpt: "Learn how to create stunning interfaces using shadcn/ui components with Tailwind CSS.",
      author: { name: "John Smith", avatar: "/avatars/02.png" },
      date: "May 10, 2024",
      readTime: "7 min read",
      tags: ["UI/UX", "Shadcn", "Tailwind"],
      likes: 89,
      comments: 14
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">BlogHub</h1>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#" className="transition-colors hover:text-foreground/80">Home</a>
              <a href="#" className="transition-colors hover:text-foreground/80">Categories</a>
              <a href="#" className="transition-colors hover:text-foreground/80">About</a>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 px-4">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Welcome to BlogHub</h2>
                <p className="text-lg text-muted-foreground">
                  Discover amazing articles about web development, design, and more
                </p>
                <Button size="lg">Explore Articles</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold leading-snug group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Recent Posts</h2>
          <div className="grid gap-6">
            {[...posts].reverse().map((post) => (
              <article key={post.id} className="flex flex-col gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md md:flex-row">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted md:w-64">
                  <Skeleton className="h-full w-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 BlogHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Terms</Button>
              <Button variant="ghost" size="sm">Privacy</Button>
              <Button variant="ghost" size="sm">Contact</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}