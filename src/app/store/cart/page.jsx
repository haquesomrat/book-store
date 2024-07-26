"use client";

import { StoreContext } from "@/app/context";
import OrderDetails from "@/app/ui/cart/OrderDetails";
import Payment from "@/app/ui/cart/Payment";
import React, { useContext } from "react";

const CartPage = () => {
  const { cartData } = useContext(StoreContext);
  return (
    <div className="p-2 flex flex-col w-full text-center">
      <h2 className="text-3xl">Welcome Mr. Injamul</h2>
      <p className="text-xl">
        Thanks a lot for your purchase. Please complete the checkout process by
        paying for your order
      </p>
      <div className="flex flex-wrap xs:flex-col sm:flex-col gap-4 mt-4">
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
