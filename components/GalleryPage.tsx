import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getOssImg } from '../utils/oss';

interface GalleryPageProps {
  images: string[];
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ images }) => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isSingle = images.length === 1;

  const handleActivity = () => {
    setShowButton(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    // Auto-hide after 3 seconds of inactivity
    timerRef.current = setTimeout(() => {
      setShowButton(false);
    }, 3000);
  };

  const handleContainerClick = () => {
    if (isSingle) {
      // Toggle button visibility on click for single image view
      if (showButton) {
        setShowButton(false);
        if (timerRef.current) clearTimeout(timerRef.current);
      } else {
        setShowButton(true);
        // Do not auto-hide immediately if manually toggled on
      }
    } else {
      // For scrollable list, click just registers as activity
      handleActivity();
    }
  };

  useEffect(() => {
    // Initial setup
    handleActivity();

    const onActivity = () => {
      handleActivity();
    };

    // Attach scroll listener to the container if it's the scrolling element
    const container = containerRef.current;
    if (container && !isSingle) {
        container.addEventListener('scroll', onActivity);
    }

    // Listen to various interaction events
    window.addEventListener('touchmove', onActivity);
    window.addEventListener('mousemove', onActivity);
    window.addEventListener('keydown', onActivity);
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', onActivity);
      }
      window.removeEventListener('touchmove', onActivity);
      window.removeEventListener('mousemove', onActivity);
      window.removeEventListener('keydown', onActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isSingle]);

  // Minimalist scrollbar styles for non-single image views
  const scrollbarStyles = !isSingle 
    ? "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600"
    : "";

  return (
    <div 
      ref={containerRef}
      className={`
        fixed inset-0 bg-slate-900 z-[100] flex flex-col 
        ${isSingle 
          ? 'justify-center items-center overflow-hidden' 
          : `overflow-y-auto overflow-x-hidden pt-20 pb-8 items-center ${scrollbarStyles}`
        }
      `}
      onClick={handleContainerClick}
    >
       {images.map((src, idx) => (
         <div key={idx} className={`w-full flex justify-center px-4 ${isSingle ? 'h-full items-center p-0' : 'mb-8 last:mb-0 min-h-0 shrink-0'}`}>
             <img 
               src={getOssImg(src)} 
               alt={`Gallery Item ${idx + 1}`}
               // outline-none removes the black focus line
               className={`
                 max-w-full w-auto h-auto object-contain shadow-2xl rounded-sm 
                 outline-none focus:outline-none select-none
                 ${isSingle ? 'max-h-full' : ''}
               `}
               onDragStart={(e) => e.preventDefault()}
             />
         </div>
       ))}

       <button
         onClick={(e) => {
           e.stopPropagation(); // Prevent container click
           navigate(-1); // Return to previous page preserving scroll position
         }}
         className={`
            fixed bottom-8 right-8 z-[101] flex items-center gap-2 px-6 py-3 
            bg-white/90 backdrop-blur-md border border-white/40 shadow-2xl rounded-full 
            text-slate-900 font-bold hover:bg-white hover:scale-105 active:scale-95
            transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}
         `}
       >
         <ArrowLeft className="w-5 h-5" />
         <span>返回上一级</span>
       </button>
    </div>
  );
};