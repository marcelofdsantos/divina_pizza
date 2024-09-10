import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

// Componente principal que exibe a seção de avaliações dos clientes
const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Avaliação do cliente
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cartão de avaliação do cliente 1 */}
        <ReviewCard img={img1} name="Sophia Azura" comment="Ótimo serviço!" />
        {/* Cartão de avaliação do cliente 2 */}
        <ReviewCard img={img2} name="John Deo" comment="Adorei a experiência!" />
        {/* Cartão de avaliação do cliente 3 */}
        <ReviewCard img={img3} name="Victoria Zoe" comment="Muito satisfatório!" />
      </div>
    </div>
  );
};

export default Review;