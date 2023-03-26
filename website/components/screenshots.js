import Image from 'next/image'
import Media from '@/pages/Media'

const Card = ({ image, title }) => (
    <div classNameName=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg lg:col-span-2">
            <img
              src={image}
              className="max-w-2xl h-full"
            />
            <a href="">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div className="flex justify-start items-end h-full">
                  <div className="text-white m-6">
                    <h5 className="font-bold text-lg mb-3">
                      {title}
                    </h5>
                    
                  </div>
                </div>
              </div>
            </a>
    </div>
)



export default Card
