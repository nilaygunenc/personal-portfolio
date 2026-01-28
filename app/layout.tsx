import Footer from "@/components/footer";
import "../styles/globals.css";


export const metadata = {
  title: "Nilay | Portfolio",
  description: "Computer Engineering Student Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
