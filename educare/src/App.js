import React from "react";
import "./App.css";
export default function Educare() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Educare</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-yellow-300">Features</a>
            <a href="#modules" className="hover:text-yellow-300">Modules</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-blue-500 e-hero-gradient text-white">
        <h2 className="text-4xl font-bold mb-4">Simplify School Management with Educare</h2>
        <p className="max-w-2xl mx-auto text-lg">
          A complete school management solution by Aprime Digital Solution to streamline
          academic, administrative, and financial operations — all in one platform.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow e-btn hover:bg-yellow-300">
          Request a Demo
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose Educare?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold mb-2">User Friendly</h4>
            <p>Easy to use interface designed for teachers, students, and administrators.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Secure & Reliable</h4>
            <p>Data is securely managed with user-based access and role control.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Accessible Anywhere</h4>
            <p>Works on computers, tablets, and smartphones with cloud access.</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="bg-white py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Core Modules</h3>
        <div className="grid md:grid-cols-4 gap-8 container mx-auto">
          {[
            "Student Management",
            "Teacher Management",
            "Fee Management",
            "Inventory Management",
            "Attendance Management",
            "Exam Management",
            "Library Management",
            "Communication Center",
          ].map((module) => (
            <div key={module} className="bg-blue-100 p-6 rounded-2xl shadow e-card text-center hover:bg-blue-200">
              <h4 className="font-semibold">{module}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-700 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p>Aprime Digital Solution</p>
          <p>📞 0277951415 / 0200159014</p>
          <p>📧 aprimedigitalsolution@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Educare by Aprime Digital Solution. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
