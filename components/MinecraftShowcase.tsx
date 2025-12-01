import React from 'react';
import { Link } from 'react-router-dom';
import { getOssImg } from '../utils/oss';

export const MinecraftShowcase: React.FC = () => {
  return (
    <section id="minecraft-showcase" className="relative min-h-[500px] flex items-center py-24 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={getOssImg("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", 2500)}
          alt="Stage lighting background" 
          className="w-full h-full object-cover animate-imageFadeIn"
        />
        {/* Darker overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start max-w-4xl pl-4 md:pl-20">
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-left drop-shadow-xl">
            还原小米15周年<br/>
            战略新品发布会<br/>
            开场灯光特效
          </h2>
          <p className="mt-6 text-xl text-slate-200 font-medium drop-shadow-lg max-w-2xl">
            使用 Minecraft 及 Theatrical mod <br/>
            还原雷总上台时的灯光设计，体验<br/>大舞台的震撼。
          </p>
          <div className="mt-10">
            <Link to="/xiaomi-showcase" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors">
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};