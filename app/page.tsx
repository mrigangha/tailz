// app/page.tsx
import { sql } from "@/lib/db";

export default async function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Tables</h1>
      <ul className="space-y-2"></ul>
    </div>
  );
}
