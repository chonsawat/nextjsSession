import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main className="h-screen flex justify-center items-center">{children}</main>
    </>
  );
}
