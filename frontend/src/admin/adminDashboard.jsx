/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

// Import only the 5 required components
import Dashboard from "../admin/pages/Dashboard";
import CreateCategory from "../admin/pages/CreateCategory";
import ModifyCategory from "../admin/pages/ModifyCategory";
import ProductCreate from "../admin/pages/ProductCreate";
import ProductModify from "../admin/pages/ProductModify";

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem("adminActiveView") || "dashboard";
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const tabletOrMobile = width <= 1020;
      setIsTabletOrMobile(tabletOrMobile);
      if (!tabletOrMobile) {
        setIsMobileOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Save view to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("adminActiveView", activeView);
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "createCategory":
        return <CreateCategory />;
      case "modifyCategory":
        return <ModifyCategory />;
      case "productCreate":
        return <ProductCreate />;
      case "productModify":
        return <ProductModify />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-2 md:p-4 relative">
      {/* Mobile/Tablet Header */}
      {isTabletOrMobile && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-40 lg:hidden">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold">Admin Panel</span>
          <div className="w-6"></div>
        </div>
      )}

      {/* Content */}
      <div
        className={`flex w-full bg-white rounded-3xl md:rounded-3xl shadow-sm sm:shadow-lg border border-gray-200 overflow-hidden relative ${
          isTabletOrMobile ? "mt-16 mb-2 h-[calc(100vh-5rem)]" : "h-[95vh]"
        } `}
      >
        {/* Sidebar */}
        {isTabletOrMobile ? (
          <div className="fixed inset-y-0 left-0 z-50">
            <Sidebar
              activeView={activeView}
              setActiveView={setActiveView}
              isMobileOpen={isMobileOpen}
              setIsMobileOpen={setIsMobileOpen}
            />
          </div>
        ) : (
          <div className="relative">
            <Sidebar
              activeView={activeView}
              setActiveView={setActiveView}
              isMobileOpen={isMobileOpen}
              setIsMobileOpen={setIsMobileOpen}
            />
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 h-full overflow-auto relative">
          <div className="relative z-10">{renderView()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
