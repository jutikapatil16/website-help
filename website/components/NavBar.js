import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/logo2.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#dfdfdf');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      var navbar = document.getElementById('navbar');
      // var sticky = navbar.offsetTop;
      var sticky = 15;
      if(navbar)
      {
      if (window.pageYOffset >= sticky) {
        // navbar.classList.add("sticky")
        navbar.classList.add("fixed");
        navbar.classList.add("w-full");
        navbar.classList.add("top-0");
      } else {
        // navbar.classList.remove("sticky");
        navbar.classList.remove("fixed");
        navbar.classList.remove("w-full");
        navbar.classList.remove("top-0");
      }
    }
      if (window.scrollY >= 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div id='navbar' className='z-[50]'>

      <div
        style={{ backgroundColor: `${navBg}`}}
        className={
          shadow
            ? 'fixed w-full shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full z-[100]'

        }

      >
        <div className=' flex justify-center items-center w-full h-full px-16 2xl:px-16'>

          <div>
            <ul style={{ color: `${linkColor}` }} className=' hidden md:flex '>
              <li className='mt-4 ml-10 text-sm uppercase hover:underline underline-offset-4 decoration-zinc-800'>
                <Link href='/News'>News</Link>
              </li>
              {/* <li className='mt-5 ml-10 text-sm uppercase hover:underline underline-offset-4'>
                <Link href='/home'>Community</Link>
              </li> */}
              <li className='ml-10'>
                <Link href='/home'>
                  <video playsInline autoPlay muted loop style={{marginTop:'2px',marginBottom:'2px',height:'50px' ,width:'100px'}}>
              <source src='https://www.monastichill.com/game_title_english_karosthi.mp4' type='video/mp4'/>
            </video>
                </Link>
              </li>
              <li className='mt-4 ml-10 text-sm uppercase hover:underline underline-offset-4'>
                <Link href='/Media'>Media</Link>
              </li>
              {/* <li className='mt-5 ml-10 text-sm uppercase hover:underline underline-offset-4'>
                <Link href='/home'>Support</Link>
              </li> */}
              {/* <li className='mt-5 ml-10 text-sm uppercase hover:underline underline-offset-4'>
                <Link href='/home'>Gear Shop</Link>
              </li> */}
              {/* <li className='mt-5 ml-10 text-sm uppercase hover:underline underline-offset-4'>
                <Link href='/home'>Buy Now</Link>
              </li> */}
            </ul>

            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>


        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/News'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    News
                  </li>
                </Link>
                <Link href='/Media'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Media
                  </li>
                </Link>
                {/* <Link href='/home'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Community
                  </li>
                </Link>
                <Link href='/home'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Gear Support
                  </li>
                </Link>
                <Link href='/home'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Buy Now
                  </li>
                </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;