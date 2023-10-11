import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="w-full h-10">
      <button
        className={
          currentPage === "/"
            ? "active:bg-violet-700 focus:ring focus:ring-violet-50"
            : "bg-violet-400"
        }
      >
        <Link to="/">Home</Link>
      </button>
      <button
        className={
          currentPage === "/projects"
            ? "active:bg-violet-700 focus:ring focus:ring-violet-50"
            : "bg-violet-400"
        }
      >
        <Link to="/projects">Projects</Link>
      </button>
      <button
        className={
          currentPage === "/contact"
            ? "active:bg-violet-700 focus:ring focus:ring-violet-50"
            : "bg-violet-400"
        }
      >
        <Link to="/contact">Contact</Link>
      </button>
    </nav>
  );
}
