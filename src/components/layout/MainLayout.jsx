import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/common/Footer";


export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
