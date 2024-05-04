import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../icons/logo";
export default function NavBar() {
  return (
    <div className="w-full bg-[#15132a] text-black">
      <Navbar isBordered>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Jaswinder Singh</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="projects" aria-current="page">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="learning" aria-current="page">
              Learning
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="help">
              Help
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
