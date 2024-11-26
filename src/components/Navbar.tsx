"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="#">
          <MenuItem setActive={setActive} active={active} item="home">
            Home
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col text-sm">
            <HoveredLink href="/courses">Basic music</HoveredLink>
            <HoveredLink href="/courses">Advance composition</HoveredLink>
            <HoveredLink href="/courses">Song writing</HoveredLink>
            <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact us">
            Contact Us
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;

