import facebookImg from "../assets/facebook.svg";
import githubImg from "../assets/github.svg";
import instagramImg from "../assets/instagram.svg";
import codeImg from "../assets/code.svg";
import mailImg from "../assets/mail.svg";
import shareImg from "../assets/share.svg";

function Social() {
  return (
    <div className="h-80 w-80 rounded-lg py-3  gap-3 flex flex-col">
      <div className="flex gap-3  h-[35%] ">
        <div className="bg-blue-950 w-[60%] rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-105">
          <img
            src={mailImg}
            alt="mail_svg"
            className="w-10 shadow-xl"
          />
          <p className="text-white text-[10px] font-bold">
            Email: <br />
            <span>
              <a
                href="mailto:jorgealbertolejim@gmail.com "
                className="font-normal"
              >
                jorgealbertolejim@gmail.com
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
        <div className="  w-[35%]  bg-blue-600 rounded-2xl p-3 relative  transform transition-transform duration-300 hover:scale-105">
          <img
            src={facebookImg}
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
      </div>
      <div className="bg-gray-900 w-full  h-[35%]  rounded-2xl flex gap-2 flex-col relative p-3  transform transition-transform duration-300 hover:scale-105">
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
            src={instagramImg}
            alt="mail_svg"
            className="w-10 shadow-xl"
          />
          <p className="text-white text-[10px] font-bold sh">
            Email: <br />
            <span>
              <a
                href="mailto:jorgealbertolejim@gmail.com "
                className="font-normal"
              >
                jorgealbertolejim@gmail.com
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
      </div>
    </div>
  );
}

export default Social;
