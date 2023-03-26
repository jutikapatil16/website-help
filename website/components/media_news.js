import Image from 'next/image'
import mediaPic from '../public/mediapic.jpg'

const Card = ({ imageUrl, title }) => (
    <div className="relative flex flex-col items-center justify-end h-80 p-6 border border-cd6977  overflow-hidden">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
        <div className="absolute left-0 bottom-0 p-4">title</div>
    </div>
)

const Grid = () => (
    <div >
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-20  ">
            <div className="col-span-2 md:col-span-1 p-4 ">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4 ">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>




        </section>
    </div>
)

export default Grid
