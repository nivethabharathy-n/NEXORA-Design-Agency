import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Nexora Studio | Creative Agency",
  description:
    "Nexora Studio is a creative agency for content production, branding, creative consulting and social media marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${space.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}