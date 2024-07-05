import Image from "next/image";
import backgroundImg from "../../public/home/book-bg.png";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-sm"
        src={backgroundImg}
        alt="Background Image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="z-10 flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <SparklesIcon className="w-12 h-12" />
          <p>Litloop</p>
        </div>
        <div>
          <Link
            className="bg-purple-700 text-white rounded-sm p-2 "
            href={"/store"}
          >
            Take me to the store
          </Link>
        </div>
      </div>
    </div>
  );
}
