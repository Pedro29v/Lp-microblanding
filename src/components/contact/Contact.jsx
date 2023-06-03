import ws from "../../assets/ws.png";
import copyright from "../../assets/copyright.png";

function Contact() {
  return (
    <footer className="w-[screen] h-[auto] bg-white   p-6 text-center md:mt-[10rem] md:p-[5rem] ">
      <p>
        Rua Tronca, 2102 - Rio Branco, Caxias do Sul - Rio Grande do Sul, Brasil
      </p>
      <p className="text-[2em] mt-4 ">(95) 8400-0942</p>

      <button className=" w-[15%] p-2 m-auto mt-4 flex justify-center">
        <a
          href="https://wa.me/5595984000942"
          target="_blank"
          rel="noreferrer"
          className="text-[2em]  "
        >
          <div
            className="w-[3rem] h-[3rem] md:w-[3rem] md:h-[3rem] bg-contain bg-no-repeat "
            style={{ backgroundImage: `url(${ws})` }}
          ></div>
        </a>
      </button>

      <hr className="w-[100%] mt-4"></hr>

      <p className="mt-4 flex justify-center md:mt-14">
        <img src={copyright} width="20px" height="20px" className="mr-2  " />
        Pedro Castillo 2023.{" "}
      </p>
    </footer>
  );
}

export default Contact;
