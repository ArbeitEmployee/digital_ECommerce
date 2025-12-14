/* eslint-disable no-unused-vars */
// ModifyCategory.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = import.meta.env.VITE_API_URL;

function ModifyCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editError, setEditError] = useState("");

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Authentication required. Please login again.", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      const response = await axios.get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      toast.error("Failed to load categories", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}" category?`)) {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.delete(`${baseUrl}/categories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setCategories(categories.filter((category) => category._id !== id));
          toast.success("Category deleted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          // Dispatch event for navbar update
          window.dispatchEvent(new CustomEvent("categoryDeleted"));
        }
      } catch (err) {
        console.error("Error deleting category:", err);
        const errorMsg =
          err.response?.data?.message || "Failed to delete category";
        toast.error(errorMsg, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const startEditing = (category) => {
    setEditingId(category._id);
    setEditName(category.name);
    setEditError("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
    setEditError("");
  };

  const handleUpdate = async (id) => {
    // Clear previous error
    setEditError("");

    // Validate input
    if (!editName.trim()) {
      setEditError("Category name cannot be empty");
      toast.error("Category name cannot be empty", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${baseUrl}/categories/${id}`,
        {
          name: editName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setCategories(
          categories.map((category) =>
            category._id === id ? response.data.category : category
          )
        );
        setEditingId(null);
        setEditName("");
        toast.success("Category updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        // Dispatch event for navbar update
        window.dispatchEvent(new CustomEvent("categoryUpdated"));
      }
    } catch (err) {
      console.error("Error updating category:", err);
      const errorMsg =
        err.response?.data?.message || "Failed to update category";
      setEditError(errorMsg);
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleRefresh = () => {
    fetchCategories();
    toast.info("Refreshing categories...", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  // Listen for category creation events
  useEffect(() => {
    const handleCategoryCreated = () => {
      fetchCategories();
      toast.success("New category detected! Refreshing list...", {
        position: "top-right",
        autoClose: 2000,
      });
    };

    window.addEventListener("categoryCreated", handleCategoryCreated);
    return () => {
      window.removeEventListener("categoryCreated", handleCategoryCreated);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ToastContainer />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-2 border-gray-200 border-t-2 border-t-black rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center p-6"
    >
      <ToastContainer />

      <div className="w-full mb-8 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Modify Category List
            </h1>
            <p className="text-gray-600 mt-2">
              Modify the categories for organizing your content
            </p>
          </div>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </button>
        </div>
      </div>
      <div className="w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200"
        >
          <div className="py-1 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Category Manager
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your categories
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {categories.length} categories
                </span>
              </div>
            </div>
          </div>

          {categories.length === 0 ? (
            <div className="py-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No categories
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new category.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="py-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  {editingId === category._id ? (
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => {
                            setEditName(e.target.value);
                            // Clear error when user starts typing
                            if (editError) setEditError("");
                          }}
                          className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
                            editError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                          } text-gray-900 placeholder-gray-400`}
                          placeholder="Category name"
                          autoFocus
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleUpdate(category._id)}
                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-gray-700 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                      {/* Red error text under the edit input */}
                      {editError && (
                        <p className="text-sm text-red-600 font-medium mt-1 ml-1">
                          {editError}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
                          <span className="text-sm font-medium text-gray-600">
                            {category.name.charAt(0).toUpperCase()}
                          </span>
                        </span>
                        <span className="text-base font-medium text-gray-900">
                          {category.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => startEditing(category)}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleDelete(category._id, category.name)
                          }
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ModifyCategory;
