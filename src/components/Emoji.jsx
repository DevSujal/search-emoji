import React, { useEffect, useState } from "react";
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
        setLoader(false);
      });
  }, [category]);
  const dispatch = useDispatch();
  
  if (loader) {
    return <div className="m-auto text-4xl text-red">Loading...</div>;
  } else {
    return (
      <div className="flex flex-wrap w-11/12 m-auto justify-around gap-7 my-7">
        {emojis.filter((emoji) => (
            emoji.name.toLowerCase().includes(search.toLowerCase())
        )).map((emoji) => (
          <div
            key={emoji.id}
            className=" shadow-md flex flex-col justify-center rounded bg-gray-600 p-3 hover:cursor-pointer"
          >
            
            <h2 className=" text-8xl">
              {String.fromCodePoint(
                parseInt(emoji.emoji.replace(/^&#(\d+);$/g, "$1"))
              )}
            </h2>
          </div>
        ))}
      </div>
      // <div></div>
    );
  }
}

export default Emoji;
