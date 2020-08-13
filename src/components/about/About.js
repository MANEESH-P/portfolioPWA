import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../assets/pro2.jpg";
import "./about.css";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen text-justify">
        <div class="flex flex-wrap sm:w-1/2 ml-5 mr-5 sm:ml-auto sm:mr-auto mt-20">
          <div className="flex w-full items-center">
            <div className="w-3/6 sm:w-1/4">
              <h1 className="inline-block text-4xl">About Me</h1>
            </div>

            <hr className="w-3/6 border-valorant-red border-t-2 mt-6 ml-px sm:w-3/4 inline-block" />
          </div>
          <p className="text-xl mt-5">
            Software Engineer based out of India. Hobby artist, casual gamer,
            big time foodie with a relentless desire to bring the best out of
            the web.
          </p>
        </div>
        <div class="flex sm:w-1/4 ml-5 sm:ml-auto mr-5 sm:mr-auto mt-10">
          <img
            src={img}
            style={{ borderRadius: "50%" }}
            alt=""
            className="h-full w-full shadow-xl"
          />
        </div>
        <div class="flex flex-wrap sm:w-1/2 ml-5 sm:ml-auto mr-5 sm:mr-auto mt-5">
          <p className="text-xl mt-5">
            I'm a self taught developer with solid expertise in Frontend and
            Javascript. I love involving myself in many pervasive tech.(3D
            modelling via{" "}
            <span className="hover:text-valorant-red font-semibold underline">
              Blender
            </span>
            , Cloud, Machine Learning to name a few) <br /> <br />
            Apart from work I like to sketch out life on a white sheet of paper.{" "}
            <br />
            <br />
            Completed my B.tech Computer Science degree from Government
            Engineering College Palakkad in 2019.
          </p>
        </div>
        <div class="flex flex-wrap  sm:w-1/2 ml-5 sm:ml-auto mr-5 sm:mr-auto mt-5 mb-20">
          <div className="flex w-full items-center">
            <div className="w-5/6 sm:w-2/5">
              <h1 className=" block lg:inline-block text-4xl">
                Work Experience
              </h1>
            </div>
            <hr className="border-valorant-red border-t-2 mt-6 ml-px w-1/6 sm:w-3/5 block lg:inline-block" />
          </div>

          <p className="text-xl mt-5">
            In addition to my Bachelor's coursework, I had a great experience
            interning as a Frontend engineer at Aidapp Intelligence, a start-up
            in Bengaluru where I used{" "}
            <span className="hover:text-valorant-red underline font-semibold">
              Ionic
            </span>{" "}
            to develop saledrive, a sales management application. <br /> <br />{" "}
            Currently I do product engineerig at GlobalLogic India - utilizing
            <span className="hover:text-valorant-red font-semibold underline ml-2">
              AWS
            </span>
            ,
            <span className="hover:text-valorant-red font-semibold underline ml-2">
              Azure
            </span>{" "}
            to put happy smiles in the faces of my clients (and my managers{" "}
            <span className="text-valorant-red">;)</span>).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
