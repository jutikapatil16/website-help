import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Media from "@/components/Media";
import NavBar from "@/components/NavBar";
import News from "@/components/News";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home()
{
  
  const router = useRouter();

  useEffect(() => {
    const token= localStorage.getItem("userAge");
    if(token===null)
  {
    router.replace('/');
  }    
  }, [router]);

  return(
        <div className="overflow-x-hidden overflow-y-auto m-0">
        <Header />
      <NavBar />
      <HeroSection/>
      <Media/>
      <News/>
      <Footer/>
    </div>
  )
}