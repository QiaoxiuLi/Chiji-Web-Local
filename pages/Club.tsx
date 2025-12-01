import React from 'react';
import { FileViewer } from '../components/FileViewer';
import { getOssImg } from '../utils/oss';

export const Club: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", 2500)}
             alt="Background" 
             className="w-full h-full object-cover animate-imageFadeIn"
           />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-normal shadow-sm max-w-5xl animate-fadeIn">
            融高部技术指导小组
          </h1>
        </div>
      </div>

      {/* New Intro Section */}
      <section className="h-[400px] w-full bg-white flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 max-w-4xl leading-normal">
          为济南市安生学校高中部学生会<br/>提供技术保障和网站运维服务
        </h2>
        <p className="text-xl text-slate-600 font-medium">
        <br/><br/>领导层：张宝祺 李翘秀<br/><br/>创始人：赵文博 张海川<br/><br/>2026届接班人：单佳宁 
        </p>
      </section>

      {/* FileViewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/club.txt"
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
        className="bg-slate-50"
      />
    </div>
  );
};