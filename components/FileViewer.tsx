import React, { useState, useEffect, useRef } from 'react';
import { FileText, Download, AlertCircle, Folder, ChevronRight, ArrowLeft, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getOssImg } from '../utils/oss';

interface FileNode {
  name: string;
  type: string; // "folder" or specific file type
  link: string;
  children?: FileNode[]; // For folders
}

interface FileViewerProps {
  title: React.ReactNode;
  configPath: string;
  heroImage?: string;
  showSeparator?: boolean;
  hideHeader?: boolean;
  className?: string;
}

export const FileViewer: React.FC<FileViewerProps> = ({ 
  title, 
  configPath, 
  heroImage, 
  showSeparator = true,
  hideHeader = false,
  className = "bg-white"
}) => {
  const [rootFiles, setRootFiles] = useState<FileNode[]>([]);
  const [currentFiles, setCurrentFiles] = useState<FileNode[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<{ name: string; files: FileNode[] }[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [showBackHome, setShowBackHome] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Load configuration
  useEffect(() => {
    setLoading(true);
    setError(null);
    setBreadcrumbs([]);
    
    fetch(configPath)
      .then(res => {
        if (!res.ok) {
          throw new Error('无法加载配置文件');
        }
        return res.text();
      })
      .then(text => {
        try {
          const parsedData = parseConfig(text);
          setRootFiles(parsedData);
          setCurrentFiles(parsedData);
          setBreadcrumbs([{ name: '文件列表', files: parsedData }]);
        } catch (e) {
          console.error(e);
          setError('解析配置文件失败，请检查格式');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('加载文件列表失败');
        setLoading(false);
      });
  }, [configPath]);

  // Intersection Observer for Back to Home button
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when the file viewer container is in view
        setShowBackHome(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Recursive parser for the custom format
  const parseConfig = (text: string): FileNode[] => {
    let index = 0;
    const len = text.length;

    const skipWhitespace = () => {
      while (index < len && /\s/.test(text[index])) index++;
    };

    const parseValue = () => {
      skipWhitespace();
      if (text[index] === '"') {
        index++; // skip opening quote
        let start = index;
        while (index < len && text[index] !== '"') index++;
        const val = text.substring(start, index);
        index++; // skip closing quote
        return val;
      }
      return '';
    };

    const parseFile = (): FileNode => {
      index++; // skip '{'
      const node: any = {};
      
      while (index < len && text[index] !== '}') {
        skipWhitespace();
        
        let start = index;
        while (index < len && /[a-zA-Z0-9_]/.test(text[index])) index++;
        const key = text.substring(start, index);
        
        skipWhitespace();
        if (text[index] === '=') index++; 
        
        const val = parseValue();
        node[key] = val;
        
        skipWhitespace();
        if (text[index] === ',') index++; 
      }
      
      if (index < len && text[index] === '}') index++; 

      return {
        name: node.name || '未命名',
        type: node.type || 'unknown',
        link: node.link || '#'
      };
    };

    const parseNodes = (): FileNode[] => {
      const nodes: FileNode[] = [];
      
      while (index < len) {
        skipWhitespace();
        if (index >= len) break;

        if (index >= len) break;

        if (text[index] === '}') {
          break;
        }

        if (text[index] === ',') {
          index++;
          continue;
        }

        if (text[index] === '{') {
          nodes.push(parseFile());
        } else {
          let start = index;
          while (index < len && text[index] !== '{' && text[index] !== '}' && text[index] !== ',') {
            index++;
          }
          
          if (index < len && text[index] === '{') {
            const folderName = text.substring(start, index).trim();
            index++; 
            
            const children = parseNodes();
            
            nodes.push({
              name: folderName,
              type: 'folder',
              link: '',
              children: children
            });

            if (index < len && text[index] === '}') {
              index++;
            }
          } else {
             index++;
          }
        }
      }
      return nodes;
    };

    return parseNodes();
  };

  const handleItemClick = (item: FileNode) => {
    if (item.type === 'folder' && item.children) {
      const newPath = [...breadcrumbs, { name: item.name, files: item.children }];
      setBreadcrumbs(newPath);
      setCurrentFiles(item.children);
    } else {
      setSelectedFile(item);
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    const newPath = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newPath);
    setCurrentFiles(newPath[newPath.length - 1].files);
  };

  const handleBack = () => {
    if (breadcrumbs.length > 1) {
      handleBreadcrumbClick(breadcrumbs.length - 2);
    }
  };
  
  const handleConfirmDownload = () => {
    if (selectedFile) {
      const link = document.createElement('a');
      link.href = selectedFile.link;
      link.setAttribute('download', selectedFile.name); 
      link.target = '_blank'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setSelectedFile(null);
    }
  };

  const handleBackHome = () => {
    // Check path to determine where to scroll on home page
    const path = location.pathname;
    let targetSection = '';

    // Map sub-pages to their corresponding sections on the home page
    if (path.includes('minecraft-project')) {
      targetSection = 'about';
    } else if (path.includes('xiaomi-showcase')) {
      targetSection = 'minecraft-showcase';
    } else if (path.includes('school-media')) {
      targetSection = 'testimonials';
    }
    
    // Note: Navbar items (Club, JinanProject, Huchenfeng) default to top of home page
    // per user requirement "If it's a page in the navbar, then returning to the top is fine."

    if (targetSection) {
      navigate('/', { state: { scrollTo: targetSection } });
    } else {
      navigate('/');
    }
  };

  return (
    <div ref={containerRef} className={`${className} flex flex-col ${hideHeader ? '' : 'min-h-screen'}`}>
      {/* Back to Home Button with Non-linear Exit/Enter Animation */}
      <button
        onClick={handleBackHome}
        className={`
          fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 
          bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-full 
          text-slate-900 font-bold hover:bg-white/90 
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${showBackHome 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-90 pointer-events-none'
          }
        `}
        aria-label="返回首页"
      >
        <Home className="w-5 h-5 text-brand-600" />
        <span>返回首页</span>
      </button>

      {/* Header Section */}
      {!hideHeader && (
        heroImage ? (
          <div 
            className="relative h-[500px] w-full bg-slate-900 overflow-hidden flex-shrink-0"
          >
            <div className="absolute inset-0">
               <img 
                 key={heroImage} 
                 src={getOssImg(heroImage, 2500, 'webp')}
                 alt="Background" 
                 className="w-full h-full object-cover animate-imageFadeIn"
               />
               <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative h-full flex items-center justify-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight tracking-tight shadow-sm max-w-5xl animate-fadeIn">
                {title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto w-full text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {title}
            </h1>
            {showSeparator && <div className="w-24 h-1 bg-brand-600 mx-auto"></div>}
          </div>
        )
      )}

      {/* Main Content Area */}
      <div className={`flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`}>
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 flex flex-col shadow-xl overflow-hidden h-full max-h-[800px]">
            
            {/* Navigation Bar */}
            {!loading && !error && (
              <div className="flex-shrink-0 flex items-center mb-4 pb-4 border-b border-slate-200 overflow-x-auto scrollbar-hide">
                 {breadcrumbs.length > 1 && (
                    <button 
                      onClick={handleBack}
                      className="mr-3 p-1.5 rounded-md hover:bg-slate-200 text-slate-500 transition-colors flex-shrink-0"
                      title="返回上一级"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                 )}
                 <div className="flex items-center text-sm text-slate-600 whitespace-nowrap">
                    {breadcrumbs.map((crumb, index) => (
                      <div key={index} className="flex items-center">
                        {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-slate-400" />}
                        <span 
                          onClick={() => handleBreadcrumbClick(index)}
                          className={`cursor-pointer hover:text-brand-600 transition-colors ${
                            index === breadcrumbs.length - 1 ? 'font-bold text-slate-900' : ''
                          }`}
                        >
                          {crumb.name}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
              {loading && <div className="text-center text-slate-500 py-10">正在加载文件列表...</div>}
              
              {error && (
                <div className="text-center text-slate-500 flex flex-col items-center py-10">
                  <AlertCircle className="h-10 w-10 text-slate-400 mb-2" />
                  <p>{error}</p>
                </div>
              )}

              {!loading && !error && currentFiles.length === 0 && (
                <div className="text-center text-slate-400 py-10 italic">
                  此文件夹为空
                </div>
              )}

              <div className="space-y-3 pb-2">
                {currentFiles.map((file, index) => (
                  <div 
                    key={index}
                    onClick={() => handleItemClick(file)}
                    className={`bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md cursor-pointer transition-all duration-200 group ${
                      file.type === 'folder' ? 'hover:border-brand-300' : 'hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-md transition-colors ${
                        file.type === 'folder' 
                          ? 'bg-amber-50 text-amber-500 group-hover:bg-amber-100 group-hover:text-amber-600' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600'
                      }`}>
                        {file.type === 'folder' ? <Folder className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{file.name}</h4>
                        <p className="text-xs text-slate-400 uppercase">{file.type}</p>
                      </div>
                    </div>
                    
                    {file.type === 'folder' ? (
                      <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-500 transition-colors" />
                    ) : (
                      <Download className="h-5 w-5 text-slate-300 group-hover:text-brand-600 transition-colors" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      {/* Confirmation Modal */}
      {selectedFile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setSelectedFile(null)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 animate-popIn">
            <h3 className="text-lg font-bold text-slate-900 mb-2">下载确认</h3>
            <p className="text-slate-600 mb-6">
              您确定要下载 "{selectedFile.name}" 吗？
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setSelectedFile(null)}
                className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-medium transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleConfirmDownload}
                className="flex-1 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium transition-colors"
              >
                确认下载
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};