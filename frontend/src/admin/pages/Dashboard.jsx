import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to the Admin Panel</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Total Categories",
              value: "12",
              icon: "📊",
              color: "blue",
            },
            {
              title: "Active Courses",
              value: "8",
              icon: "📚",
              color: "green",
            },
            {
              title: "Total Users",
              value: "156",
              icon: "👥",
              color: "purple",
            },
            {
              title: "This Month",
              value: "24",
              icon: "📈",
              color: "orange",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg text-2xl`}>{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              {
                text: "New category 'Web Development' added",
                time: "10 minutes ago",
              },
              { text: "User John Doe registered", time: "1 hour ago" },
              { text: "Course 'React Basics' updated", time: "2 hours ago" },
              { text: "System maintenance completed", time: "3 hours ago" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <span>{activity.text}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
