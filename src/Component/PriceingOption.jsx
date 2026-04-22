import React, { use } from "react";
import Cart from "./Cart";

const PriceingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);

  return (
    <div>
      <h2 className="text-5xl">Get our membership</h2>
      <div className="grid md:grid-cols-3 p-4 gap-4">
        {pricingData.map((pricing) => (
          <Cart key={pricing.id} pricing={pricing}></Cart>
        ))}
      </div>

      {/* <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Your Shopping Cart (1 Item)</h2>

        <div class="flex items-center justify-between py-3 border-b border-gray-200">

            <div class="flex-1 min-w-0 pr-4">
                <p class="text-base font-medium text-gray-900">
                    Organic Cotton T-Shirt - Blue
                </p>
                <p class="text-sm text-gray-500">
                    (ID: PROD-201)
                </p>
            </div>

            <div class="w-24 text-center">
                <label for="qty" class="sr-only">Quantity</label>
                <input
                    type="number"
                    id="qty"
                    value="2"
                    min="1"
                    class="w-full text-center p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
            </div>

            <div class="w-24 text-right">
                <p class="text-lg font-bold text-gray-800">$50.00</p>
            </div>
            
        </div>
        <div class="flex justify-end pt-4">
            <div class="text-right">
                <p class="text-xl font-semibold text-gray-800">
                    Subtotal: <span class="font-bold text-indigo-600">$50.00</span>
                </p>
            </div>
        </div>

    </div> */}
    </div>
  );
};

export default PriceingOption;
