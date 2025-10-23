import type { Metadata } from "next";
import { Inter, Montserrat, Raleway, Roboto, Noto_Sans, Ubuntu } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/themeContext";
// import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const mot = Montserrat({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const nota = Noto_Sans({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const rale = Raleway({ subsets: ["latin"] , weight:["100" , "300" , "400" , "500" , "700" , "900"]})
const ubuntu = Ubuntu({ subsets: ["latin"] , weight:[ "300" , "400" , "500" , "700" ]})

export const metadata: Metadata = {
  title: "Munkhbat Ganbat : Portfolio",
  description: "m final-year CSE studenI’m Ganbat Munkhbat, a passionate software engineer who graduated from the Mongolian University of Science and Technology (MUST) in June 2025 with a degree in Software Engineering. With one year of experience as a senior developer, I have a strong background in full-stack development, software architecture, and data analysis. I enjoy solving complex problems, building scalable systems, and continuously learning new technologies. My technical expertise includes PHP, Node.js, React, Python, SQL, and I’m particularly interested in creating efficient, user-centered applications. Outside of coding, I value teamwork, leadership, and creativity — and I love music as a form of inspiration.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body
      //  className={roboto.className}
      //  className={Mot.className}
      //  className={ubuntu.className}
       className={`${rale.className}  `}
      //  className={nota.className}
       > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
