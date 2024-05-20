"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { Roboto } from "next/font/google";
import { Lato } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Navbar() {
  return (
    <NavigationMenu.Root
      className={`${lato.className} pt-8 pb-4`}
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#030026",
      }}
    >
      <NavigationMenu.List
        style={{
          color: "white",
          textShadow: "0 0 10px white",
          transition: "textShadow 0.3s ease-in-out",
          display: "flex",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textShadow = "0 0 20px white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textShadow = "0 0 10px white";
        }}
        className={`text-lg font-bold`}
      >
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-16"
            style={{ color: "white" }}
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-16"
            style={{ color: "white" }}
            href="../pages/knowledge"
          >
            Knowledge and the Knower
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-16"
            style={{ color: "white" }}
            href="../pages/politics"
          >
            Politics and Religion
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-16"
            style={{ color: "white" }}
            href="../pages/iks"
          >
            IKS
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
