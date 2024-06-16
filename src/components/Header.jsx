import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import Categorys from "./Categorys";
import { categorys } from "../store/Categorys";
function Header() {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibilty = () => {
        setIsVisible(!isVisible)
        console.log(window.innerWidth);
    }
  return (
    <div className="flex flex-col gap-5">
        <h1 className="text-white text-3xl font-bold m-auto">Search Emojis</h1>
      <SearchBar />
      {window.innerWidth <= 640 && <button className = {`bg-gray-500 transition-all p-2 fixed rounded w-9 h-9 flex justify-center ${isVisible ? " left-52" : ""} items-center text-white`} onClick={handleVisibilty}>☰</button>}
      <div className={`sm:flex sm:static sm:flex-row sm:justify-between transition-all sm:w-3/4 m-auto fixed gap-3 flex-col ${isVisible ? "flex bg-black p-3 opacity-80" : "hidden"} flex-wrap `}>
        {categorys.map((category) => (
          <Categorys key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Header;
