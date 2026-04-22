import React from "react";
import Feature from "./Feature";
import DasyCard from "./DasyCard";

const Cart = ({ pricing }) => {
  // console.log({ pricing });
  const { name, price_usd, description, features } = pricing;
  return (
    <DasyCard
      name={name}
      price_usd={price_usd}
      description={description}
      features={features}
    ></DasyCard>
    // <div className="bg-amber-950 flex flex-col rounded-3xl p-3">
    //   <div>
    //     <h1 className="text-7xl">{name}</h1>
    //     <h4 className="text-3xl">{price_usd}</h4>
    //   </div>
    //   {/* card body */}
    //   <div className="bg-amber-400 p-4 rounded-3xl mt-10">
    //     <p>{description}</p>
    //     {features.map((feature, index) => (
    //       <Feature key={index} feature={feature}></Feature>
    //     ))}
    //   </div>
    //   <button class="btn w-full">Subscribe</button>
    // </div>
  );
};

export default Cart;
