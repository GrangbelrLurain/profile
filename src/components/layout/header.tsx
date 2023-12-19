import Image from "next/image";

const Header = () => (
  <header className="flex items-center py-4 px-16 gap-2 sticky top-0 bg-base-100">
    <figure className="relative w-8 h-8">
      <Image src="/logo.svg" alt="옥탑방 고양이 로고" layout="fill" />
    </figure>
    <h1 className="font-logo_font">RooftopCAT</h1>
    <ul className="flex gap-2">
      <li>포트폴리오</li>
      <li>팀 소개</li>
      <li>문의하기</li>
    </ul>
  </header>
);

export default Header;
