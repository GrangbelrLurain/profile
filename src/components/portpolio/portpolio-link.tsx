import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithoutRef, HTMLAttributeAnchorTarget } from "react";

type TPortpolioLink = ComponentPropsWithoutRef<"figure"> & {
  title: string;
  href: string;
  src: string;
  particle: number;
  target: HTMLAttributeAnchorTarget;
};

const PortpolioLink = ({
  title,
  src,
  href,
  particle,
  className,
  target,
  ...props
}: TPortpolioLink) => {
  return (
    <Link href={href} target={target}>
      <figure
        {...props}
        className={clsx("relative overflow-hidden", className)}
      >
        <p className="absolute w-full h-full z-10 bg-black flex justify-center items-center opacity-0 hover:opacity-100 bg-opacity-50 transition-opacity flex-col">
          <span className="font-logo_font whitespace-nowrap">
            Project {title}
          </span>
          <span>Participation {particle}%</span>
        </p>
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${href}의 썸네일 이미지 입니다.`}
            className="object-cover absolute w-full h-full"
          />
        }
      </figure>
    </Link>
  );
};

export default PortpolioLink;
