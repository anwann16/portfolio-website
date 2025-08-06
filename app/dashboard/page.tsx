"use client";

import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Folder,
  Tag,
  FileText,
  Calendar,
  User,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on-hold";
  createdAt: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  projectId: string;
  status: "draft" | "published" | "archived";
  createdAt: string;
}

type ActiveTab = "projects" | "categories" | "posts";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Form states
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    status: "active" as Project["status"],
  });

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    color: "#3B82F6",
  });

  const [postForm, setPostForm] = useState({
    title: "",
    content: "",
    categoryId: "",
    projectId: "",
    status: "draft" as Post["status"],
  });

  const resetForms = () => {
    setProjectForm({ name: "", description: "", status: "active" });
    setCategoryForm({ name: "", description: "", color: "#3B82F6" });
    setPostForm({
      title: "",
      content: "",
      categoryId: "",
      projectId: "",
      status: "draft",
    });
  };

  const openModal = (type: ActiveTab, item?: any) => {
    setEditingItem(item);
    if (item) {
      if (type === "projects") {
        setProjectForm(item);
      } else if (type === "categories") {
        setCategoryForm(item);
      } else if (type === "posts") {
        setPostForm(item);
      }
    } else {
      resetForms();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    resetForms();
  };

  const handleSubmit = () => {
    const now = new Date().toISOString();

    if (activeTab === "projects") {
      if (editingItem) {
        setProjects(
          projects.map((p) =>
            p.id === editingItem.id
              ? {
                  ...projectForm,
                  id: editingItem.id,
                  createdAt: editingItem.createdAt,
                }
              : p
          )
        );
      } else {
        const newProject: Project = {
          ...projectForm,
          id: Date.now().toString(),
          createdAt: now,
        };
        setProjects([...projects, newProject]);
      }
    } else if (activeTab === "categories") {
      if (editingItem) {
        setCategories(
          categories.map((c) =>
            c.id === editingItem.id
              ? { ...categoryForm, id: editingItem.id }
              : c
          )
        );
      } else {
        const newCategory: Category = {
          ...categoryForm,
          id: Date.now().toString(),
        };
        setCategories([...categories, newCategory]);
      }
    } else if (activeTab === "posts") {
      if (editingItem) {
        setPosts(
          posts.map((p) =>
            p.id === editingItem.id
              ? {
                  ...postForm,
                  id: editingItem.id,
                  createdAt: editingItem.createdAt,
                }
              : p
          )
        );
      } else {
        const newPost: Post = {
          ...postForm,
          id: Date.now().toString(),
          createdAt: now,
        };
        setPosts([...posts, newPost]);
      }
    }
    closeModal();
  };

  const handleDelete = (type: ActiveTab, id: string) => {
    if (type === "projects") {
      setProjects(projects.filter((p) => p.id !== id));
    } else if (type === "categories") {
      setCategories(categories.filter((c) => c.id !== id));
    } else if (type === "posts") {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "published":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "on-hold":
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryName = (id: string) => {
    const category = categories.find((c) => c.id === id);
    return category ? category.name : "Unknown";
  };

  const getProjectName = (id: string) => {
    const project = projects.find((p) => p.id === id);
    return project ? project.name : "Unknown";
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      

      {/* {renderModal()} */}
    </div>
  );
};

export default Dashboard;

//
