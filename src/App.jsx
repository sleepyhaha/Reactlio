import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
    </>
  );
}

export default App;
