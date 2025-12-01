
import React from 'react';
import { Tv2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center text-white mb-4">
              <span className="text-xl font-bold">Qiaoxiu's Website</span>
            </div>
            <p className="text-sm leading-relaxed">
              Programing in my home<br />
              Deploy in California
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">友情链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">济南市安生学校高中部学生会</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                <Tv2 className="h-5 w-5" />
                <span>Bilibili</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Li Qiaoxiu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
