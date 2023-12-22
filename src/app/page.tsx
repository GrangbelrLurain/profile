"use client";
import Empty from "@/components/box/empty";
import Container from "@/components/container";
import useMarkdowns from "@/lib/client/hook/use-markdowns";
import { portfolio } from "@/lib/client/portfolio";
import Link from "next/link";

export default function Home() {
  const { markdowns } = useMarkdowns();

  return (
    <div className="flex flex-col gap-5 py-5">
      {/* <Container>
        <button className="btn font-bold">웹 개발 의뢰하기</button>
      </Container> */}
      <Container className="w-full">
        <h2 className="font-logo_font">PORTFOLIO</h2>
        <article className="grid grid-cols-4 gap-5">
          {Object.values(portfolio).map(({ href, thumbnail }, index) => {
            if (index > 3) {
              return <Empty key={href} />;
            }
            return (
              <Link key={href} href={href} target="_blank">
                <div className="aspect-square rounded-md shrink relative overflow-hidden">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumbnail}
                      alt={`${href} 페이지의 썸네일입니다.`}
                      className="object-cover absolute w-full h-full"
                    />
                  }
                </div>
              </Link>
            );
          })}
        </article>
      </Container>
      <Container className="w-full">
        <h2 className="font-logo_font">intro</h2>
        <p>안녕하세요, 개발팀 옥탑방 고양이입니다.</p>
      </Container>
      {/* <Container className="w-full">
        <h2></h2>
        <article className="grid grid-cols-3 gap-5">
          <div className="aspect-square rounded-md p-5 bg-gray-500 bg-opacity-50">
            <h3 className="font-logo_font text-xl">basic plan</h3>
            <p>소개 페이지 제작 플랜입니다.</p>
            <p className="text-2xl font-black">
              {Number(100000).toLocaleString()} 원
            </p>
          </div>
        </article>
        <article>
          <button className="btn">문의하기</button>
        </article>
      </Container> */}
      <Container className="w-full">
        <h2 className="font-logo_font">blog</h2>
        <article className="flex flex-col gap-2">
          {markdowns?.map(({ name, sha }) => {
            return (
              <Link key={sha} href={`/blog/post?postUrl=${name}`}>
                <p className="px-5 py-2 rounded-md bg-gray-500 bg-opacity-50">
                  {name}
                </p>
              </Link>
            );
          })}
        </article>
      </Container>
    </div>
  );
}
