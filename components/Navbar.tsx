import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLink[] = [
  { label: '首页', href: '/' },
  { label: '融高部技术指导组（原高中部计算机社团）', href: '/club' },
  { label: '济安复刻项目', href: '/jinan-project' },
  { label: '户晨风录播', href: '/huchenfeng' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check immediately on mount to prevent flash of wrong style
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 当滚动或菜单打开时，显示背景
  const showBackground = isScrolled || isOpen;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        pt-2 /* 适配 iPhone 顶部区域，略微下移 */
        ${showBackground 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"> {/* 增加两侧内边距适配圆角 */}
        {/* 固定高度容器 */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 flex items-center group"
            onClick={() => setIsOpen(false)}
          >
            <span 
              className={`text-xl font-bold tracking-wider transition-colors duration-300 ${
                showBackground ? 'text-slate-900' : 'text-white drop-shadow-md'
              }`}
            >
              翅季之站
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  text-sm font-medium transition-colors duration-300 relative group
                  ${showBackground 
                    ? 'text-slate-600 hover:text-brand-600' 
                    : 'text-slate-200 hover:text-white drop-shadow-sm'
                  }
                `}
              >
                {link.label}
                {/* 简单的下划线动画 */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${showBackground ? 'bg-brand-600' : 'bg-white'}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden relative z-50 p-2 -mr-2 rounded-md transition-colors duration-300
              ${showBackground 
                ? 'text-slate-900 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
              }
            `}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          md:hidden absolute top-full left-0 w-full 
          bg-white/95 backdrop-blur-xl shadow-lg
          transition-all duration-300 ease-in-out origin-top overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => {
                e.currentTarget.blur();
                setIsOpen(false);
              }}
              className="
                group flex items-center justify-between px-4 py-3
                rounded-xl text-base font-medium text-slate-700
                bg-slate-50 border border-slate-200 shadow-sm
                hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 hover:shadow-md transition-all duration-200
                focus:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500/20
              "
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 opacity-50 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-600" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};