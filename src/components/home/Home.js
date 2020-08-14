import React from "react";

import Footer from "../footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center h-screen scene z-20 mt-24 sm:mt-0">
        <header className="grid grid-cols-12 leading-tight transform -translate-y-16 xs:-translate-y-1/2 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-1/2">
          <div className="flex items-end col-start-3 col-span-10 lg:col-start-4 lg:col-span-5">
            <h1 className="text-left lg:text-xl font-roboto accent-color">
              Hi I'm
            </h1>
          </div>
          <div className="flex items-center col-start-3 col-span-10 lg:col-start-4 lg:col-span-5">
            <h1 className="text-5xl lg:text-6xl font-extrabold font-roboto">
              Maneesh P
            </h1>
          </div>
          <div className="flex items-start col-start-3 col-span-9 lg:col-start-4 lg:col-span-5 leading-none">
            <h2 className="text-5xl text-left lg:text-5xl font-bold">
              I make intelligent ideas{" "}
              <span className="accent-color ">look</span> (and{" "}
              <span className="accent-color">feel</span>) good
              <span className="accent-color">.</span>
            </h2>
          </div>
        </header>
      </main>
      <Footer />
    </>
  );
}
