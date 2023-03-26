import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const News = () => {

  const router = useRouter();

  useEffect(() => {
    const token= localStorage.getItem("userAge");
    if(token===null)
  {
    router.replace('/');
  }    
  }, [router]);

  return (
    <div>
      <Header />
      <Navbar />
      <section className=" text-white container px-6 py-20 mx-auto bg-[#102935]">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#FBEAC2]">LATEST NEWS</h2>

        <div className=" mb-16 grid lg:grid-cols-5 gap-6">
          <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2 col-span-3 cursor-pointer ">
            <img
              src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/tow-spacerschoiceedition.jpg"
              className="w-full h-full "
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-[#9c3443]/[.5] hover:bg-[#9c3443]/[.0] cursor ">
                <div className="flex justify-start items-end h-full">
                  <div className="text-white  m-6">
                    <div className="font-bold text-3xl mb-3">
                      Aboriginal • February 27, 2023
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Aboriginal: Spacer&apos;s Choice Edition Available March 7th!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg col-span-3 drop-shadow-2xl cursor-pointer ">
            <img
              src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/theouterworldsmurderoneridanos_switch.jpg"
              className="w-full"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-[#9c3443]/[.5] hover:bg-[#9c3443]/[.0]">
                <div className="flex justify-start items-end h-full">
                  <div className="text-white m-6">
                    <div className="font-bold text-3xl mb-3">
                      Aboriginal • February 27, 2023
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Aboriginal: Spacer&apos;s Choice Edition Available March 7th!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 xl:gap-x-10">
          <div className="mb-6 lg:mb-0 border-2 p-1 border-gray-800 hover:border-neutral-50 cursor-pointer text-[#9c3443] drop-shadow-md hover:drop-shadow-xl ">
            <div className="bg-white bg-opacity-90">
              <div className=" overflow-hidden bg-no-repeat bg-cover shadow-lg  mb-6">
                <img
                  src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/theouterworldsmurderoneridanos_switch.jpg"
                  className="w-full"
                  alt=""
                />
              </div>

              <h5 className="text-lg font-bold mb-3 underline underline-offset-4 px-3">
                The Outer Worlds • September 1, 2021
              </h5>

              <p className="text-zinc-800 text-l p-2">
                The Outer Worlds: Murder on Eridanos Nintendo Switch Release Date and Patch Notes
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-0 border-2 p-1 border-gray-800 hover:border-neutral-50 cursor-pointer text-[#9c3443] drop-shadow-md hover:drop-shadow-xl ">
            <div className="bg-white bg-opacity-90">
              <div className=" overflow-hidden bg-no-repeat bg-cover shadow-lg  mb-6">
                <img
                  src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/theouterworldsmurderoneridanos_switch.jpg"
                  className="w-full"
                  alt=""
                />
              </div>

              <h5 className="text-lg font-bold mb-3 underline underline-offset-4 px-3">
                The Outer Worlds • September 1, 2021
              </h5>

              <p className="text-zinc-800 text-l p-2">
                The Outer Worlds: Murder on Eridanos Nintendo Switch Release Date and Patch Notes
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-0 border-2 p-1 border-gray-800 hover:border-neutral-50 cursor-pointer text-[#9c3443] drop-shadow-md hover:drop-shadow-xl ">
            <div className="bg-white bg-opacity-90">
              <div className=" overflow-hidden bg-no-repeat bg-cover shadow-lg  mb-6">
                <img
                  src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/theouterworldsmurderoneridanos_switch.jpg"
                  className="w-full"
                  alt=""
                />
              </div>

              <h5 className="text-lg font-bold mb-3 underline underline-offset-4 px-3">
                The Outer Worlds • September 1, 2021
              </h5>

              <p className="text-zinc-800 text-l p-2">
                The Outer Worlds: Murder on Eridanos Nintendo Switch Release Date and Patch Notes
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-0 border-2 p-1 border-gray-800 hover:border-neutral-50 cursor-pointer text-[#9c3443] drop-shadow-md hover:drop-shadow-xl ">
            <div className="bg-white bg-opacity-90">
              <div className=" overflow-hidden bg-no-repeat bg-cover shadow-lg  mb-6">
                <img
                  src="https://d1079ywfijtdjs.cloudfront.net/outerworlds/news/theouterworldsmurderoneridanos_switch.jpg"
                  className="w-full"
                  alt=""
                />
              </div>

              <h5 className="text-lg font-bold mb-3 underline underline-offset-4 px-3">
                The Outer Worlds • September 1, 2021
              </h5>

              <p className="text-zinc-800 text-l p-2">
                The Outer Worlds: Murder on Eridanos Nintendo Switch Release Date and Patch Notes
              </p>
            </div>
          </div>
       
         
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
