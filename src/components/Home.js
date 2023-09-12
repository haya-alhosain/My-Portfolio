import "../index.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
function Home() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);

  return (
    <>
      <div
        className={
          right
            ? " container  flex  relative  right-0  duration-1500  opacity-100   justify-start items-center h-screen mx-auto px-3"
            : " container  flex  relative   right-1/4 duration-500 opacity-0   justify-center items-center h-screen mx-auto px-3"
        }
      >
        <div className="flex  flex-col items-center md:flex-row ">
          {/* info */}
          <div className="md:ml-12  p-2 max-w-xl text-center md:text-left ">
            {" "}
            <h1
              className=" p-2 dark:text-slate-50 font-bold  text-4xl  tracking-wider uppercase"
              style={{
                fontSize: "40px",
                marginBottom: "15px",
                color: "lightcoral",
              }}
            >
              {" "}
              Haya Alhosain
            </h1>
            <h2 className=" p-2 font-bold text-2xl dark:text-slate-50 ">
              FrontEnd Developer
            </h2>
            <p
              className="p-3   font-medium text-gray-600 dark:text-gray-400  tracking-tight"
              style={{ lineHeight: "1.7", marginBottom: "10px" }}
            >
              {" "}
              I've learned front-end development since 1 years , I create and
              developing websites using the React library, Now I'm focusing on
              improving my skills and knowledge
            </p>
            <div>
              <ul className=" flex  justify-center  md:justify-normal">
                <li className="dark:text-slate-50 ml-1  p-1 hover:dark:text-zinc-400 hover:-translate-y-2 hover:duration-500 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://www.facebook.com/haya.alhosain">
                    <FacebookRoundedIcon />
                  </a>
                </li>
                <li className="dark:text-slate-50 ml-1  p-1 hover:-translate-y-2 hover:duration-500 hover:dark:text-zinc-400 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://github.com/haya-alhosain" target="_self">
                    <GitHubIcon />
                  </a>
                </li>
                <li className="dark:text-slate-50 ml-1  p-1 hover:duration-500 hover:-translate-y-2 hover:dark:text-zinc-400 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://www.linkedin.com/in/haya-alhosain-990279260/">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
