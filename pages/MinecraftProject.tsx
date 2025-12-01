
import React from 'react';
import { FileViewer } from '../components/FileViewer';
import { getOssImg } from '../utils/oss';
import { Link } from 'react-router-dom';

export const MinecraftProject: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] md:h-[800px] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={getOssImg("https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2070&auto=format&fit=crop", 2500)}
            alt="Minecraft Background" 
            className="w-full h-full object-cover animate-imageFadeIn"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Container for Centered Block with Left-Aligned Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
          <div className="inline-block text-left">
            <h1 className="text-white font-bold text-[25px] md:text-6xl leading-tight md:leading-tight drop-shadow-md">
              基于Minecraft的<br/>
              心理健康与学习支持<br/>
              校园云平台
            </h1>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative h-[300px] md:h-[600px] w-full bg-[#F8F8F8] flex items-center justify-center">
        {/* Logo at Top Left of this section */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-16 md:left-16">
          <img 
            src={getOssImg("assets/logo.png", 300)}
            alt="Logo" 
            className="w-16 md:w-32 h-auto object-contain" 
          />
        </div>
        
        <div className="text-center font-bold text-[16px] md:text-4xl text-slate-900 leading-relaxed md:leading-loose px-4">
          以游戏为桥梁打造学生心理疏导<br/>
          创意表达与教育融合的全新空间
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 md:py-32 bg-white w-full flex items-center justify-center border-t border-slate-50">
         <div className="text-center font-bold text-[14px] md:text-3xl text-slate-900 leading-normal px-4 flex flex-col items-center space-y-1 md:space-y-8">
            <p className="m-0">
              开发迭代超 <span className="text-[20px] md:text-6xl md:font-extrabold text-brand-600">100</span> 个版本的定制游戏插件
            </p>
            <p className="m-0">
              来自全国34个省的 <span className="text-[20px] md:text-6xl md:font-extrabold text-brand-600">707</span> 份调查问卷
            </p>
            <p className="m-0">
              耗时 <span className="text-[20px] md:text-6xl md:font-extrabold text-brand-600">1</span> 年搭建的校园建筑模型
            </p>
            <p className="m-0">
              播放量超 <span className="text-[20px] md:text-6xl md:font-extrabold text-brand-600">10</span> 万的发布会视频
            </p>
            <p className="m-0">
              <span className="text-[20px] md:text-6xl md:font-extrabold text-brand-600">23000</span> 字的红石教科书
            </p>
         </div>
      </div>

      {/* Team Members Section 1 (Image) */}
      <div className="relative w-full bg-[#F5F5F5] h-[340px] md:h-[900px] flex flex-col items-center overflow-hidden">
        {/* Title: 40px from top (mobile) */}
        <h2 className="absolute top-[40px] md:top-[100px] text-slate-900 font-bold text-[18px] md:text-5xl tracking-wide z-10">
          团队成员
        </h2>

        {/* Image: 75px from top (mobile) */}
        <div className="absolute top-[75px] md:top-[220px] z-0">
           <img 
             src={getOssImg("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", 1800)}
             alt="Team"
             className="w-[265px] h-[200px] md:w-[900px] md:h-[600px] object-cover border-[5px] md:border-[12px] border-white"
             style={{
               boxShadow: '7px 7px 19px 0px rgba(0, 0, 0, 0.25)'
             }}
           />
        </div>
      </div>

      {/* Team Members Section 2A: Names */}
      <div className="relative w-full bg-white h-[200px] md:h-[400px] flex flex-col items-center justify-center">
        <div className="w-[70%] max-w-[300px] md:max-w-4xl text-slate-900 font-light text-[10px] md:text-2xl z-10 tracking-wider">
           {/* Row 1: Centered */}
           <div className="flex justify-center gap-6 md:gap-16 mb-6 md:mb-16">
              <span>李翘秀 创始人</span>
              <span>邹正 军师</span>
           </div>
           {/* Row 2: Justified */}
           <div className="flex justify-between mb-2 md:mb-8">
              <span>杨欣怡 文学家</span>
              <span>段雨菲 艺术家</span>
              <span>王湘楠 技术主管</span>
           </div>
           {/* Row 3: Justified */}
           <div className="flex justify-between">
              <span>赵文博 技术总监</span>
              <span>宋秉泽 工程总监</span>
              <span>姜雅元 指导老师</span>
           </div>
        </div>
      </div>

      {/* Team Members Section 2B: Image + Advisors */}
      <div className="relative w-full bg-[#F2F2F2] py-16 md:py-24 flex flex-col items-center justify-center">
         <img 
           src={getOssImg("https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop", 2400)}
           alt="Team Collaboration"
           className="w-full max-w-[90%] md:max-w-[1200px] aspect-[16/9] object-cover border-[5px] md:border-[10px] border-white mb-8 md:mb-16"
           style={{
             boxShadow: '7px 7px 19px 0px rgba(0, 0, 0, 0.25)'
           }}
         />
        
        {/* Bottom Text Block: Core Academic Advisors */}
        <div className="w-[90%] max-w-4xl text-slate-900 font-light text-[10px] md:text-2xl tracking-wider flex flex-col items-center">
            <div className="mb-2 md:mb-4 font-normal">核心学术指导</div>
            <div className="flex gap-4 md:gap-12 font-medium">
               <span>刘芳舟</span>
               <span>窦云霄</span>
               <span>刘晓丽</span>
            </div>
        </div>
      </div>

      {/* Brochure Section */}
      <div className="relative w-full bg-white md:h-[1080px] flex flex-col items-center overflow-hidden">
        {/* Container for alignment: Width matches image width to ensure left-alignment of text relative to image */}
        <div className="relative w-[210px] md:w-[450px] md:h-full flex flex-col md:block pt-[40px] pb-[30px] md:py-0">
            {/* Text: Enlarged and shifted. Top: 40px (Mobile), 90px (PC) */}
            <div className="text-slate-900 font-bold text-[18px] md:text-4xl leading-tight md:leading-snug z-10 text-left mb-[25px] md:mb-0 md:absolute md:top-[90px] md:left-0">
                <div>查看宣传册</div>
                <div className="mt-1 md:mt-2">了解项目信息</div>
            </div>

            {/* Image: Positioned lower to make room for text */}
            <Link 
                to="/gallery/brochure"
                className="block group md:absolute md:top-[250px] md:left-0"
            >
                <img 
                    src={getOssImg("https://images.unsplash.com/photo-1544967082-d9d3fdd1c943?q=80&w=1974&auto=format&fit=crop", 900)}
                    alt="Brochure"
                    className="w-[210px] h-[297px] md:w-[450px] md:h-[640px] object-cover rounded-[11px] md:rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                    style={{
                        boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)'
                    }}
                />
            </Link>

            {/* Caption: Bottom distance matches Top distance */}
            <div className="text-center text-slate-900 font-bold text-[10px] md:text-[22px] z-10 w-full mt-[30px] md:mt-0 md:absolute md:bottom-[90px] md:left-0">
                *点击上方缩略图查看全部
            </div>
        </div>
      </div>

      {/* Bilibili Video Section */}
      <div className="relative w-full bg-[#F2F2F2] h-[400px] md:h-[750px] flex flex-col items-center overflow-hidden">
         {/* Container for alignment matching enlarged image width */}
         <div className="relative w-[320px] md:w-[600px] h-full">
            
            {/* Text 1: Enlarged. Top: 60px */}
            <div className="absolute top-[60px] md:top-[160px] left-0 text-slate-900 font-bold text-[20px] md:text-4xl leading-tight z-10">
                <div>Bilibili</div>
                <div className="mt-1 md:mt-2">发布会视频</div>
            </div>

            {/* Image: Enlarged */}
            <a 
                href="https://www.bilibili.com" 
                target="_blank"
                rel="noreferrer"
                className="absolute top-[130px] md:top-[280px] left-0 block group"
            >
                <img 
                    src={getOssImg("https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2069&auto=format&fit=crop", 1200)}
                    alt="Bilibili Video"
                    className="w-[320px] h-[180px] md:w-[600px] md:h-[338px] object-cover rounded-[12px] md:rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                    style={{
                        boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)'
                    }}
                />
            </a>

            {/* Text 2: Centered in remaining space relative to image bottom and container bottom */}
            {/* Mobile: Image ends at 310px. PC: Image ends at 618px (280+338) */}
            <div className="absolute top-[310px] bottom-0 md:top-[618px] w-full flex items-center justify-center z-10">
                <span className="text-slate-900 font-bold text-[10px] md:text-[22px]">*点击上方缩略图跳转至Bilibili</span>
            </div>
         </div>
      </div>

      {/* Final Presentation PPT Section */}
      <div className="relative w-full bg-white h-[660px] md:h-[1450px] flex flex-col items-center overflow-hidden">
         {/* Container for alignment matching image width */}
         <div className="relative w-[252px] md:w-[554px] h-full">
            
            {/* --- Item 1: Final Presentation PPT --- Top: 40px (Mobile), 90px (PC) */}
            <div className="absolute top-[40px] md:top-[90px] left-0 text-slate-900 font-bold text-[14px] md:text-[22px] leading-tight z-10">
                Final Presentation PPT
            </div>
            <Link to="/gallery/final-ppt" className="absolute top-[68px] md:top-[150px] left-0 block group">
                 <img 
                    src={getOssImg("https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop", 1100)}
                    alt="Final Presentation PPT"
                    className="w-[252px] h-[142px] md:w-[554px] md:h-[312px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                    style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                 />
            </Link>

            {/* --- Item 2: Global PPT --- Top: 240px (Mobile), 522px (PC) */}
            <div className="absolute top-[240px] md:top-[522px] left-0 text-slate-900 font-bold text-[14px] md:text-[22px] leading-tight z-10">
                查看全球赛PPT
            </div>
            <Link to="/gallery/global-ppt" className="absolute top-[268px] md:top-[582px] left-0 block group">
                 <img 
                    src={getOssImg("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop", 1100)}
                    alt="Global PPT"
                    className="w-[252px] h-[142px] md:w-[554px] md:h-[312px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                    style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                 />
            </Link>

            {/* --- Item 3: National PPT --- Top: 440px (Mobile), 954px (PC) */}
            <div className="absolute top-[440px] md:top-[954px] left-0 text-slate-900 font-bold text-[14px] md:text-[22px] leading-tight z-10">
                查看全国赛PPT
            </div>
            <Link to="/gallery/national-ppt" className="absolute top-[468px] md:top-[1014px] left-0 block group">
                 <img 
                    src={getOssImg("https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", 1100)}
                    alt="National PPT"
                    className="w-[252px] h-[142px] md:w-[554px] md:h-[312px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                    style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                 />
            </Link>

            {/* --- Footer --- Centered in remaining space */}
            {/* Mobile: Last image ends at 610px. PC: Ends at 1326px */}
            <div className="absolute top-[610px] bottom-0 md:top-[1326px] w-full flex items-center justify-center z-10">
                <span className="text-slate-900 font-bold text-[10px] md:text-[22px]">*点击上方缩略图查看全部</span>
            </div>
         </div>
      </div>

      {/* Project Poster Section */}
      <div className="relative w-full bg-[#F2F2F2] h-[380px] md:h-[840px] flex flex-col items-center overflow-hidden">
         {/* Container for alignment matching image width */}
         <div className="relative w-[309px] md:w-[680px] h-full">
            
            {/* Title Top: 40px (Mobile), 90px (PC) */}
            <div className="absolute top-[40px] md:top-[90px] left-0 text-slate-900 font-bold text-[14px] md:text-[30px] leading-tight z-10">
                查看项目海报
            </div>

            {/* Image Top: 72px (Mobile), 160px (PC) */}
            <Link 
                to="/gallery/poster"
                className="absolute top-[72px] md:top-[160px] left-0 block group"
            >
                <img 
                    src={getOssImg("https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=2070&auto=format&fit=crop", 1360)}
                    alt="Project Poster"
                    className="w-[309px] h-[232px] md:w-[680px] md:h-[510px] object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                        boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)'
                    }}
                />
            </Link>

            {/* Caption: Bottom distance matches Top distance roughly */}
            <div className="absolute bottom-[40px] md:bottom-[90px] w-full text-center text-slate-900 font-bold text-[10px] md:text-[22px] z-10">
                *点击上方缩略图查看原图
            </div>
         </div>
      </div>

      {/* Paper & Redstone Textbook Section */}
      <div className="relative w-full bg-white h-[285px] md:h-[630px] flex flex-col items-center overflow-hidden">
         <div className="relative w-[235px] md:w-[515px] h-full">
            
            {/* Left Item: Paper */}
            <div className="absolute top-[40px] md:top-[90px] left-0 w-[107px] md:w-[235px] flex flex-col items-center">
                <div className="text-slate-900 font-bold text-[12px] md:text-[18px] leading-tight mb-[11px] md:mb-[24px] whitespace-nowrap">
                    论文 · 邹正
                </div>
                <Link to="/gallery/paper" className="block group w-full">
                    <img 
                        src={getOssImg("https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop", 500)}
                        alt="Paper Zou Zheng"
                        className="w-full h-[151px] md:h-[332px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                        style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                    />
                </Link>
            </div>

            {/* Right Item: Redstone Textbook */}
            <div className="absolute top-[40px] md:top-[90px] right-0 w-[107px] md:w-[235px] flex flex-col items-center">
                <div className="text-slate-900 font-bold text-[12px] md:text-[18px] leading-tight mb-[11px] md:mb-[24px] whitespace-nowrap">
                    红石教科书 · 宋秉泽
                </div>
                <Link to="/gallery/redstone" className="block group w-full">
                    <img 
                        src={getOssImg("https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop", 500)}
                        alt="Redstone Textbook"
                        className="w-full h-[151px] md:h-[332px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                        style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                    />
                </Link>
            </div>

            {/* Footer Caption */}
            <div className="absolute bottom-[20px] md:bottom-[50px] w-full text-center text-slate-900 font-bold text-[10px] md:text-[22px]">
                *点击上方缩略图查看全部
            </div>
         </div>
      </div>

      {/* The Wandering Earth II Section */}
      <div className="relative w-full bg-[#F2F2F2] h-[440px] md:h-[970px] flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center">
              <img 
                  src={getOssImg("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop", 1400)}
                  alt="The Wandering Earth II"
                  className="w-[318px] h-[260px] md:w-[700px] md:h-[572px] object-cover border-[8px] md:border-[18px] border-white"
                  style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
              />
              <div className="mt-[32px] md:mt-[70px] text-slate-900 font-normal text-[14px] md:text-[22px]">
                  The Wandering Earth II
              </div>
          </div>
      </div>

      {/* Discussion & Poster Section (New) */}
      <div className="relative w-full bg-white h-[285px] md:h-[630px] flex flex-col items-center overflow-hidden">
         <div className="relative w-[235px] md:w-[515px] h-full">
            
            {/* Left Item */}
            <div className="absolute top-[40px] md:top-[90px] left-0 w-[107px] md:w-[235px] flex flex-col items-center">
                <div className="text-slate-900 font-bold text-[12px] md:text-[18px] leading-tight mb-[11px] md:mb-[24px] text-center">
                    发布会仿拍<br/>二期讨论计划
                </div>
                <Link to="/gallery/discussion" className="block group w-full">
                    <img 
                        src={getOssImg("https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", 500)}
                        alt="Discussion Plan"
                        className="w-full h-[151px] md:h-[332px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                        style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                    />
                </Link>
            </div>

            {/* Right Item */}
            <div className="absolute top-[40px] md:top-[90px] right-0 w-[107px] md:w-[235px] flex flex-col items-center">
                <div className="text-slate-900 font-bold text-[12px] md:text-[18px] leading-tight mb-[11px] md:mb-[24px] text-center">
                    全国赛<br/>路演海报
                </div>
                <Link to="/gallery/roadshow-poster" className="block group w-full">
                    <img 
                        src={getOssImg("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", 500)}
                        alt="Roadshow Poster"
                        className="w-full h-[151px] md:h-[332px] object-cover rounded-[8px] md:rounded-[16px] transition-transform duration-300 group-hover:scale-105"
                        style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.25)' }}
                    />
                </Link>
            </div>

            {/* Footer Caption */}
            <div className="absolute bottom-[20px] md:bottom-[50px] w-full text-center text-slate-900 font-bold text-[10px] md:text-[22px]">
                *点击上方缩略图查看全部
            </div>
         </div>
      </div>

      {/* File Viewer (Files Only) */}
      <FileViewer 
        title="" 
        configPath="/oss-config/minecraft-project.txt"
        heroImage={undefined}
        showSeparator={false}
        hideHeader={true}
        className="bg-[#F2F2F2]"
      />

      {/* Copyright Footer */}
      <div className="w-full bg-[#F2F2F2] pb-8 flex justify-center">
          <span className="text-slate-400 font-normal text-[10px] md:text-[12px]">
            ©2025 Campus Technology Benefactors 保留所有权力。
          </span>
      </div>
    </div>
  );
};
