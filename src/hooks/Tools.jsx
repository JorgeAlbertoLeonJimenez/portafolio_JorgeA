import mysqlImg from "../assets/mysql.svg";
import mysqlIconImg from "../assets/mysql-icon.svg";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import expressImg from "../assets/express.svg";
import figmaImg from "../assets/figma.svg";
import gitImg from "../assets/git.svg";
import githubImg from "../assets/github.svg";
import jwtImg from "../assets/jwt.svg";
import reactImg from "../assets/react.svg";
import tailwindImg from "../assets/tailwind.svg";
import nodeImg from "../assets/node.svg";
import keyImg from "../assets/key.svg";
import arrowDownImg from "../assets/arrow-down.svg";
import jsImg from "../assets/js.svg";
import { useState } from "react";
function Tools() {
  const [viewLibrary, setViewLibrary] = useState(false);
  return (
    <div className="h-80 w-80  rounded-lg py-3 text-white gap-3 flex flex-col">
      <div className="flex flex-col gap-2 font-medium">
        <div className=" rounded-2xl  flex   gap-3 flex-row-reverse h-9  md:h-14">
          <div className="flex text-gray-700  bg-white  p-1 w-[60%] rounded-2xl items-center gap-3">
            <img
              src={reactImg}
              alt="react_image"
              className="w-8"
            />
            <p>React</p>
          </div>
          <div className="flex  w-[45%] text-black bg-white rounded-2xl items-center gap-2 p-2">
            <img
              src={tailwindImg}
              alt="tailwind_image"
              className="w-8"
            />
            <p>Tailwind</p>
          </div>
        </div>
        <div className=" rounded-2xl  flex   gap-3 h-10 md:h-14 ">
          <div className="flex text-gray-700 bg-white  p-1 w-[60%] rounded-2xl items-center gap-3">
            <img
              src={jsImg}
              alt="js_image"
              className="w-8"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex   w-[45%] bg-blue-500 rounded-2xl items-center gap-2 p-2">
            <img
              src={mysqlImg}
              alt="js_image"
              className="w-8"
            />
            <p>Mysql</p>
          </div>
        </div>
        <div className=" rounded-2xl flex   gap-3 h-10 md:h-14 flex-row-reverse ">
          <div className="flex  bg-blue-800  p-1 w-[60%] rounded-2xl items-center gap-3">
            <img
              src={cssImg}
              alt="css_image"
              className="w-8"
            />
            <p>Css</p>
          </div>
          <div className="flex  items-center w-[45%] bg-orange-500 rounded-2xl gap-2 p-1">
            <img
              src={htmlImg}
              alt="htmlImg_image"
              className="w-8"
            />
            <p>Html</p>
          </div>
        </div>
        <div className=" rounded-2xl flex h-10 md:h-14  gap-3 relative ">
          <div
            className={`flex  items-center w-full  ${
              viewLibrary ? "" : "animate-bounce"
            } cursor-pointer bg-green-700 rounded-2xl gap-2 pl-4 relative  transform transition-transform duration-300 hover:scale-105 `}
            onClick={() => setViewLibrary(!viewLibrary)}
          >
            <img
              src={nodeImg}
              alt="node_image"
              className="w-8"
            />
            <p>Node</p>
            <img
              src={arrowDownImg}
              alt="arrow"
              className={`absolute w-5 right-3 ${
                !viewLibrary ? " md:rotate-90" : "rotate-90 md:rotate-180"
              }`}
            />
          </div>

          {viewLibrary && (
            <div className="flex gap-3 flex-col absolute  right-[-320px] top-[-70px] w-[300px] ">
              <div className=" flex gap-3 h-10 md:h-14">
                <div className=" bg-white flex  p-3 w-[60%] rounded-2xl items-center gap-3">
                  <img
                    src={expressImg}
                    alt="express_image"
                    className="w-14"
                  />
                </div>
                <div className=" flex  bg-black  p-3 w-[40%] border rounded-2xl items-center gap-3">
                  <img
                    src={jwtImg}
                    alt="express_image"
                    className="w-10"
                  />
                  <p className="font-thin  ">JWT</p>
                </div>
              </div>
              <div className=" flex gap-3 flex-row-reverse h-10 md:h-14">
                <div className=" bg-white text-gray-700 font-thin flex p-3 w-[60%] rounded-2xl justify-center md:justify-start items-center gap-3">
                  <img
                    src={mysqlIconImg}
                    alt="mysql_image"
                    className="w-8"
                  />
                  <p className="hidden md:flex">Myql2</p>
                </div>
                <div className=" flex  bg-black  md:p-3 p-1 w-[40%] border rounded-2xl items-center gap-3">
                  <p className="font-thin md:text-[12px] text-[10px]">
                    MULTRER
                  </p>
                </div>
              </div>
              <div className=" flex gap-3 h-10 md:h-14">
                <div className=" bg-white text-gray-700 font-thin flex  p-3 w-full rounded-2xl items-center gap-3">
                  <img
                    src={keyImg}
                    alt="mysql_image"
                    className="w-8"
                  />
                  <p>bcrypt</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" rounded-2xl flex   gap-3  h-10 md:h-14">
          <div className="flex  bg-white text-black  p-1 w-[60%] rounded-2xl items-center gap-3">
            <img
              src={gitImg}
              alt="git_image"
              className="w-8"
            />
            <p>Git</p>
          </div>
          <div className="flex  items-center w-[45%] bg-black border rounded-2xl gap-2 p-1">
            <img
              src={githubImg}
              alt="github_image"
              className="w-8"
            />
            <p>Github</p>
          </div>
        </div>
        <div className=" rounded-2xl flex h-10 md:h-14  gap-3  ">
          <div className="flex  bg-white text-black  p-1 w-full rounded-2xl items-center gap-3">
            <img
              src={figmaImg}
              alt="figma_image"
              className="w-8"
            />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
