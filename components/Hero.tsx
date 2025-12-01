import React from 'react';
import { getOssImg } from '../utils/oss';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getOssImg("https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop", 2500)}
          alt="Background" 
          className="w-full h-full object-cover animate-imageFadeIn"
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-24">
        <div className="max-w-4xl w-full mx-auto">
          
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-tight text-center flex flex-col items-center justify-center drop-shadow-2xl">
            <span className="block">海内存知己</span>
            <span className="block mt-2 sm:mt-4 text-brand-200">天涯若比邻</span>
          </h1>
          
          <p className="mt-8 w-full max-w-3xl mx-auto text-lg md:text-xl text-slate-100 leading-relaxed text-center drop-shadow-lg font-medium tracking-wide">
            感谢你挥动自己发财的小手<br/>
            来到了李某人的个人网站<br/>
            这里上传了部分项目的文件和资料<br/>
            或许你会发现一些有意思东西
          </p>
          
        </div>
      </div>
    </div>
  );
};