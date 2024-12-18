import "./App.css";
import Social from "./hooks/Social";
import locationImg from "./assets/location.svg";
import codeImg from "./assets/code.svg";
import birthdayImg from "./assets/birthday.svg";
import faceImg from "./assets/face.png";
import { useState } from "react";
import AboutMe from "./hooks/AboutMe";
import Projects from "./hooks/Projects";
import Tools from "./hooks/Tools";
function App() {
  const [option, setOption] = useState(1);
  const [imageAnimate, setImageAnimate] = useState(false);
  function optionWindow(value) {
    switch (value) {
      case 1:
        return <Projects />;
      case 2:
        return <AboutMe />;
      case 3:
        return <Social />;
      case 4:
        return <Tools />;
      default:
        break;
    }
  }
  return (
    <div className="bgImage bg-slate-900 ">
      <div
        onMouseLeave={() => setImageAnimate(false)}
        onMouseEnter={() => setImageAnimate(true)}
        className=" transform transition-transform duration-300 hover:scale-105 w-72 md:w-80  h-52 md:h-80 relative bg-gray-700 bg-opacity-50 rounded-3xl shadow flex justify-center items-center flex-col"
      >
        <div
          className={` ${
            imageAnimate ? " border-green-600" : ""
          }  bg-yellow-500 h-20 w-20 md:h-32 md:w-32 rounded-3xl absolute top-[-40px] md:top-[-70px]  z-20  md:left-[90px] border-[3px] transition-transform anima   `}
        >
          <img
            src={faceImg}
            alt="myFace"
            className={`overflow-hidden bg-cover back-content ${
              imageAnimate ? "animate-bounce" : ""
            } `}
          />
          <div className="w-4 md:w-6 h-4 md:h-6 absolute right-[-5px] top-[-5px] bg-green-700 rounded-full border-2 "></div>
        </div>
        <h1 className="text-white font-bold  md:text-xl">Muhammad Aqsam</h1>
        <a
          href="mailto:jorgealbertolejim@gmail.com"
          className="text-sm text-gray-300"
          target="_black"
        >
          @jorgealbertolejim
        </a>
        <div className="flex  flex-col gap-2  w-full px-10 mt-5">
          <div className="flex gap-2 text-gray-400 text-[10px] md:text-sm">
            <img
              className="w-3 md:w-5"
              src={locationImg}
              alt="location_svg"
            />{" "}
            Tijuana BC
          </div>{" "}
          <div className="flex gap-2 text-gray-400 text-[10px] md:text-sm ">
            <img
              className="w-3 md:w-5"
              src={codeImg}
              alt="location_svg"
            />{" "}
            full stack | front and back
          </div>
          <div className="flex gap-2 text-gray-500 text-[10px] md:text-sm ">
            <img
              src={birthdayImg}
              className="w-3 md:w-5"
              alt="birthday_svg"
            />
            10 de Abril 1999
          </div>
        </div>
        <div className="flex absolute bottom-5 text-white justify-around  w-full text-[10px] md:text-sm">
          <button
            className={`${
              option == 1
                ? "text-white border-b border-yellow-500"
                : "text-gray-500"
            }`}
            onClick={() => setOption(1)}
          >
            Proyectos
          </button>
          <button
            onClick={() => setOption(2)}
            className={`${
              option == 2
                ? "text-white border-b border-yellow-500"
                : "text-gray-500"
            }`}
          >
            Sobre mi
          </button>
          <button
            onClick={() => setOption(4)}
            className={`${
              option == 4
                ? "text-white border-b border-yellow-500"
                : "text-gray-500"
            }`}
          >
            Herramientas
          </button>
          <button
            onClick={() => setOption(3)}
            className={`${
              option == 3
                ? "text-white border-b border-yellow-500"
                : "text-gray-500"
            }`}
          >
            Social
          </button>
        </div>
      </div>
      {optionWindow(option)}
    </div>
  );
}

export default App;
