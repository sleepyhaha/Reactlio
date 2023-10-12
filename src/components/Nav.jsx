import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="w-screen h-16 bg-slate-700 text-slate-300 text-center flex sticky z-100 px-4">
      <button className="rounded-md  p-7 active:ring hover:bg-slate-600 active:ring-slate-200">
        <Link to="/" className="relative bottom-2 font-bold">
          Home
        </Link>
      </button>
      <button className="rounded-md  p-7 active:ring hover:bg-slate-600 active:ring-slate-200">
        <Link to="/projects" className="relative bottom-2 font-bold">
          Projects
        </Link>
      </button>
      <button className="rounded-md p-7 active:ring hover:bg-slate-600 active:ring-slate-200">
        <Link to="/contact" className="relative bottom-2 font-bold">
          Contact
        </Link>
      </button>
    </nav>
  );
}
