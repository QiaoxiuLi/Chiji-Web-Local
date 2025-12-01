import React from 'react';
import { FileViewer } from '../components/FileViewer';
import { Layers, Zap, Trees, Smartphone, GraduationCap, Crosshair } from 'lucide-react';
import { getOssImg } from '../utils/oss';

interface VersionInfo {
  title: string;
  version: string;
  description: string;
  icon: React.ElementType;
}

const versions: VersionInfo[] = [
  {
    title: "原生版本",
    version: "1.20.1",
    description: "此版本为原生我的世界版本打造。建筑期间未曾加载任何mod及附加包,理论上可以在任何1.20及以上版本中打开。",
    icon: Layers
  },
  {
    title: "科技节版本",
    version: "1.20.1",
    description: "作为安生学校第一届科技界开幕式视频使用的版本,宋秉泽同学自主研究设计模拟电路,在游戏中创造了高分辨率屏幕实现了多帧显示。",
    icon: Zap
  },
  {
    title: "风景版本",
    version: "1.20.1",
    description: "此版本将学校移入了宏伟的地形中,坐落于森林。基于原生版本打造,建筑期间未曾加载任何mod及附加包,理论上可以在任何1.20及以上版本中打开。",
    icon: Trees
  },
  {
    title: "基岩版本",
    version: "1.20.1",
    description: "此版本为我的世界基岩版打造建筑期间未曾加载附加包,在移动端游玩便捷。",
    icon: Smartphone
  },
  {
    title: "CTB版本",
    version: "1.20.1",
    description: "在CTB全国赛作为心理健康教育平台使用的版本,体验我们自主编码的定制Mod。各种同学参与建造,收录了在试运行过程中高一高二同学富有创意的建筑。",
    icon: GraduationCap
  },
  {
    title: "和平精英版本",
    version: "1.20.1",
    description: "安装了枪械,重型武器Mod的Java版地图。您已进入刺激战场,加油,特种兵!",
    icon: Crosshair
  }
];

export const JinanProject: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop", 2500)}
             alt="Background" 
             className="w-full h-full object-cover animate-imageFadeIn"
           />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Left-aligned Content Container */}
        <div className="relative h-full flex items-center justify-start max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-left leading-normal shadow-sm animate-fadeIn">
            获取所有关于<br/>
            Minecraft复刻安生学校的<br/>
            地图及其相关文件于此网站
          </h1>
        </div>
      </div>

      {/* Map Versions Grid Section */}
      <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {versions.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-brand-50 text-brand-600 rounded-lg mr-3">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-none">{item.title}</h3>
                    <span className="text-sm font-medium text-brand-600 mt-1 inline-block bg-brand-50 px-2 py-0.5 rounded-full">{item.version}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Viewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/jinan-project.txt"
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
        className="bg-white"
      />

      {/* Copyright Footer */}
      <div className="w-full bg-white pb-8 flex justify-center">
          <span className="text-slate-400 font-normal text-[10px]">
            ©2025 mcJTS 保留所有权利。
          </span>
      </div>
    </div>
  );
};