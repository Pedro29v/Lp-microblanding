import microblading from "../../assets/microblading2.png";
import microshading from "../../assets/microshading.jpg";

function Service() {
  return (
    <div className="w-screen h-[100vh] ">
      <div
        className="w-[100%] p-4 
      text-center text-[1.4em] text-pink-500 mb-6 "
      >
        <h2>Nossos serviços</h2>
      </div>

      <div>
        <div
          className="w-[80%] h-[28rem] m-auto bg-white rounded-sm
      text-center p-2 "
        >
          <h3 className="text-fontColor">Microblading</h3>

          <p className="mt-4 text-sm ">
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
          className="w-[80%] h-[28rem] m-auto mt-10 bg-white rounded-sm
      text-center p-2 "
        >
          <h3 className="text-fontColor">microshading</h3>

          <p className="mt-4 text-sm ">
            Microshading é uma nova técnica de pigmentação manual de
            sobrancelhas. Essa técnica pode ser utilizada sozinha ou em conjunto
            de microblading para atingir um resultado ainda mais natural e
            preenchido.
          </p>

          <div
            className="w-[70%] h-[15.5rem] mt-8 m-auto rounded-sm 
          bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${microshading})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
