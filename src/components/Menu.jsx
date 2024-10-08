import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: "/menu1.jpg",
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 2,
      img: "/menu2.jpg",
      title: "Calabresa Picante",
      price: "18.99",
    },
    {
      id: 3,
      img: "/menu3.jpg",
      title: "Portuguesa Completa",
      price: "14.99",
    },
    {
      id: 4,
      img: "/menu4.jpg",
      title: "Havaiana Tropical",
      price: "15.99",
    },
    {
      id: 5,
      img: "/menu5.jpg",
      title: "Pepperoni Apimentado",
      price: "18.99",
    },
    {
      id: 6,
      img: "/menu6.jpg",
      title: "Picante Mexicana",
      price: "13.99",
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center pt-24">
        Nossa Especialidade
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
