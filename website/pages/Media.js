import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useState , useEffect} from 'react'
import { useRouter } from "next/router";


const Media = () => {

  const router = useRouter();

  useEffect(() => {
    const token= localStorage.getItem("userAge");
    if(token===null)
  {
    router.replace('/');
  }    
  }, [router]);

  const [showModal,setShowModal] = useState(false);

  const [showModal2,setShowModal2] = useState(false);

  const [showModal3,setShowModal3] = useState(false);
  const [showModal4,setShowModal4] = useState(false);

  const [showModal5,setShowModal5] = useState(false);

  const [showModal6,setShowModal6] = useState(false);
  const [showModal7,setShowModal7] = useState(false);

  const [showModal8,setShowModal8] = useState(false);

  const [showModal9,setShowModal9] = useState(false);
  const [showModal10,setShowModal10] = useState(false);

  const [showModal11,setShowModal11] = useState(false);

  return (
    <div>
      
      <Header />
      <Navbar />
      <div className="container px-6 py-20 py bg-[#102935] ">
        <section className=" text-white">
          <h2 className="text-3xl font-bold mb-12  text-center text-[#FBEAC2] ">
            VIDEOS
          </h2>
          <div className="grid lg:grid-cols-6 gap-4 my-2">
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              frameBorder="0"
              className="max-w-2xl lg:col-span-2"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              className="max-w-2xl lg:col-span-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              className="max-w-2xl lg:col-span-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid lg:grid-cols-6 gap-4 my-2">
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              className="max-w-2xl lg:col-span-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              className="max-w-2xl lg:col-span-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0NUKJXkQUn4"
              width="450"
              height="360"
              className="max-w-2xl lg:col-span-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex my-8 justify-center items-center gap-2 drop-shadow-md">
            <div className="h-14 w-fit px-4 text-white flex justify-center items-center bg-red-700 hover:bg-red-900 duration-200 ">
              <a href="https://www.google.co.in/?gfe_rd=cr&ei=Mb6nVdKNB_TI8AeDtoLoCw&gws_rd=ssl">
                <h2 className="text-xl font-bold">More on Youtube</h2>
              </a>
            </div>
          </div>
        </section>
        <section className=" text-white">
          <h2 className="text-3xl font-bold mb-12 text-center  text-[#FBEAC2]">
            SCREENSHOTS
          </h2>
          <div className=" mb-16 grid lg:grid-cols-6 gap-6 ">
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal2(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal3(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            
          </div>
          <div className=" mb-16 grid lg:grid-cols-6 gap-6 ">
            {/* Image 4*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal4(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal4(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal5(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal6(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            
          </div>
        </section>
        <section className=" text-white">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#FBEAC2]">
            ARTWORK
          </h2>
          <div className=" mb-16 grid lg:grid-cols-6 gap-6 ">
            {/* Image 7*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal7(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal4(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal8(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            {/* Image*/}
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal9(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal9} onClose={() => setShowModal9(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
            
          </div>
          
        </section>
        <section className=" text-white">
          <h2 className="text-3xl font-bold mb-12 text-center  text-[#FBEAC2]">
            WALLPAPER
          </h2>
          <div className=" mb-16 grid lg:grid-cols-4 gap-6">
          <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal10(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal10} onClose={() => setShowModal10(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal10(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
          <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal11(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image Modal */}
            <Modal isVisible={showModal11} onClose={() => setShowModal11(false)}>
            <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2" onClick={()=>setShowModal11(true)}>
              <img
                src="https://d1079ywfijtdjs.cloudfront.net/images/outerworlds/v2/screenshots/tow-e3-fallbrook-01-700.jpg"
                className="max-w-2xl h-full"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Aboriginal</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
              
            </Modal>
          </div>
          <div className="flex py-8 justify-center items-center gap-2">
            <div className="h-14 w-fit px-4 text-white flex justify-center items-center bg-red-700 hover:bg-red-900 duration-200 cursor-pointer">
              <h2 className="text-xl font-bold">Download Fankit</h2>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      

    </div>
  );
};

export default Media
