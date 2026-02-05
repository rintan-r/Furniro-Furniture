import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


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
