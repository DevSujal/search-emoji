import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emoji from "../Api/emoji";
import { addAllCategoryEmoji } from "../store/emojiSlice";

function Emoji({ category }) {
  const [loader, setLoader] = useState(true);
  const emojis = useSelector((state) => state.emojis);
  const search = useSelector((state) => state.search);
  useEffect(() => {
    emoji
      .getEmoji(category)
      .then((data) => data.json())
      .then((data) => {
        let emojis = [];
        for (let i = 0; i < data.length; i++) {
          emojis.push({ emoji: data[i].htmlCode[0], name: data[i].name });
        }
        dispatch(addAllCategoryEmoji({ emojis, category }));
      }).finally(() => setLoader(false))
  }, [emojis]);
  const dispatch = useDispatch();


  const hover = (e) => {
    const target = e.target.parentElement.firstElementChild
    target.classList.remove("hidden")
    const {top} = e.target.getBoundingClientRect()
    const scrollY = window.scrollY
    target.style.top = `${scrollY + top - 40}px`
   } // it is the code for hovering effect on perticular emojis
  const notHover = (e) => {
    const target = e.target.parentElement.firstElementChild
    target.classList.add("hidden")
   }
  
  if (loader) {
    return <div className="absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><h1 className=" text-5xl text-white text-bold">Loading...</h1></div>;
  } else {
    return (
      <div className="flex flex-wrap w-11/12 m-auto justify-around gap-7 my-7">
        {emojis.filter((emoji) => (
            emoji.name.toLowerCase().includes(search.toLowerCase()) && emoji.name !== "white smiling face ≊ smiling face"
        )).map((emoji) => (
          <div
            key={emoji.id}
            className=" max-w-40 shadow-md flex flex-col justify-center bg-gray-950 rounded-xl items-center  p-3 pb-5 hover:cursor-pointer"
          >
            <h2 className="absolute  text-gray-200 font-semibold hidden z-10">{emoji.name}</h2>
            <h2 className="text-7xl hover:cursor-pointer sm:text-8xl" onMouseOver = {hover} onMouseLeave={notHover}>
              {String.fromCodePoint(
                parseInt(emoji.emoji.replace(/^&#(\d+);$/g, "$1"))
              )}
            </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Emoji;
