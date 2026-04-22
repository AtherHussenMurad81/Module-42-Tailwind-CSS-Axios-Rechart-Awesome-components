import { Feather } from "lucide";
import React from "react";
import Feature from "./Feature";

const DasyCard = ({ name, price_usd, description, features }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-sm">
      <div class="card-body">
        <span class="badge badge-xs badge-warning">Most Popular</span>
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold">{name}</h2>
          <span class="text-xl">{price_usd}</span>
        </div>
        <ul class="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature) => (
            <Feature feature={feature}></Feature>
          ))}
        </ul>
        <div class="mt-6">
          <button class="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default DasyCard;
