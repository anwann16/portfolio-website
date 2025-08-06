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

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">
            {editingItem ? "Edit" : "Add"}{" "}
            {activeTab.slice(0, -1).charAt(0).toUpperCase() +
              activeTab.slice(1, -1)}
          </h3>

          {activeTab === "projects" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Project Name"
                value={projectForm.name}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Project Description"
                value={projectForm.description}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    description: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
              />
              <select
                value={projectForm.status}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    status: e.target.value as Project["status"],
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>
          )}

          {activeTab === "categories" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Category Name"
                value={categoryForm.name}
                onChange={(e) =>
                  setCategoryForm({ ...categoryForm, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Category Description"
                value={categoryForm.description}
                onChange={(e) =>
                  setCategoryForm({
                    ...categoryForm,
                    description: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20"
              />
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700">
                  Color:
                </label>
                <input
                  type="color"
                  value={categoryForm.color}
                  onChange={(e) =>
                    setCategoryForm({ ...categoryForm, color: e.target.value })
                  }
                  className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                />
              </div>
            </div>
          )}

          {activeTab === "posts" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Post Title"
                value={postForm.title}
                onChange={(e) =>
                  setPostForm({ ...postForm, title: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Post Content"
                value={postForm.content}
                onChange={(e) =>
                  setPostForm({ ...postForm, content: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
              />
              <select
                value={postForm.categoryId}
                onChange={(e) =>
                  setPostForm({ ...postForm, categoryId: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                value={postForm.projectId}
                onChange={(e) =>
                  setPostForm({ ...postForm, projectId: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
              <select
                value={postForm.status}
                onChange={(e) =>
                  setPostForm({
                    ...postForm,
                    status: e.target.value as Post["status"],
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          )}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {editingItem ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome back!</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Projects
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {projects.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Folder className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-3xl font-bold text-gray-900">
                  {categories.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Tag className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Posts</p>
                <p className="text-3xl font-bold text-gray-900">
                  {posts.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {(["projects", "categories", "posts"] as ActiveTab[]).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>

          <div className="p-6">
            {/* Add Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 capitalize">
                Manage {activeTab}
              </h2>
              <button
                onClick={() => openModal(activeTab)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add {activeTab.slice(0, -1)}</span>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {activeTab === "projects" && (
                <div className="grid gap-4">
                  {projects.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <Folder className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No projects yet. Create your first project!</p>
                    </div>
                  ) : (
                    projects.map((project) => (
                      <div
                        key={project.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">
                              {project.name}
                            </h3>
                            <p className="text-gray-600 mt-1">
                              {project.description}
                            </p>
                            <div className="flex items-center space-x-4 mt-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                  project.status
                                )}`}
                              >
                                {project.status}
                              </span>
                              <div className="flex items-center text-gray-500 text-xs">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(
                                  project.createdAt
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openModal("projects", project)}
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() =>
                                handleDelete("projects", project.id)
                              }
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "categories" && (
                <div className="grid gap-4">
                  {categories.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <Tag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No categories yet. Create your first category!</p>
                    </div>
                  ) : (
                    categories.map((category) => (
                      <div
                        key={category.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: category.color }}
                            ></div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {category.name}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {category.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openModal("categories", category)}
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() =>
                                handleDelete("categories", category.id)
                              }
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "posts" && (
                <div className="grid gap-4">
                  {posts.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No posts yet. Create your first post!</p>
                    </div>
                  ) : (
                    posts.map((post) => (
                      <div
                        key={post.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              {post.content}
                            </p>
                            <div className="flex items-center space-x-4 mt-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                  post.status
                                )}`}
                              >
                                {post.status}
                              </span>
                              {post.categoryId && (
                                <span className="text-xs text-gray-500">
                                  Category: {getCategoryName(post.categoryId)}
                                </span>
                              )}
                              {post.projectId && (
                                <span className="text-xs text-gray-500">
                                  Project: {getProjectName(post.projectId)}
                                </span>
                              )}
                              <div className="flex items-center text-gray-500 text-xs">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(post.createdAt).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openModal("posts", post)}
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete("posts", post.id)}
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {renderModal()}
    </div>
  );
};

export default Dashboard;
