import React from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  MessageCircle,
  Eye,
} from "lucide-react";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

const PostDetail = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const blogPost = {
    title: "Complete Guide to Modern Web Development with React and TypeScript",
    excerpt:
      "Learn how to build modern web applications using React and TypeScript with best practices and real-world examples.",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    views: 1234,
    comments: 23,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      readTime: "6 min read",
      category: "Programming",
    },
    {
      id: 3,
      title: "React Performance Optimization",
      readTime: "10 min read",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Building Scalable React Applications",
      readTime: "12 min read",
      category: "Web Development",
    },
  ];

  return (
    <div
      className="min-h-screen w-screen"
      style={{
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
    >
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {blogPost.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{blogPost.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">
                {blogPost.views.toLocaleString()} views
              </span>
            </div>
          </div>

          {/* Author Info & Action Buttons Section - Removed */}

          {/* Featured Image */}
          <div className="relative mb-8 rounded-2xl overflow-hidden">
            <div className="w-full h-[400px] bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚛️</div>
                <div className="text-lg font-semibold">React + TypeScript</div>
                <div className="text-sm opacity-80">Modern Web Development</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </header>

        {/* Article Content */}
        <article className="mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Introduction to Modern Web Development
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Web development has evolved significantly over the past decade.
              With the introduction of modern frameworks like React, Vue, and
              Angular, developers now have powerful tools to create dynamic and
              interactive web applications.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">
              Why React and TypeScript?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              React has become one of the most popular JavaScript libraries for
              building user interfaces. When combined with TypeScript, it
              provides type safety and better developer experience, making it
              easier to catch errors during development rather than runtime.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-purple-200 my-6">
              "TypeScript is JavaScript that scales. It's a typed superset of
              JavaScript that compiles to plain JavaScript."
            </blockquote>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">
              Key Benefits
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Type Safety: Catch errors at compile time</li>
              <li>
                Better IntelliSense: Enhanced code completion and navigation
              </li>
              <li>Refactoring: Safer code refactoring with confidence</li>
              <li>Documentation: Types serve as inline documentation</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-3">
              Getting Started
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To start a new React project with TypeScript, you can use Create
              React App with the TypeScript template:
            </p>

            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-purple-300">
                npx create-react-app my-app --template typescript
              </code>
            </pre>

            <p className="text-gray-300 leading-relaxed mb-4">
              This command will set up a new React project with TypeScript
              configuration out of the box.
            </p>
          </div>
        </article>

        {/* Tags Section - Removed */}

        {/* Comments Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <h3 className="text-white font-semibold">
              Comments ({blogPost.comments})
            </h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-center">
              Comments feature will be implemented soon. Stay tuned!
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-gray-400" />
            <h2 className="text-2xl font-bold text-white">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl mb-2">📚</div>
                      <div className="text-sm font-medium">{post.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;
