import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const [search, setSearch] = useState(params ? params.get("fileName") : "");
  const [debouncedSearch] = useDebounce(search, 500);

  const handleSearch = (text) => {
    setSearch(text);
  };


  useEffect(() => {
    setURLParams();
  }, [debouncedSearch]);


  //function that set the searchParams if there is a search
  //and remove the searchParams if there is no search
  function setURLParams() {
    const params = new URLSearchParams(window.location.search);
    if (debouncedSearch) {
      params.set("fileName", debouncedSearch);
    } else {
      params.delete("fileName");
    }
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }

  return { search: debouncedSearch, handleSearch };
};

export default useSearch;
