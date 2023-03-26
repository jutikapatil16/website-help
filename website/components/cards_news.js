import React from 'react';
import Image from 'next/image';


const Card = ({ imageUrl, title, description }) => {
  return (
    <div className=" overflow-hidden  shadow-md hover:shadow-lg">
      <div className="w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={500}
          height={400}
          className="object-cover object-center"
        />
      </div>
      <div className=" inset-x-0 bottom-0 px-6 py-4 bg-white bg-opacity-90">
        <h2 className="text-xl font-bold text-[#9c3443]">{title}</h2>
        <p className="mt-2 text-[#05121A]">{description}</p>
      </div>
      <div className="inset-0 border border-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

    
  export default Card;