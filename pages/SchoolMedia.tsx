
import React from 'react';
import { FileViewer } from '../components/FileViewer';
import { getOssImg } from '../utils/oss';
import { Link } from 'react-router-dom';

export const SchoolMedia: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop", 2500)}
             alt="Background" 
             className="w-full h-full object-cover animate-imageFadeIn"
           />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-normal shadow-sm max-w-5xl animate-fadeIn">
            <>学校播控任务中<br />遗留下来的媒体文件</>
          </h1>
        </div>
      </div>

      {/* 播控注意事项与操作指南 Section */}
      <section className="h-[400px] md:h-auto md:py-16 w-full bg-slate-50 flex flex-col items-center justify-center border-b border-slate-100">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          播控注意事项与操作指南
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-medium mb-8">
          为济南市安生学校高中部学生会撰写
        </p>
        
        <Link 
          to="/gallery/school-guide"
          className="block h-[240px] md:h-[360px] aspect-[210/297] group relative"
          title="点击查看指南"
        >
          <img 
            src={getOssImg("https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop", 600)}
            alt="播控注意事项与操作指南" 
            className="w-full h-full object-cover md:object-contain rounded-[10px] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
          />
        </Link>
      </section>

      {/* File Viewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/school-media.txt" 
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
      />
    </div>
  );
};
