import React from "react";

// Componente para exibir informações de um cartão de avaliação de cliente
const ReviewCard = ({ img, name, comment }) => {
  return (
    <div className="bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        {/* Texto de avaliação do cliente */}
        <p className="text-lightText">
          {comment}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        {/* Imagem do cliente */}
        <img className="rounded-full w-1/4" src={img} alt="img" />
        {/* Nome do cliente */}
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;