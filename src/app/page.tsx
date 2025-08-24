import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Navigation currentPage="home" />
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to my website
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This page consists of my portfolio and blog.
          </p>
        </header>
      </div>
    </div>
  );
}
