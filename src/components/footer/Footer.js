import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between w-full p-5 sm:px-20 md:py-10 lg:py-10 lg:px-2 flex flex-wrap lg:w-1/2 md:ml-auto md:mr-auto">
      <div className="">
        <h1 className="">Maneesh P &copy; 2020</h1>
      </div>
      <div className="flex justify-end">
        <ul className="flex justify-end">
          <li className="mr-2 pr-2 sm:mr-5 sm:pr-5">
            <a href="https://www.linkedin.com/in/maneesh-puthenveedu/">
              <i
                class="fa fa-linkedin text-xl hover:text-valorant-red"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li className="mr-2 pr-2 sm:mr-5 sm:pr-5">
            <a href="https://www.instagram.com/_maneesh_p_/">
              <i
                class="fa fa-instagram text-xl hover:text-valorant-red"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li className="mr-2 pr-2 sm:mr-5 sm:pr-5">
            <a href="https://github.com/MANEESH-P">
              <i
                class="fa fa-github text-xl hover:text-valorant-red"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li className="mr-1   ">
            <a href="mailto:hellomaneeshp@gmail.com">
              <i
                class="fa fa-envelope text-xl hover:text-valorant-red"
                aria-hidden="true"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
