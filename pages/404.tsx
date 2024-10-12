import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(3);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        router.push("/");
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [router, timeLeft]);

  return (
    <main className="flex min-w-screen min-h-screen justify-between">
      <div className="max-w-screen-lg max-h-screen-lg mx-4 lg:mx-auto">
        <div className="flex-auto flex flex-col pt-48 pb-52 px-2 md:px-0">
          <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              404 - 페이지가 존재하지 않음
            </h1>
            <p className="mb-4">길을 잃어버리신 거 같네요.</p>
            <p className="mb-4">{timeLeft}초 후에 메인 페이지로 이동합니다.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
