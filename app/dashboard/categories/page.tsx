"use client";

import React from "react";
import { useDisclosure } from "@heroui/react";
import CategoryForm from "@/components/(dashboard)/CategoryForm";
import HeaderContent from "@/components/(dashboard)/HeaderContent";

const CategoryDashboard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="p-6">
      {/* Header */}
      <HeaderContent title="Category" onPress={onOpen} />

      {/* Content */}
      {/* <div className="grid gap-4">
        <div className="text-center py-12 text-gray-500">
          <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No category yet. Create your first category!</p>
        </div>
      </div> */}
      <CategoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default CategoryDashboard;
