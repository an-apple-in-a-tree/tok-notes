"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { Roboto } from "next/font/google";
import { Lato } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Footer() {
    return (
      <footer className="flex items-center bg-gradient-to-t from-[#DBFF00] to-[#00FF47] justify-center p-4">
        <p className={`{lato.className} font-semibold text-lg text-center text-[#030026]`}>
          Created by Gloria Li @2024
        </p>
      </footer>
    );
  }
  