import { Button } from "@/components/Button";

export default function ProjectPage() {
  return ( 
    <main>
      <div className="flex flex-row gap-4 m-4">
        <Button>Import</Button>
        <Button>Export</Button>
        <Button>New File</Button>
      </div>
      <div>
        {/* Tabs for different files */}
        {/* Code editor */}
      </div>
    </main>
  )
}
