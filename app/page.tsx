import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button>New Project</Button>
      <Button>Load Project</Button>
    </main>
  )
}
