import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./provider";

import { dbConnect } from "@/services/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Litloop",
  description: "An Online Bookstore",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer />
        </body>
      </html>
    </StoreProvider>
  );
}
