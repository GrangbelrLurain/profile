"use client";
import Empty from "@/components/box/empty";
import Container from "@/components/container";
import PortpolioLink from "@/components/portpolio/portpolio-link";
import useMarkdowns from "@/lib/client/hook/use-markdowns";
import { portfolio } from "@/lib/client/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { markdowns } = useMarkdowns();

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
        <h2 className="font-logo_font">intro</h2>
        <h3 className="font-bold text-lg">1년 차 웹 개발자 김규연입니다.</h3>
        <p className="whitespace-pre-line">{`기존 회사에 퍼블리셔로 입사하여 프론트엔드 백엔드를 가리지 않고 도전, 바닐라 JS로 시작하여 풀스택 개발자로 퇴사하였습니다.
        일주일에 3개 이상 PR을 올릴 만큼 성실히 일했고, 팀에서 프론트엔드를 80% 전담하였습니다.
        URL 단위로 설계되어 복잡했던 기존 React.js 프로젝트를 Next.js 아토믹 디자인 시스템으로 개선하였습니다.

`}</p>
        <h3 className="font-bold text-lg">2022.04 ~ 2023.11 샵팬픽</h3>
        <p className="whitespace-pre-line">{`[ 1년 9개월 / 프론트엔드 개발자 ]
[ Next.js / React.js / MobX / Typescript / Prisma.io / Tailwind.css ]
- 추가 프로젝트 진행 시 홈페이지, 관리자 페이지 레거시 코드 충돌로 인한 리워크 (React.js -> Next.js)
- 아토믹 디자인 시스템 도입으로 컴포넌트 재사용성 높임
- 퍼블리셔로 입사하여 컴포넌트 제작, RestfulAPI 제작, DB쿼리 등 다양한 업무 수행 (Prisma.io)
- 데이터 조회 시 타입 지원 및 데이터 캐싱을 위해 SWR hook 제작 및 개선
- MySQL DB 조회하여 엑셀 파일로 제작 및 암호 적용 다운로드 기능 구현

`}</p>
        <h3 className="font-bold text-lg">
          더 체계적이고 고도화 된 개발 문화에 함께하고 싶습니다.
        </h3>
        <p className="whitespace-pre-line">{`기존에 회사에서 JIRA / Github / Vercel 기반으로 함께 프로젝트를 진행했습니다.
        Github PR 및 코드 리뷰에 익숙합니다.
스스로 부족한 점을 보완하고, 타인의 피드백을 수용하며 발전하는 개발자가 되겠습니다! 감사합니다.

`}</p>
        <h3 className="font-bold text-lg">개발자로서의 목표</h3>
        <p className="whitespace-pre-line">{`(1) 풀스택 개발자
 - 모든 범위의 개발 역량에 약점이 없는 개발자
 - 전체 프로젝트의 맥락을 파악하기 위해 모든 개발 범위에서 기초적인 지식과 기술의 흐름을 이해
(2) 더 고도화 된 프론트엔드
 - 사용자 접근성에 대한 연구
 - ThreeJS / Animate 등 다양한 프론트엔드 기술에 도전
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
