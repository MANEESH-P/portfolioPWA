import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./navbar.css";

const toggleNavbar = () => {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
};

export default function Navbar() {
  let localStorage = window.localStorage;
  const [theme, setTheme] = useState("theme-dark");

  const toggleTheme = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      localStorage.setItem("theme", "theme-light");
    } else {
      setTheme("theme-dark");
      localStorage.setItem("theme", "theme-dark");
    }
  };

  useEffect(() => {
    if (theme === "theme-dark") {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      document.querySelector('html').classList.remove("theme-light");
      document.querySelector('html').classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      document.querySelector('html').classList.remove("theme-dark");
      document.querySelector('html').classList.add("theme-light");     
    }
  });

  return (
    <div className="nav-div shadow-xl sm:shadow-none z-50">
      <nav class="flex items-center justify-between flex-wrap p-6 pl-5 pr-5  sm:px-20 sm:py-10 md:px-20 lg:px-40">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <motion.h1
              className="brand"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span class="tracking-tight font-semibold text-xl">
                Maneesh P
              </span>
            </motion.h1>
          </Link>
        </div>
        <div className="flex justify-end mr-5">
          <div>
            <label id="switch" class="switch">
              <input
                type="checkbox"
                className=""
                onChange={toggleTheme}
                id="slider"
              />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={() => {
              toggleNavbar();
            }}
            id="hamburgerbtn"
            class="focus:outline-none flex items-center px-3 py-2 pb-1 border rounded text-white border-primary-color hover:text-white  hover:border-white"
          >
            <svg
              class="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {theme === "theme-light" && (
                <path
                  fill="rgb(0,0,0)"
                  stroke="rgb(0,0,0)"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              )}
              {theme === "theme-dark" && (
                <path
                  fill="rgb(255,255,255)"
                  stroke="rgb(255,255,255)"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <motion.div
          id="mobileMenu"
          class="mt-1 w-full lg:block hidden flex-grow flex lg:items-center  lg:w-auto z-40"
        >
          <motion.nav className="nav">
            <motion.div class="text-sm lg:flex justify-end">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/about"
                  class="nav block mt-4 lg:inline-block lg:mt-0  mr-10 text-lg sm:text-lg"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/code"
                  class="nav block mt-4 lg:inline-block lg:mt-0  mr-10 text-lg sm:text-lg"
                  onClick={toggleNavbar}
                >
                  Code
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/art"
                  class="nav block mt-4 lg:inline-block lg:mt-0 text-lg sm:text-lg "
                  onClick={toggleNavbar}
                >
                  Art
                </Link>
              </motion.span>
            </motion.div>
          </motion.nav>
        </motion.div>
      </nav>
    </div>
  );
}
