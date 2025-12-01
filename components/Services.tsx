import React, { useState } from 'react';
import { Globe, Code, Palette, Briefcase, FileText, Video, X } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "美本申请个人网站",
    modalTitle: <>美本申请个人网站</>,
    description: "我来帮你搭一个英文网站，自我介绍和希望招生官知晓的信息。",
    price: "249元/个",
    icon: Globe,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>为您提供个人网站定制服务，通过个性化展示提升申请竞争力。</p>
        
        <div className="mt-4">
          <h4 className="font-bold text-slate-900 mb-2">服务模式：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>全包：</strong> 我负责从设计到上线的全部工作。</li>
            <li><strong>指导：</strong> 一对一指导，帮助您掌握建站技能。</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-slate-900 mb-2">服务内容：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>基于您提供的文字材料和媒体素材进行排版与美化，SSL证书部署。</li>
            <li>维护至申请季结束前的技术支持和内容更新。</li>
          </ul>
        </div>

        <div className="mt-4">
           <h4 className="font-bold text-slate-900 mb-2">交付内容：</h4>
           <p>可独立访问的网站链接，完整源代码包。</p>
        </div>
        
        <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-100">
          注：域名和服务器需自行购买，可提供专业选购建议。
        </p>
      </div>
    )
  },
  {
    title: "竞赛或项目网站",
    description: "我来给你的项目搭一个网站。",
    price: "349元/个",
    icon: Code,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>为你提供项目展示网站定制服务，适合竞赛、科研、课程设计等场景。</p>
        
        <div className="mt-4">
          <h4 className="font-bold text-slate-900 mb-2">服务模式：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>全包：</strong> 我负责从设计到上线的全部工作。</li>
            <li><strong>指导：</strong> 提供技术指导，你的团队参与开发过程。</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-bold text-slate-900 mb-2">核心功能：</h4>
          <p>项目成果展示、多媒体和文字材料库、团队成员介绍、数据看板、3D模型展示/代码演示，跨平台适配。</p>
        </div>

        <div className="mt-4">
           <h4 className="font-bold text-slate-900 mb-2">交付内容：</h4>
           <p>完整网站系统，源代码及文档、使用培训和赛事期间维护支持。</p>
        </div>
        
        <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-100">
          注：域名服务器及OSS对象存储需自行购买，可提供选购建议。
        </p>
      </div>
    )
  },
  {
    title: "项目平面设计",
    description: "PPT、海报、宣传册、计划书、文字材料和产品手册的排版与制作。",
    price: "1299元/每项目",
    icon: Palette,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>以上内容均以源文件或可编辑文件交付。</p>
        <p>每个人审美不同，请以网站内已有项目作为设计案例参考。</p>
      </div>
    )
  },
  {
    title: "甲方爸爸套餐",
    description: "负责项目的平面设计任务（PPT、海报、宣传册、计划书、文字材料和产品手册的排版与制作）以及技术支持（网站搭建，计算机软硬件解决方案）提供计算机应用开发环境的搭建、迁移与运维。项目在集会或外部展示时的播控解决方案。",
    price: "2999元/每项目",
    icon: Briefcase,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>
          我将作为你的项目成员以获取足够多的信息，例如旁听日常讨论及会议，主动收集过程性材料，使用专业设备拍摄你们工作时的场景，将高质量的影像内容和真实素材应用于项目的平面设计中。
        </p>
        <p>
          提供IT解决方案，项目工作流中计算机软件，开发环境的提前准备和部署等服务。
        </p>
        <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-100">
          注：域名服务器及OSS对象存储需自行购买，可提供选购建议。
        </p>
      </div>
    )
  },
  {
    title: "单次PPT设计",
    description: "PPT中仅应用少量高级设计。",
    price: (
      <>
        59元/每次 <span className="text-sm text-slate-400 font-normal ml-1">10页以上按每页7元收费</span>
      </>
    ),
    modalPrice: (
      <div className="flex flex-col">
        <span>59元/每次</span>
        <span className="text-sm text-slate-400 font-normal mt-1">10页以上按每页7元收费</span>
      </div>
    ),
    icon: FileText,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>适合日常作业展示、简单的汇报演讲。</p>
      </div>
    )
  },
  {
    title: "安生学校模型场景视频定制",
    description: "使用云主机渲染，成品最高以8K@60Hz MOV格式视频交付。",
    price: "29.9元/10条",
    icon: Video,
    details: (
      <div className="space-y-4 text-slate-600">
        <p>基于安生学校的 Minecraft 3D 模型进行场景漫游视频制作。</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>支持指定开关灯状态（如：全校开灯、多个或单个学部开灯）。</li>
          <li>支持指定运镜轨迹（如：从校门飞至操场）。</li>
          <li>支持指定时间（清晨/正午/黄昏/夜晚）的光影渲染。</li>
        </ul>
      </div>
    )
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">有个事情</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            我想娄你的米
          </p>
          <p className="mt-4 max-w-2xl text-base text-slate-500 mx-auto px-8 sm:px-0">
            如果有需要，你可以订阅以下服务，我有一些技术积累和项目经验，你现在能够通过市场化的手段让我为你付出真心。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="inline-flex items-center justify-center p-3 bg-brand-50 text-brand-600 rounded-lg group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 w-fit">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 
                className="mt-6 text-xl font-bold text-slate-900"
              >
                {service.title}
              </h3>
              <p className="mt-4 text-slate-500 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-4 text-lg font-bold text-brand-600">
                {service.price}
              </div>
              <button 
                onClick={() => setSelectedService(service)}
                className="mt-6 inline-flex items-center text-brand-600 font-medium hover:text-brand-700 mt-auto w-fit transition-colors duration-300"
              >
                了解详情 <span className="ml-1 text-lg">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with blur and fade-in animation */}
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xl animate-fadeIn"
            onClick={handleClose}
          ></div>

          {/* Expanded Card with pop-in non-linear animation */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col animate-popIn overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button with Internal Blur */}
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={handleClose}
                className="p-2 text-slate-500 bg-white/50 backdrop-blur-xl border border-slate-100 hover:text-slate-700 hover:bg-white hover:shadow-md rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* FIXED HEADER: Icon & Title */}
            {/* Reduced top padding (pt-7/pt-8) to bring title closer to top */}
            <div className="flex-shrink-0 px-8 pt-7 pb-4 md:px-10 md:pt-8 md:pb-4">
              <div className="flex items-center space-x-4 pr-10"> {/* Right padding prevents overlap with absolute Close button */}
                <div className="p-3 bg-brand-50 text-brand-600 rounded-xl flex-shrink-0">
                  <selectedService.icon className="h-8 w-8" />
                </div>
                <h3 
                  className="text-xl md:text-3xl font-bold text-slate-900 max-w-[10.5rem] md:max-w-none text-balance"
                  style={{ textWrap: 'balance' }}
                >
                  {selectedService.modalTitle || selectedService.title}
                </h3>
              </div>
            </div>

            {/* SCROLLABLE BODY */}
            {/* The scrollbar starts here, below the fixed header (which is taller than the close button), satisfying the position requirement */}
            <div className="flex-grow overflow-y-auto px-8 pb-8 md:px-10 md:pb-10 mr-2 mb-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
              
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 font-medium mb-4">
                  {selectedService.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-sm uppercase tracking-wide text-brand-600 font-semibold mb-3">详细信息</h4>
                  {selectedService.details}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-2xl font-bold text-brand-600">
                    {selectedService.modalPrice || selectedService.price}
                  </div>
                  <button 
                     onClick={handleClose}
                     className="px-6 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};