import { BlogCardProps } from "@/types/component";
import { Calendar, Clock, User, BookOpen } from "lucide-react";

const BlogCard: React.FC<BlogCardProps> = ({ post, variant = "default" }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.boxShadow = "0 20px 40px rgba(48, 43, 99, 0.4)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.boxShadow = "0 8px 32px rgba(15, 12, 41, 0.37)";
  };

  const handleImageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, #3d3768, #2a2a4a, #1a1635)";
  };

  const handleImageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.background =
      "linear-gradient(135deg, #302b63, #24243e, #0f0c29)";
  };

  if (variant === "featured") {
    return (
      <div
        className="
          backdrop-blur-xl border hover:border-opacity-70 transition-all duration-300
          rounded-3xl p-8 ease-out
          hover:transform hover:-translate-y-2 hover:shadow-2xl
          group cursor-pointer col-span-full
        "
        style={{
          background: "rgba(36, 36, 62, 0.4)",
          borderColor: "rgba(48, 43, 99, 0.5)",
          boxShadow: "0 8px 32px rgba(15, 12, 41, 0.37)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="px-3 py-1 text-xs rounded-full text-blue-200"
                style={{
                  background: "rgba(48, 43, 99, 0.6)",
                  border: "1px solid rgba(36, 36, 62, 0.8)",
                }}
              >
                Featured
              </span>
              <span
                className="px-3 py-1 text-xs rounded-full text-gray-200"
                style={{
                  background: "rgba(48, 43, 99, 0.4)",
                  border: "1px solid rgba(36, 36, 62, 0.6)",
                }}
              >
                {post.category}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
              {post.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="
                  text-white px-6 py-3 rounded-xl font-medium
                  transition-all duration-200 flex items-center gap-2
                  hover:transform hover:scale-105 cursor-pointer
                "
                style={{
                  background: "linear-gradient(135deg, #302b63, #24243e)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #3d3768, #2a2a4a)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(48, 43, 99, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #302b63, #24243e)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <BookOpen className="w-5 h-5" />
                Baca Selengkapnya
              </button>
            </div>
          </div>

          <div
            className="
              w-full h-80 rounded-2xl flex items-center justify-center
              transition-all duration-300 relative overflow-hidden
            "
            style={{
              background: "linear-gradient(135deg, #302b63, #24243e, #0f0c29)",
            }}
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
            <BookOpen className="w-24 h-24 text-white relative z-10" />

            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-8 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-12 w-2 h-2 bg-indigo-200 rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-12 left-16 w-3 h-3 bg-violet-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        backdrop-blur-xl border hover:border-opacity-70 transition-all duration-300
        rounded-2xl p-6 ease-out
        hover:transform hover:-translate-y-2 hover:shadow-2xl
        group cursor-pointer
      "
      style={{
        background: "rgba(36, 36, 62, 0.3)",
        borderColor: "rgba(48, 43, 99, 0.5)",
        boxShadow: "0 8px 32px rgba(15, 12, 41, 0.37)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Blog Image */}
      <div
        className="
          w-full h-48 rounded-xl mb-6 flex items-center justify-center
          transition-all duration-300 relative overflow-hidden
        "
        style={{
          background: "linear-gradient(135deg, #302b63, #24243e, #0f0c29)",
        }}
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="relative z-10">
          <BookOpen className="w-12 h-12 text-white" />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-xs rounded-full text-gray-200"
            style={{
              background: "rgba(15, 12, 41, 0.8)",
              border: "1px solid rgba(36, 36, 62, 0.6)",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Blog Title */}
      <h3
        className="
        text-xl font-bold text-white mb-3
        group-hover:text-blue-200 transition-colors duration-300
        line-clamp-2
      "
      >
        {post.title}
      </h3>

      {/* Blog Excerpt */}
      <p
        className="
        text-gray-300 text-sm leading-relaxed mb-4
        group-hover:text-gray-200 transition-colors duration-300
        line-clamp-3
      "
      >
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{post.publishDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
