"use client";

import Empty from "@/components/box/empty";
import Container from "@/components/container";
import PortpolioLink from "@/components/portpolio/portpolio-link";
import { portfolio } from "@/lib/client/portfolio";
import { useSearchParams } from "next/navigation";

const Portfolio = () => {
  const params = useSearchParams();
  const mIndex = params.get("index") !== null && Number(params.get("index"));
  if (typeof mIndex === "number" && !Number.isNaN(mIndex)) {
    const { description, href, particle, thumbnail, title, works } =
      portfolio[mIndex];
    return (
      <Container className="py-5 gap-5 flex flex-col">
        <h1 className="font-black font-logo_font text-2xl">{title}</h1>
        <PortpolioLink
          particle={particle}
          src={thumbnail}
          target="_blank"
          title={title}
          href={href}
          className="aspect-video rounded-lg max-w-4xl mx-auto w-full"
        />
        <p className="font-logo_font text-2xl">Discription</p>
        <p>{description}</p>
        <p className="font-logo_font text-2xl">Participation</p>
        <p>{particle}%</p>
        {works.length ? (
          <Empty>
            <p className="font-logo_font text-2xl">Works</p>
            <ul className="flex flex-col gap-2">
              {works.map((work, index) => {
                if (typeof work === "string") {
                  return <li key={index}>- {work}</li>;
                }
                return <Empty key={index} />;
              })}
            </ul>
          </Empty>
        ) : (
          <Empty />
        )}
      </Container>
    );
  }
  return (
    <Container className="grid sm:grid-cols-2 grid-cols-1 gap-5 py-5 px-5">
      {portfolio.map(({ title, href, thumbnail, particle }, index) => {
        return (
          <PortpolioLink
            key={href}
            href={{ query: { index } }}
            title={title}
            particle={particle}
            src={thumbnail}
            target="_self"
            className="aspect-video rounded-lg"
          />
        );
      })}
    </Container>
  );
};

export default Portfolio;
