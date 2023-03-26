import Link from 'next/link';
import Image from "next/image";
import logo3 from '../public/footerIcons/logo3.svg'

const Footer = () => {
    return (
        <footer className="bg-[#f0f0f0] text-[rgba(5,18,26,.6)] pt-8 pb-10 ">

            <div className="container  flex  justify-center ml-auto mr-auto">
                <div className='flex-col justify-center '>
                    <div className="w-full  text-center text-1.75xl py-10 ">
                        <ul className=" mb-4 md:mb-0 text-zinc-800">
                            <li className="inline-block mr-6 hover:underline underline-offset-4">
                                <Link href="/privacy-cookies">
                                    Privacy &amp; Cookies
                                </Link>
                            </li>
                            <li className="inline-block mr-6 hover:underline underline-offset-4">
                                <Link href="/terms-of-use">
                                    Terms of use
                                </Link>
                            </li>
                            <li className="inline-block mr-6 hover:underline underline-offset-4">
                                <Link href="/legal">
                                    Legal
                                </Link>
                            </li>
                            <li className="inline-block mr-6 hover:underline underline-offset-4">
                                <Link href="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex justify-center py-5">

                        <Image
                            className='h-12  inline-block mx-2'
                            src={logo3}
                            alt='/'
                        />
                        <Image
                            className='h-12 inline-block mx-2'
                            src={logo3}
                            alt='/'
                        />
                        <Image
                            className='h-12 inline-block mx-2'
                            src={logo3}
                            alt='/'
                        />
                        <Image
                            className='h-12 inline-block mx-2'
                            src={logo3}
                            alt='/'
                        />


                    </div>
                    <div className="w-full  text-center py-5 ">
                        {/* <p className="text-xs mt-2 text-[#303030] py-1.5 ">
                            &copy; 2023 Obsidian Entertainment, Inc. Obsidian Entertainment and the Obsidian Entertainment logo are trademarks or registered trademarks of Obsidian Entertainment, Inc. The Outer Worlds and The Outer Worlds logos are trademarks or registered trademarks of Obsidian Entertainment, Inc.
                        </p>
                        <p className="text-xs mt-2 text-[#303030] py-1.5">
                            &copy; 2023 Take-Two Interactive Software, Inc. Trademarks belong to their respective owners. All rights reserved.
                        </p>
                        <p className="text-xs mt-2 text-[#303030] py-1.5">
                            &copy; 2023 PS4 is a trademark of Sony Computer Entertainment Inc.
                        </p>
                        <p className="text-xs mt-2 text-[#303030] py-1.5">
                            &copy; 2023 Nintendo Switch is a trademark of Nintendo.
                        </p> */}
                        <p className="text-xs mt-2 text-[#303030] py-1.5">
                            &copy; 2023 Advanced Micro Devices, Inc. All rights reserved. AMD, the AMD Arrow logo, Radeon, Ryzen and combinations thereof are trademarks of Advanced Micro Devices, Inc.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;