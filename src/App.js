import { useState, useEffect } from "react";
import SearchBar from "./components/searchbar/searchbar.component";
import Display from "./components/display/display.component";
function App() {
  const [searchField, setSearchField] = useState("");
  const [searchGiph, setSearchGiph] = useState({});

  const chanegSearchField = (event) => {
    console.log(event.target.value);
    setSearchField(event.target.value.toLowerCase());
  };

  if (searchField === "") {
    setSearchField("happy");
  }
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=kHPZboplh0pDKUh3EbM4pSROxs1VyIXe&q=${searchField}&limit=20`
    )
      .then((response) => response.json())
      .then((data) =>
        setSearchGiph(data.data[0].images.original.url)
      );

    console.log(searchGiph);
  }, [searchField]);
  return (
    <div className="App">
      <SearchBar changeGiph={chanegSearchField} />
      <Display searchGiph={searchGiph} />
    </div>
  );
}

export default App;
