import bgIcon1 from "../../assets/instagram.png";
import bgIcon2 from "../../assets/facebook.png";
import bgIcon3 from "../../assets/tiktok.png";
import logo from "../../assets/logo2.png";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div className="w-screen h-[70vh] text-center bg-green-400 md:flex ">
      <div className="p-6 mt-[5rem] bg-yellow-400">
        <h2 className="text-[1.5em]  text-black ">
          Quer exibir{" "}
          <strong
            className="bg-gradient-to-r from-purple-500
           via-pink-500 to-red-500 text-transparent bg-clip-text"
          >
            sobrancelhas
          </strong>{" "}
          perfeitas e realçar sua beleza com naturalidade?{" "}
        </h2>

        <p className="mt-4 text-fontColor">
          Descubra o poder do microblading com nossos serviços especializados.
        </p>

        <div className=" w-[90%]  m-auto  ">
          <ul className=" list-inside mt-2  ">
            <li>
              <CheckCircleIcon className="inline-block w-5 h-5 text-green-500 mr-2" />
              Microshading
            </li>
            <li>
              <CheckCircleIcon className="inline-block w-5 h-5 text-green-500 mr-2" />
              Microblading
            </li>
          </ul>
        </div>

        <div className="mt-6 w-[100%] h-auto flex justify-center ">
          <a
            href="https://www.instagram.com/kariandris05/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] bg-contain bg-no-repeat mr-4"
              style={{ backgroundImage: `url(${bgIcon1})` }}
            ></div>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100080923590677"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] bg-contain bg-no-repeat mr-4"
              style={{ backgroundImage: `url(${bgIcon2})` }}
            ></div>
          </a>
          <a
            href="https://www.tiktok.com/@kariyanez05"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${bgIcon3})` }}
            ></div>
          </a>
        </div>
      </div>

      <div
        className=" w-[100%] h-[19rem] bg-contain bg-red-500
        bg-no-repeat mt-8 "
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </div>
  );
}

export default Banner;
