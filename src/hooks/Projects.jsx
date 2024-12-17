import githubImg from "../assets/github.svg";
import codeImg from "../assets/code.svg";
import shareImg from "../assets/share.svg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import "../App.css";
function Social() {
  return (
    <div className="h-80 w-80 rounded-lg py-3  gap-3 flex flex-col">
      
      <div className="flex gap-3 flex-row-reverse  h-[35%] ">
        <a
          href=""
          className="min-h-[100px] w-[60%] bg-blue-950 bg- rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={project1}
            alt="image_project1"
            className="w-[50%] absolute right-0 bottom-0 rounded"
          />
          <p className="text-white text-[10px] font-bold">LandingPage</p>
          <button className="absolute top-3 right-3">
            <img
              className="w-6"
              src={shareImg}
              alt="share_"
            />
          </button>{" "}
        </a>
        <div className="  w-[35%]  bg-blue-600 rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-105">
          <p className="text-white text-[10px] font-bold">Movies</p>
          <img
            src={project2}
            alt="project2"
            className="absolute bottom-0 right-0 w-[70%] rounded"
          />
          <button className="absolute top-3 right-3">
            <img
              className="w-6 "
              src={shareImg}
              alt="share_"
            />
          </button>{" "}
        </div>
      </div>
      <div className="bg-gray-900 w-full  h-[35%] border  rounded-2xl flex gap-2 flex-col relative p-3  transform transition-transform duration-300 hover:scale-105">
        <img
          src={githubImg}
          alt="mail_svg"
          className="w-10  "
        />
        <p className="text-white text-[10px] font-bold ">
          GitHub <br />
          <span>
            <a
              href="mailto:jorgealbertolejim@gmail.com "
              className="font-normal"
            >
              jorgealbertolejim
            </a>
          </span>
        </p>
        <button className="absolute top-3 right-3">
          <img
            className="w-6"
            src={shareImg}
            alt="share_"
          />
        </button>{" "}
      </div>
      <div className="flex gap-3  h-[35%] ">
        <div className="  w-[35%]  flex flex-col gap-2 bg-blue-600 rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-110">
          <img
            src={codeImg}
            alt="mail_svg"
            className="w-10  "
          />
          <p className="text-white text-[10px] font-bold">
            Facebook <br />
            <span>
              <a
                href="mailto:jorgealbertolejim@gmail.com "
                className="font-normal"
              >
                jorgealbertolejim
              </a>
            </span>
          </p>
          <button className="absolute top-3 right-3">
            <img
              className="w-6"
              src={shareImg}
              alt="share_"
            />
          </button>{" "}
        </div>
        <div className="bg-pink-600 w-[60%] flex flex-col gap-2 rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-110">
          <img
            src={project3}
            alt="image_project1"
            className="w-[50%] absolute right-0 bottom-0 rounded"
          />
          <p className="text-white text-[10px] font-bold sh">Landing Page</p>
          <button className="absolute top-3 right-3">
            <img
              className="w-6"
              src={shareImg}
              alt="share_"
            />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Social;
