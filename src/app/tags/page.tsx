import Link from "next/link";
import { getAllTags, getAllPosts } from "@/lib/posts";
import { Navigation } from "@/components/navigation";

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  const tagCounts = tags.map((tag) => ({
    tag,
    count: posts.filter((post) => post.tags.includes(tag)).length,
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Navigation currentPage="tags" />
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Tags
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore posts organized by topics and themes.
          </p>
        </header>
        <main>
          {tagCounts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tagCounts.map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="block -gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <article
                    key={tag}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tag}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {count} {count === 1 ? "post" : "posts"}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No tags found. Start writing some posts!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
