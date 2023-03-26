import Image from "next/image";
import logoHeader from "../public/LoGo_adobe_express.svg";
import Link from 'next/link';

export default function Header() {
  return (
    <div className=" bg-[#1a1a1a] ">
      <header className="px-35 py-0 flex items-center justify-between mr-10 ml-10 bg-[#1a1a1a] h-13">
        <div className="flex items-center bg-black">
          <a href="https://www.monastichill.com/" >
          <Image alt="logo" src={logoHeader} width="100" height="40" className="invert" />
          </a>
        </div>
        <div className="flex items-center">
        </div>
      </header>
    </div>

  );
}
