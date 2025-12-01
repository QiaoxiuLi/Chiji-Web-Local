import React from 'react';
import { Link } from 'react-router-dom';
import { getOssImg } from '../utils/oss';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start px-4 md:px-20">
          {/* Top: Logo Area */}
          <div className="relative mb-8 flex justify-start items-start">
            <img 
              src={getOssImg("assets/logo.png", 900)}
              alt="Project Logo" 
              className="w-auto h-auto max-w-[55%] md:max-w-md object-contain animate-imageFadeIn"
            />
          </div>

          {/* Bottom: Text Content */}
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6 leading-tight">
              基于 Minecraft 和 Java 的<br className="hidden lg:block" />
              中学生心理健康与教育服务平台设计
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              该项目旨在构建一个融合游戏化体验与专业心理支持的综合性服务平台，<br className="hidden md:block" />通过创新的交互逻辑，为青少年提供更具亲和力与吸引力的教育环境。
            </p>

            <Link to="/minecraft-project" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors">
              了解该项目
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};