import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };

  return (
    <div
      className="shadow-xl shadow-bottom md:shadow-none w-screen h-auto flex flex-col md:flex-row 
    md:justify-between  text-fontColor  "
    >
      <div className=" w-screen h-12 flex  justify-between py-3 px-4 md:w-[30rem] md:px-1  ">
        <a href="#Banner">
          <h1
            className="text-xl  ml-2 md:text-2xl md:ml-16 
        md:mt-6  lg:ml-20 text-pink-500 dark:text-white "
          >
            Karina´s Perfect Brows
          </h1>
        </a>

        <button onClick={menu} className=" md:hidden ">
          {open ? (
            <FontAwesomeIcon icon={faX} className="mt-[0.4rem] mr-3  " />
          ) : (
            <FontAwesomeIcon icon={faBars} className="mt-[0.4rem] mr-3  " />
          )}
        </button>
      </div>

      <div className="hidden  md:flex md:w-[45rem] md:pt-7 md:font-bold md:justify-between md:px-4 md:text-[1em] md:mt-4 md:mr-4 lg:mr-8 lg-pt-7  ">
        <a href="#about">
          <p className="md:ml-16 hover:text-auxiliar transition hover:transform hover:scale-125">
            HOME
          </p>
        </a>

        <a href="#skills">
          <p className=" hover:text-auxiliar transition hover:transform hover:scale-125 ">
            SERVIÇOS
          </p>
        </a>

        <a href="#resume">
          <p className=" hover:text-auxiliar transition hover:transform hover:scale-125">
            SOBRE NÓS
          </p>
        </a>

        <a href="#work">
          <p className=" hover:text-auxiliar transition hover:transform hover:scale-125">
            GALERIA
          </p>
        </a>

        <a href="#contact">
          <p className="md:mr-12 hover:text-auxiliar transition hover:transform hover:scale-125">
            CONTATO
          </p>
        </a>
      </div>

      {open && (
        <div className="w-screen h-auto text-fontColor bg-secondary font-bold text-center p-2 top-12 fixed  ">
          <a href="#about">
            <p className="mt-3">HOME</p>
          </a>

          <a href="#skills">
            <p className="mt-3">SERVIÇOS</p>
          </a>

          <a href="#resume">
            <p className="mt-3">SOBRE NÓS</p>{" "}
          </a>

          <a href="#work">
            <p className="mt-3">GALERIA</p>
          </a>

          <a href="#contact">
            <p className="mt-3">CONTATO</p>
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;
