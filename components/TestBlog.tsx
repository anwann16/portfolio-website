"use client";

import { useState } from "react";

// Interface untuk blog post
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}

// Dummy data blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cara Memulai dengan Next.js 14",
    excerpt:
      "Panduan lengkap untuk memulai development dengan Next.js 14 dan fitur-fitur terbarunya.",
    date: "2024-01-15",
    author: "John Doe",
    slug: "cara-memulai-nextjs-14",
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    excerpt:
      "Tips dan trik untuk menggunakan TypeScript dengan lebih efektif dalam project besar.",
    date: "2024-01-10",
    author: "Jane Smith",
    slug: "typescript-best-practices",
  },
  {
    id: 3,
    title: "Tailwind CSS untuk Pemula",
    excerpt:
      "Pelajari cara menggunakan Tailwind CSS untuk styling yang lebih cepat dan konsisten.",
    date: "2024-01-08",
    author: "Mike Johnson",
    slug: "tailwind-css-pemula",
  },
  {
    id: 4,
    title: "State Management dengan Zustand",
    excerpt:
      "Alternatif ringan untuk Redux dalam mengelola state di aplikasi React.",
    date: "2024-01-05",
    author: "Sarah Wilson",
    slug: "state-management-zustand",
  },
  {
    id: 5,
    title: "Optimasi Performance Next.js",
    excerpt: "Teknik-teknik untuk meningkatkan performa aplikasi Next.js Anda.",
    date: "2024-01-03",
    author: "David Brown",
    slug: "optimasi-performance-nextjs",
  },
  {
    id: 6,
    title: "API Routes di Next.js",
    excerpt:
      "Cara membuat dan menggunakan API routes untuk backend functionality.",
    date: "2024-01-01",
    author: "Emily Davis",
    slug: "api-routes-nextjs",
  },
  {
    id: 7,
    title: "React Server Components",
    excerpt: "Memahami konsep dan implementasi React Server Components.",
    date: "2023-12-28",
    author: "Tom Anderson",
    slug: "react-server-components",
  },
  {
    id: 8,
    title: "CSS-in-JS vs Traditional CSS",
    excerpt: "Perbandingan antara CSS-in-JS dan traditional CSS untuk styling.",
    date: "2023-12-25",
    author: "Lisa Garcia",
    slug: "css-in-js-vs-traditional",
  },
];

export default function BlogList() {
  const [displayCount, setDisplayCount] = useState(3); // Tampilkan 3 post pertama
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menampilkan lebih banyak post
  const loadMore = async () => {
    setLoading(true);

    // Simulasi loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setDisplayCount((prev) => prev + 3); // Tambah 3 post lagi
    setLoading(false);
  };

  // Fungsi untuk menampilkan semua post
  const showAll = async () => {
    setLoading(true);

    // Simulasi loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setDisplayCount(blogPosts.length);
    setLoading(false);
  };

  // Fungsi untuk reset ke tampilan awal
  const showLess = () => {
    setDisplayCount(3);
  };

  const visiblePosts = blogPosts.slice(0, displayCount);
  const hasMore = displayCount < blogPosts.length;
  const isShowingAll = displayCount >= blogPosts.length;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Blog Posts
        </h1>

        {/* Grid Blog Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Baca Selengkapnya
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Loading...</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {hasMore && !loading && (
            <>
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Tampilkan Lainnya (
                {Math.min(3, blogPosts.length - displayCount)} post)
              </button>

              <button
                onClick={showAll}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Tampilkan Semua ({blogPosts.length} post)
              </button>
            </>
          )}

          {isShowingAll && !loading && (
            <button
              onClick={showLess}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              style={{ minWidth: "180px" }}
            >
              Tampilkan Lebih Sedikit
            </button>
          )}
        </div>

        {/* Info Text */}
        <div className="text-center mt-6 text-gray-600">
          Menampilkan {visiblePosts.length} dari {blogPosts.length} blog posts
        </div>
      </div>
    </div>
  );
}
