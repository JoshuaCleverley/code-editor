import { Button } from "@/components/Button";

export default function ProjectPage() {
  return ( 
    <main className="bg-black min-h-screen overflow-hidden">
      <div className="flex flex-row gap-4 p-4">
        <Button>Import</Button>
        <Button>Export</Button>
      </div>
      <div className="flex flex-col rounded-xl h-full bg-slate-900">
        {/* Tabs for different files */}
        <div className="flex flex-row p-4 pb-0 gap-4">
          {/* Temporary file names and buttons for testing */}
          <Button>index.html</Button>
          <Button>style.css</Button>
          <Button>script.js</Button>
        </div>
        {/* Code editor */}
        <div>
          <textarea className="m-4 bg-slate-800 rounded-lg text-white w-full h-[60vh]"></textarea>
        </div>
      </div>
    </main>
  )
}
