import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = 'pages/posts'

export function getPostsMeta() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // gray-matter로 메타데이터와 콘텐츠를 분리합니다.
    const { data } = matter(fileContents);
    
    // 'publishedAt', 'title', 'summary'만 추출합니다.
    const { publishedAt, title, summary } = data;

    return {
      fileName,
      publishedAt,
      title,
      summary,
    };
  });

  return allPostsData;
}
