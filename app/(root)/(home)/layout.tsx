import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="font-gilroy min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
