type work =
  | string
  | {
      [title: string]: work[];
    };

export type TPortfolio = {
  title: string;
  description: string;
  works: work[];
  href: string;
  thumbnail: string;
  particle: number;
};

export const portfolio: TPortfolio[] = [
  {
    title: "샵팬픽 홈페이지",
    description:
      "(주)샵팬픽의 사용자 페이지입니다. 굿즈샵, 게시판, 정보 제공 등의 기능을 제공합니다.",
    works: [
      "레거시 코드 충돌로 인한 리워크 (React.js -> Next.js)",
      "아토믹 디자인 시스템 도입으로 컴포넌트 재사용성 높임",
      "데이터 조회 시 타입 지원 및 데이터 캐싱을 위해 SWR hook 제작 및 개선",
      "JWT 리프레쉬 토큰 만료 이전 자동 로그인 기능 구현",
      "메인 페이지 기능 개선으로 메인 페이지 배너, 리스트 추가 및 관리 기능 연동",
      "각 페이지별 데이터 연동",
    ],
    href: "https://shopfanpick.com",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/shopfanpick.png",
    particle: 40,
  },
  {
    title: "샵팬픽 관리자 페이지",
    description:
      "(주)샵팬픽의 관리자 페이지입니다. 고객 정보 관리, 상품 정보 관리, 게시판 관리 등의 기능을 제공합니다.",
    works: [],
    href: "https://admin-next.shopfanpick.com/sign-in",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/shopfanpick_admin.png",
    particle: 33,
  },
  {
    title: "샵팬픽 스튜디오 페이지",
    description:
      "(주)샵팬픽의 스튜디오 페이지입니다. 사용자는 크리에이터들이며 각 크리에이터들에게 샵 관리, 상품 관리, 정산 등의 기능을 제공합니다.",
    works: [],
    href: "https://studio.shopfanpick.com/auth/signin",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/shopfanpick_studio.png",
    particle: 25,
  },
  {
    title: "Project Company",
    description:
      "기존 회사에서 외주 수주를 위해 제작한 상업용 웹 예시 페이지입니다. 템플릿 용도로 제작되었으며, 카카오 지도, 팝업, 이메일 문의 기능을 제공합니다.",
    works: [],
    href: "https://superlative-kataifi-1086de.netlify.app/#company",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/company.png",
    particle: 100,
  },
  {
    title: "Project Last Profile",
    description:
      "처음으로 제작한 프로필 페이지입니다. 스크롤 풀 페이지에 집중하여 제작하였습니다.",
    works: [],
    href: "https://jolly-bose-812bd6.netlify.app/",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/last_profile.png",
    particle: 100,
  },
  {
    title: "Project Media Momemnt",
    description:
      "두 번째로 제작한 상업용 웹 예시 페이지입니다. Media Moment라는 가칭으로 제작하였으며, 스크롤 모션 애니메이션 기능에 집중하여 제작하였습니다.",
    works: [],
    href: "https://grangbelrlurain.github.io/mediaMoment/",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/media_moment.png",
    particle: 100,
  },
  {
    title: "Project Hotel",
    description:
      "첫 번째로 제작한 상업용 웹 예시 페이지입니다. 팀 프로젝트로 제작되었으며, 팀장으로 프로젝트를 수행하였습니다. 각 페이지별 제작한 인원이 다르며, 완료 후 수정하지 않았습니다.",
    works: [],
    href: "https://hotelgrandiris.netlify.app/",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/hotel.png",
    particle: 50,
  },
  {
    title: "Proejct Choco Rocher",
    description:
      "페레로로쉐 페이지를 리워크해본 페이지입니다. 터치 이벤트 위주로 제작되었습니다.",
    works: [],
    href: "https://chocorocher.netlify.app/",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/choco_rocher.png",
    particle: 100,
  },
  {
    title: "Proejct Cat Supporters",
    description:
      "처음으로 기획한 웹 페이지입니다. 스크롤 이벤트 위주로 제작되었습니다.",
    works: [],
    href: "https://catsuporters.netlify.app/",
    thumbnail:
      "https://raw.githubusercontent.com/GrangbelrLurain/profile/master/public/image/cat_supporters.png",
    particle: 100,
  },
];
