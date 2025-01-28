import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-primary">Welcome to the Dashboard</h1>
      <p className="text-lg text-secondary mt-2">
        Explore Weather, News, and Finance data.
      </p>
      <Link href="/weather">
        <p className="text-lg text-blue-500 mt-4">Go to Weather Dashboard</p>
      </Link>
    </main>
  );
}
