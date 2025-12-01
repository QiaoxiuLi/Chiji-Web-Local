import React from 'react';
import { FileViewer } from '../components/FileViewer';
import { getOssImg } from '../utils/oss';

export const Huchenfeng: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2068&auto=format&fit=crop", 2500)}
             alt="Background" 
             className="w-full h-full object-cover animate-imageFadeIn"
           />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-normal shadow-sm max-w-5xl animate-fadeIn">
            在悠悠的古城中<br/>听戏子唱京城
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <section className="w-full bg-white py-16 px-4 flex justify-center items-center border-b border-slate-100">
         <h2 className="text-xl md:text-2xl text-slate-600 font-medium text-center">
            待数据库就绪后，将上线2023-2025<br/>录播内容（800GB+）
         </h2>
      </section>

      {/* FileViewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/huchenfeng.txt"
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
        className="bg-white"
      />
    </div>
  );
};