import microblading from "../../assets/microblading2.png";
import microshading from "../../assets/microshading.jpg";
import henna from "../../assets/henna2.jpg";

function Service() {
  return (
    <div className="w-screen h-auto md:mt-[10rem] " data-aos="fade-right">
      <div
        className="w-[100%] p-4 
      text-center text-[1.4em] text-pink-500 mb-6 md:text-[2.5em] "
      >
        <h2 className="dark:text-white ">Nossos serviços</h2>
      </div>

      <div className=" md:flex md:justify-between  md:p-0 md:mt-[5rem]  md:w-[90%] md:m-auto ">
        <div
          className="w-[80%] h-[28rem] m-auto  bg-white md:bg-primary rounded-sm
      text-center p-2 md:p-4 "
        >
          <h3 className="text-fontColor md:text-[1.2em]">Microshading</h3>

          <p className="mt-4 text-sm md:text-justify ">
            Microshading é uma nova técnica de pigmentação manual de
            sobrancelhas. Essa técnica pode ser utilizada sozinha ou em conjunto
            de microblading para atingir um resultado ainda mais natural e
            preenchido.
          </p>

          <div
            className="w-[70%] h-[15.5rem]  mt-8 m-auto rounded-sm 
          bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${microshading})` }}
          ></div>
        </div>

        <div
          className="w-[80%] h-[28rem] m-auto mt-10 md:m-0 bg-white md:bg-primary rounded-sm
      text-center p-2 md:p-4 md:ml-8 md:mr-8"
        >
          <h3 className="text-fontColor md:text-[1.2em]">Microblading</h3>

          <p className="mt-4 text-sm md:text-justify">
            O microblading é um tipo de design de sobrancelha onde são
            desenhados fios bem finos que se misturam aos fios naturais.
          </p>

          <div
            className="w-[70%] h-[18rem] mt-8 m-auto rounded-sm 
          bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${microblading})` }}
          ></div>
        </div>

        <div
          className="w-[80%] h-[28rem] m-auto mt-10 md:m-0 bg-white md:bg-primary rounded-sm
      text-center p-2 md:p-4 "
        >
          <h3 className="text-fontColor md:text-[1.2em]">
            Pigmentação com Henna
          </h3>

          <p className="mt-4 text-sm md:text-justify">
            consiste na pintura das sobrancelhas com pigmentos naturais
            extraídos da semente de uma planta para dar cor sobre a área
            desenhada na pele e nos pelos, melhorando o formato e harmonizando o
            rosto.
          </p>

          <div
            className="w-[70%] h-[15.5rem] mt-8 m-auto rounded-sm 
          bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${henna})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
