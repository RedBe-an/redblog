import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-w-screen min-h-screen">
      <div className="max-w-screen-lg max-h-screen-lg mx-4 lg:mx-auto">
        <div className="flex-auto flex flex-row pt-10 pb-52 px-2 md:px-0 text-center">
          <section>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              About Me.
            </h1>
            <p className="text-lg text-muted-foreground mt-2 mb-6 font-medium">
              나에 대해서.
            </p>
            <AwardsSection />
            <ProjectsSection />
          </section>
        </div>
      </div>
    </main>
  );
}

const AwardsSection = () => {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        수상 경력 🏆
      </h2>
      <AwardItem
        year="2023"
        title="임베디드 소프트웨어 경진대회 틴 스타트업 부문"
        achievement="우수상(2등상)"
      />
      <AwardItem
        year="2023"
        title="한국코드페어 SW해커톤 중등부"
        achievement="본선 진출"
      />
    </div>
  );
};

function AwardItem(props: {
  year: string;
  title: string;
  achievement: string;
}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
      {props.year}년도 {props.title}
      <br />
      <strong>{props.achievement}</strong>
    </p>
  );
}

function ProjectsSection() {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        만든 것들 🧑‍💻
      </h2>
      <ProjectItem
        title="boj-toolkit"
        description="백준 문제를 쉽게 풀기 위한 CLI 프로그램."
        link="https://github.com/RedBe-an/boj-toolkit"
      />
    </div>
  );
}

function ProjectItem(props: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      <strong>{props.title}</strong>
      <br />
      <span className="leading-7 [&:not(:first-child)]:mt-6">
        {props.description}
      </span>
      <br />
      <Button variant="link" className="text-white">
        <Link href={props.link}>Github</Link>
      </Button>
    </p>
  );
}
