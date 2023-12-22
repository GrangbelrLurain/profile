"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import useScroll from "@/lib/client/hook/use-scroll";
import Link from "next/link";

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
        "flex items-center py-4 lg:px-16 px-4 gap-2 sticky top-0 transition-all bg-base-100",
        mToggle ? "bg-opacity-100" : "bg-opacity-0",
        className
      )}
      {...props}
    >
      <Link href="/">
        <figure className="relative w-8 h-8 shrink-0">
          <Image src="/logo.svg" alt="옥탑방 고양이 로고" fill />
        </figure>
      </Link>
      <Link href="/">
        <h1 className="font-logo_font">RooftopCAT</h1>
      </Link>
      <ul
        className={clsx(
          "sm:flex gap-2 transition-all hidden",
          mToggle ? "opacity-100" : "sm:opacity-0 pointer-events-none"
        )}
      >
        <li>
          <Link href="/portfolio">포트폴리오</Link>
        </li>
        <li>팀 소개</li>
        <li>문의하기</li>
      </ul>
      <label
        htmlFor="main-drawer"
        className={clsx(
          "ml-auto cursor-pointer sm:hidden",
          !mToggle && "hidden"
        )}
      >
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
    </header>
  );
};

export default Header;
