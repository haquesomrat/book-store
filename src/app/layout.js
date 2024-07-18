import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Litloop",
  description: "An Online Bookstore",
};

export default function RootLayout({ children }) {
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
