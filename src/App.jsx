import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <AnimatePresence>
        <Outlet location={location} key={location.pathname} />
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
