import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="
        flex flex-wrap justify-between items-center w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <div>
        <Link href="/" passhref>
          <a>
            <img
              className="m-3"
              src="/starmovie.png"
              width={200}
              height={50}
              alt="Movie Logo"
            />
          </a>
        </Link>
      </div>
      <div id="menu">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/">
              <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/films">
              <a className="md:p-2 py-2 block hover:text-purple-400">Films</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
