"use client";

import { CategoryFilterProps } from "@/types/component";

const CategoryFilterBlog: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category: string, index: number) => (
        <button
          key={index}
          className={`
            px-6 py-3 rounded-xl font-medium text-sm
            transition-all duration-200 hover:transform hover:scale-105
            cursor-pointer
            ${
              activeCategory === category
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }
          `}
          style={{
            background:
              activeCategory === category
                ? "linear-gradient(135deg, #302b63, #24243e)"
                : "rgba(36, 36, 62, 0.3)",
            border: "1px solid rgba(48, 43, 99, 0.5)",
          }}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterBlog;
