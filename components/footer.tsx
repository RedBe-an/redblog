function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <div className="max-w-screen-lg mx-4 lg:mx-auto">
      <div className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
        <footer className="mb-16">
          <ul className="font-sm font-medium flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/RedBe-an"
              >
                <ArrowIcon />
                <p className="ml-2">github</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.com/users/1051121269355073588/1051121269355073588"
              >
                <ArrowIcon />
                <p className="ml-2">discord</p>
              </a>
            </li>
          </ul>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 font-medium">
            © {new Date().getFullYear()} MIT Licensed
          </p>
        </footer>
      </div>
    </div>
  );
}
