import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Divina Pizza.</h1>
          <p className=" text-sm">
          Venha experimentar nossas combinações únicas e garantir uma
          experiência gastronômica que vai além do comum.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="speciality"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Especialidade
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Sobre
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Cardápio
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Comentário
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="speciality"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Especialidade
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Cardápio
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0"> Contate-nos</h1>
          <div className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            divinapizza.@gmail.co
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            (11) 98765-4321
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              Midia Social
            </Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
