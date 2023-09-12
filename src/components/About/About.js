import { useEffect, useState } from "react";
import Skills from "./Skills";
import HayaCv from "../../Haya-CV.pdf";
import Knowledge from "./Knowlede";
import Exprins from "./Exprins";
import Title from "../global/Title";

function About() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);

  return (
    <div className=" pb-20">
      <div
        className={
          right
            ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-12 "
            : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-12 "
        }
      >
        <div className="px-6    ">
          <div className=" xl:px-20 pb-12 ">
            <Title title="About" subTitle="About Me" />
            <div className="max-w-full  ">
              <img
                src={require("../../imgs/imgPortfolio/DSC_1622kk.jpg")}
                className=" min-w-full max-w-full  "
                alt="myimg"
                style={{
                  borderRadius: "50%",
                  width: "170px",
                  height: "170px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className=" mt-9 pb-5 border-b  dark:border-b-gray-600 border-b-neutral-300/90 mb-6">
              <h1 className="  font-bold  text-2xl dark:text-neutral-50">
                Haya Obaid Alhosain
              </h1>
              <p className=" font-Mulish  py-1  font-normal text-gray-600 dark:text-gray-400">
                A Communication Engineer & FrontEnd Developer
              </p>
            </div>
            <div className=" w-full pb-6 border-b  dark:border-b-gray-600 border-b-neutral-300/90 mb-9 ">
              <p className=" font-Mulish  mb-4 font-normal text-base tracking-wider leading-7 text-gray-600/90 dark:text-gray-400">
                Hi, my name is Haya, Graduate of Electronics and Communications
                Engineering , I started learning front-end development from 1
                year , And until now I am spent most of my time learning and
                building websites, I love learning and researching, and I am
                intrested in everything new
              </p>
            </div>
            {/* info about */}
            <div className=" flex flex-col md:flex-row border-b pb-6 dark:border-b-gray-600 border-b-neutral-300/90 mb-9  ">
              <div className="  w-full h-full">
                <ul className=" font-Mulish md:pr-8">
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-1">
                      Birthday:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      28/1/1999
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-1">
                      Age:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      {new Date().getFullYear() -
                        new Date("1999-1-28").getFullYear()}
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-1">
                      Address:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      Qudsaya , Alsalam Street
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-1">
                      Email:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400 hover:text-black duration-300  ">
                      <a href="mailto:hayaalhosain8@gmail.com">
                        hayaalhosain8@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-1">
                      Phone:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400 hover:text-black duration-300 ">
                      <a href="tel:+963 969548264"> +963 969548264</a>
                    </span>
                  </li>
                </ul>
              </div>
              {/* saecnd */}
              <div className=" w-full h-full font-Mulish md:pl-8">
                <ul className="lg:pl-r">
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-2">
                      Nationality:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      Syrian
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-2">
                      Study:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      Electronics and Communications Engineering
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-2">
                      Degree:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      Bachelor's
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold inline-block min-w-100px h-8 dark:text-neutral-50 mr-2">
                      Interest:
                    </span>
                    <span className="text-gray-600/90 dark:text-gray-400">
                      reading, Learning
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <a href={HayaCv} title="CV" download="Haya's Cv-download">
              <button
                className=" font-Mulish w-fit px-8 inline-block   font-normal py-4 bg-black text-white dark:bg-white  dark:text-black"
                style={{ background: "lightcoral" }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <Skills />
      <Knowledge />
      <Exprins />
    </div>
  );
}

export default About;
