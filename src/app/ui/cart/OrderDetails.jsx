"use client";

import React, { useContext } from "react";
import { StoreContext } from "@/app/context";

const OrderDetails = () => {
  const { cartData } = useContext(StoreContext);

  const booksToBuy = cartData.filter((book) => {
    return book.type === "Buy";
  });

  const priceToBuy = booksToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0
  );

  const booksToRent = cartData.filter((book) => {
    return book.type === "Rent";
  });

  const priceToRent = booksToRent.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0
  );

  let deliveryCharge = 50;

  if (priceToBuy + priceToRent >= 1000) {
    deliveryCharge = 25;
  }
  if (priceToBuy + priceToRent > 2000) {
    deliveryCharge = 0;
  }

  let totalToPay = priceToBuy + priceToRent + deliveryCharge;

  return (
    <div className="w-full bg-white rounded px-8 pt-6 pb-8 mb-4 text-black">
      <h2 className="text-2xl pb-4">Order Details</h2>
      <div>
        {/* {cartData.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))} */}
      </div>
      {
        <ul>
          <li className="flex justify-between">
            <span>Buying {booksToBuy.length} books for</span>{" "}
            <span>{priceToBuy} BDT</span>
          </li>
          <li className="flex justify-between">
            <span>Renting {booksToRent.length} books for</span>{" "}
            <span>{priceToRent} BDT</span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charge</span> <span>{deliveryCharge} BDT</span>
          </li>
          <hr />
          <li className="flex justify-between">
            <span>Total to Pay</span> <span>{totalToPay} BDT</span>
          </li>
        </ul>
      }
    </div>
  );
};

export default OrderDetails;
