"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useScroll from "@/lib/client/hook/use-scroll";
import Empty from "../box/empty";

type THeaderProps = ComponentPropsWithoutRef<"header">;

const Header = ({ className, ...props }: THeaderProps) => {
  const [mToggle, setToggle] = useState(true);
  useScroll(({ y, directionY }) => {
    const isToggle = y <= 0 || directionY > 0;
    setToggle(isToggle);
  });

  return (
    <header
      className={clsx(
        "flex items-center py-4 px-16 gap-2 sticky top-0 bg-base-100 transition-all",
        mToggle ? "bg-opacity-100" : "bg-opacity-0",
        className
      )}
      {...props}
    >
      <figure className="relative w-8 h-8">
        <Image src="/logo.svg" alt="옥탑방 고양이 로고" layout="fill" />
      </figure>
      <h1 className="font-logo_font">RooftopCAT</h1>
      <ul
        className={clsx(
          "flex gap-2 transition-all",
          mToggle ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <li>포트폴리오</li>
        <li>팀 소개</li>
        <li>문의하기</li>
      </ul>
    </header>
  );
};

export default Header;
