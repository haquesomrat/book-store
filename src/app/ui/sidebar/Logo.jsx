import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center text-white leading-none">
      <SparklesIcon className="w-12 h-12" />
      <p className="text-[28px]">Litloop</p>
    </div>
  );
};

export default Logo;
