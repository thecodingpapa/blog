import Image from 'next/image';
import React from 'react';


const LogoMenuComponent = ({}) => {
  return (
    <div className="container mx-auto px-5 mb-16">
        <div className="flex justify-between items-center p-4">
          <div className="flex-shrink-0">
            {/* <Image src="/thecodingpapa_logo.png" width={48} height={48} alt="Logo" className="h-12" /> */}
            <h1 className="text-6xl font-bold">Blog.</h1>
            <p className="text-sg">by 더코딩파파</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-black bg-black rounded"
              onClick={() => {
                window.location.href = 'https://www.thecodingpapa.com';
              }}
            >
                코딩 캠퍼스
            </button>
            <button
              className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-black bg-black rounded"
              onClick={() => {
                window.location.href = 'https://blog.thecodingpapa.com';
              }}
            >
                블로그
            </button>
          </div>
        </div>
    </div>
  );
};

export default LogoMenuComponent;
