import Card from "./cards_news"
import newsImage from "../public/news_pic.jpg";

export default function News() {
    return <section className="bg-[#102935] py-10">
        <h1 className="flex justify-center text-[#FBEAC2] text-4xl mb-10">NEWS</h1>
        <div className="grid lg:grid-cols-4 gap-4 container mx-auto mt-2 mb-10">
        <Card
          imageUrl={newsImage}
          title='The Outer Worlds • February 27, 2023'
          description=' The Outer Worlds: Spacer’s Choice Edition Available March 7th! '
        />
        <Card
          imageUrl={newsImage}
          title='The Outer Worlds • February 27, 2023'
          description=' The Outer Worlds: Spacer’s Choice Edition Available March 7th! '
        />
        <Card
          imageUrl={newsImage}
          title='The Outer Worlds • February 27, 2023'
          description=' The Outer Worlds: Spacer’s Choice Edition Available March 7th! '
        />
        <Card
          imageUrl={newsImage}
          title='The Outer Worlds • February 27, 2023'
          description=' The Outer Worlds: Spacer’s Choice Edition Available March 7th! '
        />
        </div>
        <div className="flex justify-center">
        <div className="h-14 w-fit px-4 text-white flex justify-center items-center bg-red-600 hover:bg-blue-400 duration-200">
        <div>VIEW ALL NEWS</div>
        </div>
        </div>
    
    </section>
}




