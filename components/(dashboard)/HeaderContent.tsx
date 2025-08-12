import { Plus } from "lucide-react";
import React from "react";

type PropTypes = {
  title: string;
};

const HeaderContent = (props: PropTypes) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 capitalize">
        Manage {props.title}
      </h2>
      <button className="flex items-center cursor-pointer space-x-2 bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition-colors">
        <Plus className="w-4 h-4" />
        <span>Add {props.title}</span>
      </button>
    </div>
  );
};

export default HeaderContent;
