"use client";

import { StoreContext } from "@/app/context";
import React, { useContext } from "react";

const CartPage = () => {
  const { cartData } = useContext(StoreContext);
  return (
    <div>This is Cart page & the no of cart items are {cartData.length}</div>
  );
};

export default CartPage;
