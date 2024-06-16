import React from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../store/emojiSlice";

function SearchBar() {
    const dispatch = useDispatch()
  const imageLink =
    "data:image/png;base64,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";
  return (
    <div className="flex w-2/4 min-w-96 m-auto rounded-md overflow-hidden">
      <img src={imageLink} alt="search" width={40} height={40} />
      <input type="text" placeholder="search" className="w-full p-2" onChange={(e) => {dispatch(addSearch(e.target.value))}} />
    </div>
  );
}

export default SearchBar;
