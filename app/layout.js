import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatterBot",
  description: "ChatterBot: Your AI language companion. Powered by OpenAi, it enchances your conversations, content creation, and more.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
    </ClerkProvider>
  );
}
