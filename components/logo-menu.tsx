import Image from 'next/image';
import React from 'react';


const LogoMenuComponent = ({}) => {
  return (
    <div className='fixed top-0 w-screen bg-black flex justify-center'>
      <div style={{width:"960px"}} className="px-5">
          <div className="flex justify-between items-center p-4">
            <div className="flex flex-row flex-shrink-0 items-baseline">
              {/* <Image src="/thecodingpapa_logo.png" width={48} height={48} alt="Logo" className="h-12" /> */}
              <h1 className="text-xl text-white font-bold">Blog</h1>
              <p className="text-sm text-white ml-1">by 더코딩파파</p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-transparent hover:text-cyan text-white text-sm"
                onClick={() => {
                  window.location.href = 'https://www.thecodingpapa.com';
                }}
              >
                  코딩 캠퍼스
              </button>
              <button
                className="bg-transparent hover:text-cyan text-white text-sm"
                onClick={() => {
                  window.location.href = 'https://blog.thecodingpapa.com';
                }}
              >
                  블로그
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LogoMenuComponent;
