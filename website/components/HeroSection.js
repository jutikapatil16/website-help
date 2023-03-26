import Image from "next/image";
import im from "../public/newhero_adobe_express.svg";
import logo from "../public/logo2.svg";
import pc from "../public/icons/pc.svg";

export default function HeroSection() {
  return (
    <section>
      <div className="relative w-screen h-screen">
        <Image
          className="cursor-pointer object-cover h-full w-full"
          src={im}
          height="100"
          alt="/"
        />
        <div className="absolute flex flex-col  text-2.25 text-yellow-500 top-56 left-56 space-y-4">
          <div style={{ marginRight: "20px" }}>
            {/* <Image
              className="cursor-pointer object-cover h-full w-full"
              src={logo}
              alt="/"
            /> */}
            {/* <iframe
              src="https://www.monastichill.com/game_title_english_karosthi.mp4"
              width="320"
              height="200"
              className="max-w-2xl lg:col-span-2"
            ></iframe> */}
            <video playsInline autoPlay muted loop  style={{height:'200px' ,width:'320px'}}>
              <source src='https://www.monastichill.com/game_title_english_karosthi.mp4' type='video/mp4'/>
            </video>
          </div>
          <div
            style={{ marginTop: "10px" }}
            className="flex flex-row pd-5 justify-center "
          >
            <Image
              className="cursor-pointer object-cover w-6 filter-invert mr-2 "
              src={pc}
              alt="/"
            />
            <Image
              className="cursor-pointer object-cover w-6 mr-2"
              src={pc}
              alt="/"
            />
            <Image
              className="cursor-pointer object-cover w-6 mr-2"
              src={pc}
              alt="/"
            />
          </div>
          <div className="text-3xl  flex justify-center ">AVAILABLE</div>
          <div className=" text-3xl  flex justify-center">03.07.2023</div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-14 border-2 px-8 border-white text-white flex justify-center items-center hover:bg-white hover:text-black duration-100">
              <div>Watch Trailer</div>
            </div>
            <div className="h-14 w-fit px-4 text-white flex justify-center items-center bg-red-600 hover:bg-blue-400 duration-200">
              <div>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
