import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen h-full p-5 bg-black">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
