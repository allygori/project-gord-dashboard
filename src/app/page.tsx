import Link from "next/link";

export default function Home() {
  const handleSave = (content: unknown) => {
    console.log("Home::handleSace content", content);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
