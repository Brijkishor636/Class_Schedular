import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Partner", href: "#partner" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
            <Link to={"/"}>
          <span className="text-indigo-600 font-extrabold text-2xl">TimetableAI</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-indigo-500 transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login">
            <button className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer">
              Login
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-500 transition"
          >
            {isOpen ? (
              <RxCross2 size={28} className="text-gray-700 hover:text-indigo-500 transition cursor-pointer" />
            ) : (
              <IoMenu size={28} className="text-gray-700 hover:text-indigo-500 transition cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="text-indigo-600 font-extrabold text-2xl">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <RxCross2 size={28} className="text-gray-700 hover:text-indigo-500 transition cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col mt-6 space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-indigo-500 transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
