"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ChevronRight,
  TrendingUp,
  Eye,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { formatDate, timeAgo } from "@/helpers/formatTime";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  views: number;
  image: string;
  trending: boolean;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const mockPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.",
      author: "Sarah Chen",
      date: "2025-07-25",
      category: "Technology",
      readTime: "8 min read",
      views: 1250,
      image: "🚀",
      trending: true,
    },
    {
      id: 2,
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn best practices for creating maintainable and type-safe React applications that can grow with your team.",
      author: "Alex Rodriguez",
      date: "2025-07-23",
      category: "Development",
      readTime: "12 min read",
      views: 980,
      image: "⚛️",
      trending: false,
    },
    {
      id: 3,
      title: "AI-Powered Design Tools: Revolutionizing Creative Workflows",
      excerpt:
        "Discover how artificial intelligence is transforming the design industry and boosting creative productivity.",
      author: "Maya Patel",
      date: "2025-07-22",
      category: "AI & ML",
      readTime: "6 min read",
      views: 1680,
      image: "🎨",
      trending: true,
    },
    {
      id: 4,
      title: "From Idea to IPO: Building a Successful Tech Startup",
      excerpt:
        "A comprehensive guide covering the journey from initial concept to public offering in the tech industry.",
      author: "David Kim",
      date: "2025-07-20",
      category: "Startup",
      readTime: "15 min read",
      views: 750,
      image: "💡",
      trending: false,
    },
    // {
    //   id: 5,
    //   title: "Minimalist Design Principles for Modern Web Interfaces",
    //   excerpt:
    //     "Master the art of creating clean, functional, and beautiful user interfaces with minimalist design approaches.",
    //   author: "Emma Wilson",
    //   date: "2025-07-18",
    //   category: "Design",
    //   readTime: "10 min read",
    //   views: 1120,
    //   image: "✨",
    //   trending: false,
    // },
    // {
    //   id: 6,
    //   title: "Machine Learning in Production: Best Practices and Pitfalls",
    //   excerpt:
    //     "Navigate the challenges of deploying ML models in production environments with proven strategies.",
    //   author: "James Liu",
    //   date: "2025-07-16",
    //   category: "AI & ML",
    //   readTime: "14 min read",
    //   views: 890,
    //   image: "🤖",
    //   trending: true,
    // },
  ];

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  return (
    <div className="min-h-screen py-10 mt-5 px-2 sm:px-6 lg:px-8">
      {/* Timeline Blog Posts */}
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400"></div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <div key={post.id} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="hidden lg:block flex-shrink-0 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                  <span className="text-lg">{post.image}</span>
                </div>
              </div>

              {/* Connector Line */}
              <div className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-8"></div>

              {/* Blog Card */}
              <Link href="/posts">
                <article
                  className="flex-1 sm:ml-8 group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl w-full cursor-pointer"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "slideInRight 0.8s ease-out forwards",
                  }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
                      <div className="flex flex-wrap items-center gap-2">
                        {post.trending && (
                          <div className="flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full">
                            <TrendingUp className="w-4 h-4 text-white" />
                            <span className="text-xs font-medium text-white">
                              Trending
                            </span>
                          </div>
                        )}
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="text-white/60 text-sm">
                        {formatDate(post.date)}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-white/70 mb-6 text-base sm:text-lg line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{timeAgo(post.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-all group-hover:translate-x-2 transform">
                        <span className="text-sm font-medium">
                          Read Full Article
                        </span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 px-7 py-2 w-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-md hover:scale-105 cursor-pointer transition-all duration-300">
        <Link href="/posts" className="">
          See More
        </Link>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogList;
