import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function App() {
  return (
    <main className="flex min-w-screen min-h-screen">
      <div className="max-w-screen-lg max-h-screen-lg mx-4 lg:mx-auto">
        <div className="flex-auto flex flex-row pt-40 pb-52 px-2 md:px-0">
          <section>
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString("Hello, I'm RedBe-an.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("안녕하세요, RedBe-an입니다.")
                      .start();
                  }}
                />
              </h1>
              <div className="leading-7 [&:not(:first-child)]:mt-6">
                안녕하세요! 저는 RedBe-an이라는 백엔드 개발자이며, 깔끔하고 유지
                관리가 용이한 코드를 만드는 데 열정을 가지고 있습니다. 잘
                구조화된 코드는 개발 효율성을 높일 뿐만 아니라, 향후 유지 관리와
                확장성 작업을 간소화한다고 확신합니다.
                <div className="mb-4 mt-4" />
                다양한 기술과 프레임워크에 대한 경험을 통해 각 프로젝트의 특정
                요구 사항에 맞춘 강력한 백엔드 솔루션을 구축할 수 있습니다. 저는
                기능적일 뿐만 아니라 읽기 쉽고 이해하기 쉬운 코드를 생산하는 데
                전념하고 있습니다.
                <div className="mb-4 mt-4" />
                저는 지식 공유와 상호 학습이 장려되는 팀 중심의 환경에서
                뛰어납니다. 최신 도구와 방법론을 탐색하여 개발 프로세스를
                향상시키고 최상의 소프트웨어를 제공하는 데 열정적입니다.
                <div className="mb-4 mt-4" />
                혁신적이고 영향력 있는 프로젝트에 함께 협력하고 기여할 수 있는
                기회가 찾아오길 바랍니다!
                <div className="mb-4" />
              </div>
              <div className="leading-7 [&:not(:first-child)]:mt-6">
                <Button asChild>
                  <Link href="/about">
                    <ArrowUpRight className="mr-2 h-4 w-4" /> 더 알아보기
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
