import { useState, useEffect } from "react";

import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

import "./App.css";

function App() {
  const [cats, setCats] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterCats, setFilterCats] = useState(cats);
  const [title, setTitle] = useState("");

  const onSearchChange = (event) => {
    const onSearchString = event.target.value.toLocaleLowerCase();
    setSearchField(onSearchString);
  };

  const onTitleChange = (event) => {
    const titleString = event.target.value.toLocaleLowerCase();
    setTitle(titleString);
  };

  useEffect(() => {
    const newFiltedCats = cats.filter((cat) =>
      cat.name.toLocaleLowerCase().includes(searchField)
    );

    setFilterCats(newFiltedCats);
  }, [cats, searchField]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCats(users));
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder={"search cats"}
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder={"set title"}
      />
      <CardList cats={filterCats} />
    </div>
  );
}

export default App;
