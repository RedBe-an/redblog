export default function Posts() {
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
                {/* 이 안에 posts 폴더 안에 있는 mdx 파일의 헤더를 불러와 PostCard 컴포넌트에 넣는 겁니다. */}
              </div>
              <div className="mb-6"></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
