import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MERN Stack Developer | Full Stack Precision",
  description: "Crafting scalable web applications with the MERN stack. Engineered for performance, designed for clarity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
