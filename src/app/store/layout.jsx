import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Litloop - Buy or Rent Books",
  description: "An Online Bookstore to Sell and Rent Used Books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen ">
      <Sidebar />
      <div className="flex flex-wrap p-2 justify-center w-full">{children}</div>
    </div>
  );
}
