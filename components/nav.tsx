import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/posts": {
    name: "posts",
  },
  "/about": {
    name: "about",
  },
};

export function Navbar() {
  return (
    <div className="max-w-screen-lg mx-4 mt-8 lg:mx-auto">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <aside className="-ml-[8px] mb-16 tracking-tight">
          <div className="lg:sticky lg:tp-20">
            <nav
              className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative font-light"
              id="nav"
            >
              <div className="flex flex-row space-x-0 pr-10">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="transition-all hover:text-neutral-500 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1 text-lg"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
