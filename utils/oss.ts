
export const getOssImg = (url: string | undefined, width?: number, format?: 'webp' | 'avif'): string => {
  if (!url) return '';
  if (url.startsWith('data:')) return url;

  // Skip OSS processing for Unsplash images to prevent breaking current placeholders
  if (url.includes('unsplash.com')) {
    return url;
  }

  // Determine separator based on existing query parameters
  const separator = url.includes('?') ? '&' : '?';

  // Check if the URL points to a video file
  const isVideo = /\.(mp4|mov|webm|avi|mkv)(\?|$)/i.test(url);

  if (isVideo) {
    // For video files, generate a snapshot
    // t_1000: snapshot at 1000ms (1 second)
    // f_jpg: output format jpg (standard for snapshots)
    // ar_auto: keep aspect ratio
    let processParams = `video/snapshot,t_1000,f_jpg,ar_auto`;
    if (width) {
      processParams += `,w_${width}`;
    }
    return `${url}${separator}x-oss-process=${processParams}`;
  }

  // For image files, build processing actions
  const actions: string[] = [];

  // Action 1: Resize
  if (width) {
    actions.push(`image/resize,w_${width},m_lfit`);
  }

  // Action 2: Format conversion (if specified, usually for webp or avif)
  if (format) {
    actions.push(`image/format,${format}`);
  }

  // If no processing needed, return original URL
  if (actions.length === 0) return url;

  // Join actions with forward slash for Aliyun OSS sequential processing
  return `${url}${separator}x-oss-process=${actions.join('/')}`;
};
