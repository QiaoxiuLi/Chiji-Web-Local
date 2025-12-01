import React, { useState } from 'react';
import { FileViewer } from '../components/FileViewer';
import { Play } from 'lucide-react';
import { getOssImg } from '../utils/oss';

export const XiaomiShowcase: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", 2500)}
             alt="Background" 
             className="w-full h-full object-cover animate-imageFadeIn"
           />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-normal shadow-sm max-w-5xl animate-fadeIn">
            小米15周年"新起点"<br/>发布会灯光效果还原
          </h1>
        </div>
      </div>

      {/* Stats Section */}
      <section className="w-full bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-6">
          
          {/* Item 1: 2100+ DMX通道 */}
          <div className="flex flex-col items-center">
             <span className="text-6xl md:text-8xl font-extrabold text-brand-600 leading-none tracking-tight">2100+</span>
             <span className="text-xl md:text-2xl font-bold text-slate-800 mt-1">DMX通道</span>
          </div>

          {/* Item 2: 327 盏摇头灯 */}
          <div className="flex flex-col items-center">
             <span className="text-6xl md:text-8xl font-extrabold text-brand-600 leading-none tracking-tight">327</span>
             <span className="text-xl md:text-2xl font-bold text-slate-800 mt-1">盏摇头灯</span>
          </div>

          {/* Item 3: 4 个第三方插件相互配合 */}
          <div className="flex flex-col items-center">
             <span className="text-6xl md:text-8xl font-extrabold text-brand-600 leading-none tracking-tight">4</span>
             <span className="text-xl md:text-2xl font-bold text-slate-800 mt-1">个第三方插件相互配合</span>
          </div>

          {/* Item 4: 学习并使用了 3 种专业灯控软件 */}
          <div className="flex flex-col items-center">
             <div className="text-xl md:text-3xl font-bold text-slate-800 leading-snug">
               学习并使用了 <span className="text-5xl md:text-7xl font-extrabold text-brand-600 mx-2 align-middle">3</span> 种专业灯控软件
             </div>
          </div>

          {/* Item 5: 总净投入超 30 小时 */}
          <div className="flex flex-col items-center">
             <div className="text-xl md:text-3xl font-bold text-slate-800 leading-snug">
               总净投入超 <span className="text-5xl md:text-7xl font-extrabold text-brand-600 mx-2 align-middle">30</span> 小时
             </div>
          </div>

        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-100 flex flex-col items-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-10">查看视频</h2>
         
         <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
            {!showVideo ? (
              <button 
                onClick={() => setShowVideo(true)}
                className="group absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer focus:outline-none bg-slate-900"
                title="播放视频"
              >
                {/* Poster Image */}
                <img 
                  src={getOssImg("https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop", 680)}
                  alt="Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300"
                />
                
                {/* Play Button */}
                <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 border border-white/40 shadow-xl">
                   <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                
                <span className="absolute bottom-12 text-white font-medium tracking-wide text-lg opacity-90 group-hover:opacity-100 transition-opacity">点击加载视频</span>
              </button>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                {/* Video Player */}
                 <video 
                   className="w-full h-full object-cover" 
                   controls 
                   autoPlay
                   playsInline
                 >
                   <source src="#" type="video/mp4" />
                   您的浏览器不支持视频播放。
                 </video>
              </div>
            )}
         </div>
      </section>

      {/* File Viewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/xiaomi-showcase.txt"
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
        className="bg-white"
      />
    </div>
  );
};