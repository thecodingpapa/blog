import React from 'react';


const LogoMenuComponent = ({}) => {
  return (
    <div className="container mx-auto px-5">
        <div className="mb-32 flex justify-between items-center p-4">
          <div className="flex-shrink-0">
            <img src="https://res.cloudinary.com/dqrkrqm9y/image/upload/v1694062052/thecodingpapa_logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-black bg-black rounded"
              onClick={() => {
                window.location.href = 'https://www.thecodingpapa.com';
              }}
            >
                DEV
            </button>
            <button
              className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-black bg-black rounded"
              onClick={() => {
                window.location.href = 'https://blog.thecodingpapa.com';
              }}
            >
                BLOG
            </button>
          </div>
        </div>
    </div>
  );
};

export default LogoMenuComponent;
