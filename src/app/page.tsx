"use client";
import Empty from "@/components/box/empty";
import Container from "@/components/container";
import icons from "@/components/icons";
import PortpolioLink from "@/components/portpolio/portpolio-link";
import useMarkdowns from "@/lib/client/hook/use-markdowns";
import { portfolio } from "@/lib/client/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { markdowns } = useMarkdowns();

  const {
    Html,
    Css,
    TailwindCSS,
    Javascript,
    Typescript,
    React,
    NextJs,
    Prisma,
    Sql,
    MobX,
    ReactNative,
    Flutter,
  } = icons;

  return (
    <div className="flex flex-col gap-5 py-5">
      <Container className="w-full max-w-screen-xl px-5">
        <h2 className="font-logo_font">Profile</h2>
        <article className="flex gap-5 sm:flex-row flex-col items-center">
          <figure className="relative w-40 h-40 rounded-full overflow-hidden shrink-0 aspect-square">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/profile.jpg"
                alt="프로필 이미지"
                className="object-cover absolute w-full h-full"
              />
            }
          </figure>
          <div className="sm:pt-5 self-start w-full">
            <div className="flex items-center">
              <p className="font-logo_font text-xs w-16 text-left shrink-0">
                name
              </p>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                김규연
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-logo_font w-16 text-xs text-left shrink-0">
                mail
              </p>
              <a
                href="mailto:lurain003@gmail.com"
                className="overflow-hidden text-ellipsis whitespace-nowrap link"
              >
                lurain003@gmail.com
              </a>
            </div>
            <div className="flex items-center w-full">
              <p className="font-logo_font w-16 text-xs text-left shrink-0">
                github
              </p>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                <a href="https://github.com/GrangbelrLurain" className="link">
                  https://github.com/GrangbelrLurain
                </a>
              </p>
            </div>
          </div>
        </article>
      </Container>
      <Container className="w-full max-w-screen-xl px-5">
        <h2 className="font-logo_font">skills</h2>
        <ul className="flex gap-2 flex-wrap">
          {[
            Html,
            Css,
            TailwindCSS,
            Javascript,
            Typescript,
            React,
            NextJs,
            Prisma,
          ].map((Icon, index) => (
            <li key={`icons_${index}`} className="text-4xl">
              <Icon />
            </li>
          ))}
        </ul>
      </Container>
      <Container className="w-full max-w-screen-xl px-5">
        <h2 className="font-logo_font">intro</h2>
        <h3 className="font-bold text-lg">1년 차 웹 개발자 김규연입니다.</h3>
        <p className="whitespace-pre-line">{`프론트엔드 개발자로서 사내 여러 프로젝트를 담당하여 진행하였습니다.
기존 회사에 퍼블리셔로 입사하여 부족한 개념을 채우기 위해 학습을 병행하며 프론트엔드 개발자로서 역량을 강화하였습니다.

`}</p>
        <h3 className="font-bold text-lg">코드 리뷰에 익숙합니다.</h3>
        <p className="whitespace-pre-line">{`기존에 회사에서 Jira / Github / Vercel 기반으로 함께 프로젝트를 진행했습니다.
        스스로 부족한 점을 보완하고, 타인의 피드백을 수용할 수 있습니다.

`}</p>
        <h3 className="font-bold text-lg">개발자로서의 목표</h3>
        <p className="whitespace-pre-line">{`더 고도화 된 프론트엔드
 - 사용자 접근성에 대한 연구
 - ThreeJS / Animate 등 다양한 프론트엔드 기술에 도전
풀스택 개발자
 - 모든 범위의 개발 역량에 약점이 없는 개발자
 - 전체 프로젝트의 맥락을 파악하기 위해 모든 개발 범위에서 기초적인 지식과 기술의 흐름을 이해
`}</p>
      </Container>
      <Container className="w-full max-w-screen-xl px-5">
        <h2 className="font-logo_font">PORTFOLIO</h2>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {portfolio.map(({ title, href, thumbnail, particle }, index) => {
            if (index > 3) {
              return <Empty key={href} />;
            }
            return (
              <PortpolioLink
                key={href}
                href={{ pathname: "/portfolio", query: { index } }}
                title={title}
                particle={particle}
                src={thumbnail}
                target="_self"
                className="aspect-square rounded-lg"
              />
            );
          })}
        </article>
      </Container>
      <Container className="w-full max-w-screen-xl px-5">
        <h2 className="font-logo_font">blog</h2>
        <article className="flex flex-col gap-2">
          {markdowns?.map(({ name, sha }) => {
            return (
              <Link key={sha} href={`/blog/post?postUrl=${name}`}>
                <p className="px-5 py-4 rounded-md bg-gray-500 bg-opacity-50 hover:bg-opacity-100 transition-all">
                  {name}
                </p>
              </Link>
            );
          })}
        </article>
      </Container>
      <Container className="w-full px-5">
        <h2 className="font-logo_font">legacy</h2>
        <div className="flex gap-5 items-center">
          <p className="font-logo_font text-xs w-16 text-left">notion</p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            <a
              className="link"
              href="https://standing-hugger-2fb.notion.site/7299892e25e54e59916712e7e9a31942?v=535ab28a08d145e8b8aafa947798bc13"
            >
              https://standing-hugger-2fb.notion.site/7299892e25e54e59916712e7e9a31942?v=535ab28a08d145e8b8aafa947798bc13
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
