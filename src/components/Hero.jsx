import React from "react";
import img from "../assets/img/heroNew.png";
import Button from "../layouts/Button";

const Hero = () => {
  return (
    <div className=" h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      {/* content section  */}
      <div className=" w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className=" text-4xl lg:text-7xl font-bold leading-tight">
          Pizzas <span className="text-yellow-500">Autênticas</span> e Sabores
          Inesquecíveis
        </h1>
        <p className=" text-sm lg:text-base">
          Desfrute de nossas Pizzas Autênticas, feitas com ingredientes frescos
          e técnicas tradicionais. Cada mordida oferece Sabores Inesquecíveis
          que vão deixar uma impressão duradoura.
        </p>
        <Button title="Consulte Mais informação" />
      </div>

      {/* img section  */}
      <div className=" mt-14">
        <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
