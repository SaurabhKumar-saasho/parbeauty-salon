"use client";

import React from "react";
import { TopContactBar } from "@/components/layout/TopContactBar";
import { Navbar } from "@/components/layout/Navbar";

export const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <TopContactBar />
      <Navbar />
    </div>
  );
};

export default Header;
