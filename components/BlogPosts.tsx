"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogList";
import { BlogPost } from "@/types/component";
import CategoryFilterBlog from "./CategoryFilterBlog";

const BlogPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Web Development",
    "Programming",
    "UI/UX Design",
    "Data Science",
    "Security",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Artikel terbaru tentang teknologi, programming, finance dan digital
            trends
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div
              className="
                backdrop-blur-xl border rounded-2xl p-4
                flex items-center gap-3
              "
              style={{
                background: "rgba(36, 36, 62, 0.3)",
                borderColor: "rgba(48, 43, 99, 0.5)",
              }}
            >
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  flex-1 bg-transparent text-white placeholder-gray-400
                  outline-none text-sm
                "
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilterBlog
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Featured Post */}
        {featuredPost && (
          <div className="hidden lg:block mb-16">
            <BlogCard post={featuredPost} variant="featured" />
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
