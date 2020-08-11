import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./home.css";

export default function Home() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(231deg,transparent 0%,rgb(48, 52, 85) 40%,rgb(48, 52, 85) 65%,transparent 100%),repeating-linear-gradient(141deg,rgba(255, 255, 255, 0.5) 0px,rgb(255, 255, 255, 0.5) 1px,transparent 1px,transparent 13px),repeating-linear-gradient(231deg,rgb(255, 255, 255, 0.2) 0px,rgb(255, 255, 255, 0.2) 1px,transparent 1px,transparent 13px),linear-gradient(231deg, rgb(48, 52, 85), rgb(48, 52, 85))";
    return function cleanUp() {
      document.body.style.background = "#303455";
    };
  });
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center h-screen scene">
        <header className="grid grid-cols-12 leading-tight transform -translate-y-16 xs:-translate-y-1/2 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-1/2">
          <div className="flex items-end col-start-3 col-span-10 lg:col-start-4 lg:col-span-5">
            <h1 className="text-left lg:text-xl font-roboto text-valorant-red">
              Hi I'm
            </h1>
          </div>
          <div className="flex items-center col-start-3 col-span-10 lg:col-start-4 lg:col-span-5">
            <h1 className="text-5xl lg:text-6xl font-extrabold font-roboto">
              Maneesh P
            </h1>
          </div>
          <div className="flex items-start col-start-3 col-span-9 lg:col-start-4 lg:col-span-5 leading-none">
            <h1 className="text-5xl text-left lg:text-5xl font-bold text-gray-400">
              I make intelligent ideas{" "}
              <span className="text-valorant-red ">look</span> (and{" "}
              <span className="text-valorant-red">feel</span>) good
              <span className="text-valorant-red">.</span>
            </h1>
          </div>
        </header>
      </main>
      <Footer />
    </>
  );
}
