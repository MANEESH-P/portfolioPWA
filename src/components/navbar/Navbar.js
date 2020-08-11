import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const toggleNavbar = () => {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
};

export default function Navbar() {
  return (
    <div className="bg-valorant-violet shadow-xl">
      <nav class="flex items-center justify-between flex-wrap  p-6 pl-5 pr-5 sm:px-40 sm:py-10">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <span class="tracking-tight font-bold text-xl">Maneesh P</span>
          </Link>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={toggleNavbar}
            id="hamburgerbtn"
            class="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="mobileMenu"
          class="w-full lg:block hidden flex-grow flex lg:items-center  lg:w-auto"
        >
          <div class="text-sm lg:flex justify-end">
            <Link
              to="/about"
              class="nav border-b border-valorant-violet block mt-4 lg:inline-block lg:mt-0 text-white  mr-10 text-lg sm:text-lg"
            >
              About
            </Link>
            <Link
              to="/code"
              class="nav border-b border-valorant-violet block mt-4 lg:inline-block lg:mt-0 text-white  mr-10 text-lg sm:text-lg"
            >
              Code
            </Link>
            <Link
              to="/art"
              class="nav border-b border-valorant-violet block mt-4 lg:inline-block lg:mt-0 text-white text-lg sm:text-lg "
            >
              Art
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
