import Container from "@/components/container";
import PortpolioLink from "@/components/portpolio/portpolio-link";
import { portfolio } from "@/lib/client/portfolio";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Container className="grid sm:grid-cols-2 grid-cols-1 gap-5 py-5 px-5">
      {Object.entries(portfolio).map(
        ([title, { href, thumbnail, particle }]) => {
          return (
            <PortpolioLink
              key={href}
              href={href}
              title={title}
              particle={particle}
              src={thumbnail}
              target="_blank"
              className="aspect-video rounded-lg"
            />
          );
        }
      )}
    </Container>
  );
};

export default Portfolio;
