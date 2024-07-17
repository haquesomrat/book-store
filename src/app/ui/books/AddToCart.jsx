import React from "react";

const AddToCart = () => {
  return (
    <div className="flex justify-around mt-5 border-t-2 p-1">
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        To Buy
      </button>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        To Rent
      </button>
    </div>
  );
};

export default AddToCart;
