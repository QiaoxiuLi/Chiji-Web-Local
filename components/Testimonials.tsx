import React from 'react';
import { Link } from 'react-router-dom';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-[480px] flex items-center py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start max-w-4xl pl-4 md:pl-20">
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl text-left">
            学校播控任务中<br/>遗留下来的媒体文件
          </h2>
          <p className="mt-6 text-xl text-slate-400">
            来看看李翘秀的技术经验<br/>是如何积累的？
          </p>
          <div className="mt-10">
            <Link to="/school-media" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors">
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};