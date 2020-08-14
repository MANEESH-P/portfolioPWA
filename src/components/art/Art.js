import React from "react";
import Footer from "../footer/Footer";
import logan from "../../assets/logan.jpg";
import tony from "../../assets/tony.jpg";
import baby from "../../assets/baby.jpg";
import spiderman from "../../assets/spiderman.jpg";
import hug from "../../assets/hug.jpg";
import emma from "../../assets/emma.jpg";
import hoodie from "../../assets/hoodie.jpg";
import birds from "../../assets/birds.jpg";
import jackman from "../../assets/jackman.jpg";
import jan from "../../assets/jan.jpg";
import cr7 from "../../assets/cr7.jpg";
import gec from "../../assets/gec.jpg";
import house from "../../assets/house.jpg";
import campfire from "../../assets/campfire.jpg";

import "./art.css";
export default function Art() {
  return (
    <>
      <div className="min-h-screen mb-20">
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-20">
          <div className="flex w-full items-center">
            <div className="w-3/6 sm:w-1/4 md:w-3/6 lg:w-1/4">
              <h1 className="inline-block text-4xl">Sketches</h1>
            </div>
            <hr className="w-3/6 border-valorant-red border-t-2 mt-6 ml-px sm:w-3/4 md:ww-3/6 lg:w-3/4 inline-block" />
          </div>
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-10">
          <div class="row">
            <div class="column">
              <img
                className="border-2 transform hover:scale-105 shadow-2xl"
                alt="sketch"
                src={logan}
              />
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={jan}
              />

              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={jackman}
              />
            </div>
            <div class="column">
              <img
                className="shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={spiderman}
              />

              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={tony}
              />
            </div>
            <div className="column">
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={baby}
              />
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={hug}
              />
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={cr7}
              />
            </div>
            <div className="column">
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={emma}
              />
              <img
                className="border-2 shadow-2xl transform hover:scale-105"
                alt="sketch"
                src={hoodie}
              />
              <img
                className="border-2 transform hover:scale-105 shadow-2xl"
                alt="sketch"
                src={birds}
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-20">
          <div className="flex w-full items-center">
            <h1 className="w-3/6 sm:w-1/4 md:w-3/6 lg:w-1/4 inline-block text-4xl">
              Renders
            </h1>
            <hr className="w-3/6 border-valorant-red border-t-2 mt-6 ml-px sm:w-3/4 md:sm-3/6 lg:w-3/4 inline-block" />
          </div>
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-10 grid grid-col-1 sm:grid-cols-2 gap-10 mb-10">
          <div class="max-w-sm rounded overflow-hidden shadow-2xl">
            <a
              href="https://sketchfab.com/3d-models/gec-palakkad-kerala-india-de1a0de146fd4aa69221b8679d9459cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="w-full" src={gec} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 bg-primary-color">
              <div class="font-bold text-xl mb-2">
                <h2>College 3D model</h2>
              </div>
              <p class="text-base">
                3D model of Govt Engineerng College Palakkad using Blender.
                Click to view.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden bg-primary-color shadow-2xl">
            <img class="w-full" src={house} alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-primary-color">
              <div class="font-bold text-xl mb-2">
                <h2>Lowpoly House</h2>
              </div>
              <p class="text-base">Simple lowpoly 3D model of a house.</p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-2xl">
            <img class="w-full" src={campfire} alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-primary-color">
              <div class="font-bold text-xl mb-2 ">
                <h2>Campfire</h2>
              </div>
              <p class="text-base ">3D model of a campfire scene in lowpoly.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
