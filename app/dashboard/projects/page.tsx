import React from "react";
import { Folder, Plus } from "lucide-react";

const ManageProject = () => {
  const projects = [];
  return (
    <div className="p-6">
      {/* Add Button */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 capitalize">
          Manage Project
        </h2>
        <button className="flex items-center cursor-pointer space-x-2 bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Content */}
      <div className="grid gap-4">
        <div className="text-center py-12 text-gray-500">
          <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No projects yet. Create your first project!</p>
        </div>
      </div>
    </div>
  );
};

export default ManageProject;
