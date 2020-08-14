import React from "react";
import Footer from "../footer/Footer";
import almas from "../../assets/almas.jpg";
import karunya from "../../assets/karunya.jpg";
import fakebuster from "../../assets/fakebuster.jpg";
import garud from "../../assets/garud.jpg";
import "./work.css";

export default function Works() {
  return (
    <React.Fragment className="bg-valorant-violet">
      <div className="min-h-screen mt-32 sm:mt-0">
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-20">
          <div className="flex w-full items-center">
            <h1 className="w-2/6 sm:w-1/6 inline-block text-4xl">Works</h1>
            <hr className="w-4/6 border-valorant-red border-t-2 mt-6 ml-px sm:w-5/6 inline-block" />
          </div>
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-10 grid grid-col-1 sm:grid-cols-2 gap-10 mb-20">
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-primary-color">
            <a
              href="http://www.almaspacking.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="w-full" src={almas} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">
                <h2>Almas Packing Services</h2>
              </div>
              <p class="text-base">
                Website for Almas packaging services, a contract packing service
                based out of Dubai.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-primary-color">
            <img class="w-full" src={garud} alt="Sunset in the mountains" />
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">
                <h2>Garud</h2>
              </div>
              <p class="text-base">
                Hybrid learning network to detect public acts of violence
                through footage analysis.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-primary-color">
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
              <div class="font-bold text-xl mb-2">
                <h2>FakeBuster</h2>
              </div>
              <p class="text-base">
                ML based Flask web application to predict the accuracy of a news
                article.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl bg-primary-color">
            <a
              href="http://www.karunyasparshamskp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="w-full" src={karunya} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 card">
              <div class="font-bold text-xl mb-2">
                <h2>KarunyaSparsham</h2>
              </div>
              <p class="text-base">
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
