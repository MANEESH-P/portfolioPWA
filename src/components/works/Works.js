import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import almas from "../../assets/almas.png";
import karunya from "../../assets/karunya.png";
import fakebuster from "../../assets/fakebuster.png";
import garud from "../../assets/garud.png";
import "./work.css";

export default function Works() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(-45deg, transparent 0%,rgb(48,52,85) 20%,rgb(48,52,85) 80%,transparent 100%),repeating-linear-gradient(45deg, rgba(255,255,255, 0.2) 0px, rgba(255,255,255, 0.2) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(45deg, rgba(255,255,255, 0.2) 0px, rgba(255,255,255, 0.2) 1px,transparent 1px, transparent 13px),linear-gradient(290deg, rgb(48,52,85),rgb(48,52,85))";
    return function cleanUp() {
      document.body.style.background = "#303455";
    };
  });
  return (
    <React.Fragment className="bg-valorant-violet">
      <Navbar />
      <div className="min-h-screen">
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-20">
          <div className="flex w-full items-center">
            <h1 className="w-2/6 sm:w-1/6 inline-block text-4xl">Works</h1>
            <hr className="w-4/6 border-valorant-red border-t-2 mt-6 ml-px sm:w-5/6 inline-block" />
          </div>
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-10 grid grid-col-1 sm:grid-cols-2 gap-10 mb-20">
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-valorant-violet">
            <a
              href="http://www.almaspacking.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="w-full" src={almas} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">Almas Packing Services</div>
              <p class="text-gray-400 text-base">
                Website for Almas packaging services, a contract packing service
                based out of Dubai.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-valorant-violet">
            <img class="w-full" src={garud} alt="Sunset in the mountains" />
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">Garud</div>
              <p class="text-gray-400 text-base">
                Hybrid learning network to detect public acts of violence
                through footage analysis.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-valorant-violet">
            <a
              href="https://github.com/MANEESH-P/NewsAccuracyPrediction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-full"
                src={fakebuster}
                alt="Sunset in the mountains"
              />
            </a>
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">FakeBuster</div>
              <p class="text-gray-400 text-base">
                ML based Flask web application to predict the accuracy of a news
                article.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-valorant-violet">
            <a
              href="http://www.karunyasparshamskp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="w-full" src={karunya} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">KarunyaSparsham</div>
              <p class="text-gray-400 text-base">
                Web application for data collection developed for
                Sreekrishnapuram Panchayath.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
