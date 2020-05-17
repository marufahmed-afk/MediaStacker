import React, { useContext, useRef, useEffect } from "react";
import ComicContext from "../../context/comic/comicContext";

const ComicFilter = () => {
  const comicContext = useContext(ComicContext);
  const text = useRef("");

  const { filterMedia, clearFilter, filtered } = comicContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterMedia(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="filter-media">
      <input
        ref={text}
        type="text"
        placeholder="Filter Comics..."
        onChange={onChange}
      />
    </form>
  );
};

export default ComicFilter;
