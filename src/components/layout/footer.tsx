import Image from "next/image";
import Container from "../container";

const Footer = () => {
  return (
    <footer className="bg-base-100">
      <Container className="py-10 flex sm:flex-row flex-col gap-2">
        <div className="flex flex-col items-center gap-5">
          <Image src="/logo.svg" alt="logo" width={60} height={80} />
          <p className="font-logo_font">rooftopcat</p>
        </div>
        <div className="text-xs flex flex-col self-end ml-auto sm:text-right text-center gap-2">
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            <p>팀장 김규연</p>
            <p>주소 인천광역시 마분로 29</p>
            <p>전화번호 010-5882-1484</p>
            <p>이메일 lurain003@gmail.com</p>
          </div>
          <p>
            ⓒ 2023 <span className="font-logo_font">RooftopCat</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
