import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { GalleryPage } from './components/GalleryPage';

// Pages
import { Home } from './pages/Home';
import { Club } from './pages/Club';
import { JinanProject } from './pages/JinanProject';
import { Huchenfeng } from './pages/Huchenfeng';
import { MinecraftProject } from './pages/MinecraftProject';
import { XiaomiShowcase } from './pages/XiaomiShowcase';
import { SchoolMedia } from './pages/SchoolMedia';

// Layout component for pages that require Navbar and Footer
const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900 relative flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Application Routes (wrapped in MainLayout) */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route ensures Home is the default page rendered at root path */}
          <Route index element={<Home />} />
          
          <Route path="club" element={<Club />} />
          <Route path="jinan-project" element={<JinanProject />} />
          <Route path="huchenfeng" element={<Huchenfeng />} />
          <Route path="minecraft-project" element={<MinecraftProject />} />
          <Route path="xiaomi-showcase" element={<XiaomiShowcase />} />
          <Route path="school-media" element={<SchoolMedia />} />
        </Route>

        {/* Standalone Gallery Routes (No Navbar/Footer) */}
        {/* Gallery Routes - 在这里添加更多图片链接，使用逗号分隔 */}
        <Route path="/gallery/school-guide" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
            // "https://your-oss-link.com/image2.jpg",
          ]} />
        } />
        
        <Route path="/gallery/brochure" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1544967082-d9d3fdd1c943?q=80&w=1974&auto=format&fit=crop",
            // 在此处添加宣传册的其他页面链接
          ]} />
        } />
        
        <Route path="/gallery/final-ppt" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
            // 在此处添加PPT的其他页面链接
          ]} />
        } />
        
        <Route path="/gallery/global-ppt" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/national-ppt" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/poster" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=2070&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/paper" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/redstone" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/discussion" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
          ]} />
        } />
        
        <Route path="/gallery/roadshow-poster" element={
          <GalleryPage images={[
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
          ]} />
        } />

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;