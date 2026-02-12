import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-10 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LEFT TEXT */}
        <h2 className="text-lg font-bold text-pink-600 dark:text-pink-400">
          📚 BookStore
        </h2>

        {/* CENTER LINKS */}
        <ul className="flex gap-6 text-sm font-semibold">
          <li className="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer duration-200">
            Privacy Policy
          </li>
          <li className="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer duration-200">
            Terms & Conditions
          </li>
          <li className="hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer duration-200">
            Support
          </li>
        </ul>

        {/* RIGHT TEXT */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} BookStore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
