import Container from "@/components/container";
import { portfolio } from "@/lib/client/portfolio";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Container className="grid sm:grid-cols-2 grid-cols-1 gap-5 py-5 px-5">
      {Object.values(portfolio).map(({ href, thumbnail }) => {
        return (
          <Link key={href} href={href}>
            <figure className="relative w-full aspect-video overflow-hidden rounded-xl">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnail}
                  alt={`${href} 페이지의 썸네일입니다.`}
                  className="object-cover absolute w-full h-full"
                />
              }
            </figure>
          </Link>
        );
      })}
    </Container>
  );
};

export default Portfolio;
