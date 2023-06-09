import "styles/Navbar/SearchResultsField.scss";
import { useContext } from "react";
import { SearchTextContext } from "./SearchTextContext";

export default function SearchResultsField() {
  const trendingTopics = [
    "Animal Crossing",
    "Nintendo Switch",
    "Nintendo Switch games",
    "Zelda games",
    "Pokémon games",
  ];

  const { searchText } = useContext(SearchTextContext);

  return (
    <div className="searchResultsField">
      {searchText ? (
        <h2>No results found for &quot;{searchText}&quot;.</h2>
      ) : (
        <div className="searchResultsField_suggestions">
          <h2>Trending Topics</h2>
          <div className="searchResultsField_suggestionsTopics">
            {trendingTopics.map((topic, index) => {
              return <span key={`topic_${index}`}>{topic}</span>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
