import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

interface NavigationProps {
  currentPage?: "home" | "blog" | "tags";
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
  const getLinkClasses = (page: string) => {
    const baseClasses =
      "transition-colors hover:text-gray-800 dark:hover:text-gray-100";

    const activeClasses =
      "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium";

    const inactiveClasses = "text-gray-600 dark:text-gray-300";

    return `${baseClasses} ${
      currentPage === page ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <nav className="mb-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-center space-x-6 flex-1">
          <Link href="/" className={getLinkClasses("home")}>
            Home
          </Link>
          <Link href="/blog" className={getLinkClasses("blog")}>
            All Posts
          </Link>
          <Link href="/tags" className={getLinkClasses("tags")}>
            Tags
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
