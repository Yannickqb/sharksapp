import Link from 'next/link';

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>This is the about page.</p>
      <Link href="/" className="text-blue-500">
        Go to Home Page
      </Link>
    </div>
  );
}
