import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/smileys-and-people")
  }, [true])
  return (
    <div className="w-full min-h-screen h-full p-5 bg-black">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
