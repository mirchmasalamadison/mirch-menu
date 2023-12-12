import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--pop",
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});


export const metadata = {
  title: "Mirch Masala",
  description: "Award winning Indian restaurant located in Madison, WI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
