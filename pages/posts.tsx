import { GetStaticProps } from 'next';
import { getPostsMeta } from '../lib/getPostsMeta';
import { PostCard } from '@/components/postcard';

type Post = {
  fileName: string;
  publishedAt: string;
  title: string;
  summary: string;
};

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsMeta();
  return {
    props: {
      posts,
    },
  };
};


const PostPage: React.FC<Props> = ({ posts }) => {
  return (
    <main className="min-h-screen">
      <div className="max-w-screen-lg max-h-screen-lg lg:mx-auto">
        <div className="md:px-4 lg:px-4">
          <section>
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                글 목록
              </h1>
              <div className="leading-7 [&:not(:first-child)]:mt-6">
                지금까지 배웠던 것들과의 기록들
              </div>
              <div className="[&:not(:first-child)]:mt-6">
                {posts.map((post) => (
                  <>
                    <PostCard
                      title={post.title}
                      summary={post.summary}
                      publishedAt={post.publishedAt} />
                    <div className="mb-6" />
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PostPage;