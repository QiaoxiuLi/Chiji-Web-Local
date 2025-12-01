import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // 检查导航状态中是否有指定滚动的目标 ID
    if (state && (state as any).scrollTo) {
      const elementId = (state as any).scrollTo;
      
      // 尝试立即获取元素并同步滚动
      // 在 useLayoutEffect 中执行会阻止浏览器先绘制顶部位置，从而避免视觉上的"跳变"或"闪烁"
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        // 后备方案：如果因某些原因元素尚未渲染（极少情况），使用 requestAnimationFrame 在下一帧尽快执行
        requestAnimationFrame(() => {
          const el = document.getElementById(elementId);
          if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        });
      }
    } else if (navigationType !== 'POP') {
      // 如果不是历史记录的前进/后退（POP），且没有指定目标，则滚动到顶部
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType, state]);

  return null;
}