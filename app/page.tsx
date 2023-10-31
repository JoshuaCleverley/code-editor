import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Link href="/project">
        <Button>New Project</Button>
      </Link>

      <Link href="/load">
        <Button>Load Project</Button>
      </Link>
    </main>
  )
}
