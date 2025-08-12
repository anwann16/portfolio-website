import React from "react";
import { Folder } from "lucide-react";
import HeaderContent from "@/components/(dashboard)/HeaderContent";

const CategoryDashboard = () => {
  return (
    <div className="p-6">
      {/* Add Button */}
      <HeaderContent title="Category" />

      {/* Content */}
      <div className="grid gap-4">
        <div className="text-center py-12 text-gray-500">
          <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No category yet. Create your first category!</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDashboard;
