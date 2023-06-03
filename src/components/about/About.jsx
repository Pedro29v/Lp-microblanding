import picture from "../../assets/karina2.png";

function About() {
  return (
    <div
      className="w-[screen] h-auto mt-[5rem] p-2 md:mt-[10rem]"
      data-aos="flip-up"
    >
      <div
        className="w-[100%] p-4 
      text-center text-[1.4em] text-pink-500 mb-6 md:text-[2.5em] "
      >
        <h2>Sobre mim</h2>
      </div>

      <div className=" md:flex md:h-[30rem] md:mt-[5rem]">
        <div className=" w-[80%] m-auto text-justify   md:w-[50%] ">
          <p className="mb-4">
            Sou Karina Yanez, uma menina que desde muito jovem sempre sentiu uma
            paixão pelo mundo da beleza, e principalmente pelas sobrancelhas.
            Quem pensa que a sobrancelha tem um papel fundamental na nossa
            imagem e autoestima, a forma como a desenhamos pode corrigir um
            rosto muito comprido, largo ou redondo, proporcionando equilíbrio e
            harmonia, deixando-o mais perfeito e bonito.
          </p>

          <p>
            Me formei profissionalmente no Instituto Mix, onde fiz dois cursos:
            um de Design de Sobrancelhas, nesse curso adquiri conhecimentos em
            visagismo, uma técnica que ajuda a conhecer o tipo de sobrancelha
            adequado para o seu rosto; e o segundo curso de Microblading, que é
            uma técnica de maquiagem permanente que aprimora a forma, o volume e
            o tamanho das sobrancelhas, melhorando a simetria do rosto com uma
            aparência natural. Essa técnica tem uma duração de 8 a 12 meses.
          </p>
        </div>

        <div
          className="w-[70%] h-[18rem] mt-8 m-auto rounded-sm 
          bg-cover bg-no-repeat md:w-[30%] md:h-[30rem] md:mt-0 "
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
      </div>
    </div>
  );
}

export default About;
