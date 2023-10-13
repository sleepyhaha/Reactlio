import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
