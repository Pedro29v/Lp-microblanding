import bgIcon1 from "../../assets/instagram.png";
import bgIcon2 from "../../assets/facebook.png";
import bgIcon3 from "../../assets/tiktok.png";
import logo from "../../assets/newLogo.png";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div className="w-screen h-[90vh] text-center  md:flex md:justify-between ">
      <div className="p-6 md:p-2 mt-[5rem] md:mt-[8rem] md:w-[55%] md:ml-10">
        <h2 className="text-[1.5em] md:text-[3em]  text-black ">
          Quer exibir{" "}
          <strong
            className="bg-gradient-to-r from-purple-500
           via-pink-500 to-red-500 text-transparent bg-clip-text 
           dark:bg-gradient-to-r dark:from-purple-300
           dark:via-pink-300 dark:to-red-300"
          >
            sobrancelhas
          </strong>{" "}
          perfeitas e realçar sua beleza com naturalidade?{" "}
        </h2>

        <p className="mt-4 text-fontColor md:text-[1.2em] ">
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

        <div className="mt-6 md:mt-[4rem] w-[100%] h-auto flex justify-center ">
          <a
            href="https://www.instagram.com/kariandris05/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] bg-contain bg-no-repeat mr-4 transition hover:transform hover:scale-125"
              style={{ backgroundImage: `url(${bgIcon1})` }}
            ></div>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100080923590677"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] bg-contain bg-no-repeat mr-4 transition hover:transform hover:scale-125"
              style={{ backgroundImage: `url(${bgIcon2})` }}
            ></div>
          </a>
          <a
            href="https://www.tiktok.com/@kariyanez05"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] bg-contain bg-no-repeat transition hover:transform hover:scale-125"
              style={{ backgroundImage: `url(${bgIcon3})` }}
            ></div>
          </a>
        </div>
      </div>

      <div
        className=" w-[47%] m-auto h-[19rem] bg-contain flex items-center  
        bg-no-repeat mt-8 md:mt-[5rem] md:w-[31.7%] md:h-[22.5rem] md:mr-8 "
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </div>
  );
}

export default Banner;
