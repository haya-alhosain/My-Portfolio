import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import EmailIcon from "@mui/icons-material/Email";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
function Navbars() {
  const [close, setClose] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <>
      {/* the topbar */}
      <div
        className=" lg:hidden shadow bg-white
  dark:bg-zinc-800/100 p-1  top-0 right-0 w-full"
        style={{ zIndex: "30" }}
      >
        <div className="flex justify-between items-center">
          <div className="cursor-pointer ">
            <Link
              to={"/"}
              className="font-bold mb-7 p-3 text-2xl text-center   tracking-widest dark:text-slate-50 uppercase"
            >
              HAYA
            </Link>
          </div>
          <div
            className="cursor-pointer "
            onClick={() => {
              setClose(close ? false : true);
            }}
          >
            {" "}
            <IconButton>
              {close ? (
                <MenuRoundedIcon
                  className="dark:text-slate-50  text-black  "
                  style={{
                    fontSize: "30px",
                  }}
                />
              ) : (
                <CloseRoundedIcon
                  className="dark:text-slate-50  text-black"
                  style={{
                    fontSize: "30px",
                  }}
                />
              )}{" "}
            </IconButton>
          </div>
        </div>
      </div>
      {/* sidebar */}

      <div
        className={
          close
            ? "lg:col-span-2  fixed top-0 w-max h-full z-50 dark:bg-black bg-slate-50  hidden  lg:flex items-center   justify-center  duration-200 "
            : "lg:col-span-2 z-50 fixed top-0 w-max h-full dark:bg-black bg-slate-50   flex items-center   justify-center  duration-200 "
        }
        style={{ width: "250px" }}
      >
        <div className="p-4 mb-20" x>
          {!close ? (
            <div className=" lg:hidden absolute top-0 right-0">
              {" "}
              <IconButton
                className=" lg:hidden"
                onClick={() => {
                  setClose(true);
                }}
              >
                <CloseRoundedIcon
                  className="dark:text-slate-50  text-black"
                  style={{
                    fontSize: "30px",
                  }}
                />
              </IconButton>{" "}
            </div>
          ) : null}
          <Link
            to={"/"}
            onClick={() => {
              setClose(true);
            }}
          >
            <div className="max-w-full">
              <img
                src={require("../../imgs/imgPortfolio/DSC_1622kk.jpg")}
                className=" min-w-full max-w-full  "
                alt="myimg"
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  margin: "auto",
                }}
              />
            </div>

            <h3 className=" font-bold mb-7 p-3 text-1x1 text-center tracking-wide dark:text-slate-50 ">
              Haya Alhosain
            </h3>
          </Link>
          <div>
            <ul className=" p-4 " style={{ marginTop: "-22px" }}>
              <li
                className={
                  splitLocation[1] === ""
                    ? " dark:text-slate-50  tracking-widest ml-2 p-3"
                    : "  dark:text-slate-300/75 text-zinc-700/80 p-3 hover:tracking-wider hover:duration-300 hover:ml-2"
                }
              >
                <Link
                  to={"/"}
                  className="flex items-center text-lg font-medium"
                  onClick={() => {
                    setClose(true);
                  }}
                >
                  <HomeIcon className=" mr-2" fontSize={"small"} /> Home
                </Link>
              </li>
              <li
                className={
                  splitLocation[1] === "about"
                    ? " dark:text-slate-50  tracking-widest ml-2  p-3"
                    : " dark:text-slate-300/75 text-zinc-700/80 p-3 hover:tracking-wider hover:duration-300 hover:ml-2"
                }
              >
                <Link
                  to={"/about"}
                  onClick={() => {
                    setClose(true);
                  }}
                  className="flex items-center font-medium"
                >
                  <PersonIcon className=" mr-2" fontSize={"small"} /> About
                </Link>
              </li>

              <li
                className={
                  splitLocation[1] === "portfolio"
                    ? " dark:text-slate-50 ml-2  p-3"
                    : " dark:text-slate-300/75 text-zinc-700/80 p-3 hover:tracking-wider hover:duration-300 hover:ml-2"
                }
              >
                <Link
                  onClick={() => {
                    setClose(true);
                  }}
                  to={"/portfolio"}
                  className="flex items-center font-medium"
                >
                  <HomeRepairServiceRoundedIcon
                    className=" mr-2"
                    fontSize={"small"}
                  />{" "}
                  Portfolio
                </Link>
              </li>
              <li
                className={
                  splitLocation[1] === "contact"
                    ? " dark:text-slate-50  ml-2 p-3"
                    : " dark:text-slate-300/75 text-zinc-700/80 p-3 hover:tracking-wider hover:duration-300 hover:ml-2"
                }
              >
                <Link
                  onClick={() => {
                    setClose(true);
                  }}
                  to={"/contact"}
                  className="flex items-center font-medium"
                >
                  <EmailIcon className=" mr-2" fontSize={"small"} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className=" italic dark:text-slate-50 ml-2 text-sm translate-y-24">
            {" "}
            &copy; {new Date().getFullYear()}{" "}
            <p className=" text-sm ml-1 dark:text-slate-50 ">
              Coded by{" "}
              <a
                href="https://github.com/haya-alhosain"
                className="font-medium "
              >
                Haya
              </a>
              .
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbars;
