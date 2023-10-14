import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-screen h-16 bg-slate-700 text-slate-300 text-center flex sticky z-100 px-4">
      <Link to="/" className="relative font-bold">
        <button className="rounded-md p-5 hover:bg-slate-500 active:ring-slate-200">
          Home
        </button>
      </Link>
      <Link to="/projects" className="relative  font-bold">
        <button className="rounded-md  p-5 active:ring hover:bg-slate-500 active:ring-slate-200">
          Projects
        </button>
      </Link>
      <Link to="/contact" className="relative  font-bold">
        <button className="rounded-md p-5 active:ring hover:bg-slate-500 active:ring-slate-200">
          Contact
        </button>
      </Link>
    </nav>
  );
}
