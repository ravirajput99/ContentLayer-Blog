import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";

export const Header = () => {
  return (
    <header className="w-full px-10 flex items-center justify-between p-4">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark flex items-center rounded-full font-medium capitalize gap-4 fixed top-6 translate-x-1/2 right-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a href="" className={"inline-block w-6 h-6 mr-4"}>
          <LinkedInIcon
            className={"hover:scale-125 transition-all ease duration-200"}
          />
        </a>
        <a href="" className={"inline-block w-6 h-6 mr-4"}>
          <GithubIcon
            className={"hover:scale-125 transition-all ease duration-200"}
          />
        </a>
        <a href="" className={"inline-block w-6 h-6 mr-4"}>
          <TwitterIcon
            className={"hover:scale-125 transition-all ease duration-200"}
          />
        </a>
        <a href="" className={"inline-block w-6 h-6 mr-4"}>
          <DribbbleIcon
            className={"hover:scale-125 transition-all ease duration-200"}
          />
        </a>
      </div>
    </header>
  );
};
