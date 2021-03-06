import PropTypes from "prop-types";

import SearchError from "./SearchError";
import CharacterCard from "./CharacterCard";

import "../../stylesheets/_CharacterList.scss";

const CharacterList = (props) => {
  if (props.filteredChars.length === 0) {
    return <SearchError />;
  } else {
    const charItems = props.filteredChars.map((char) => {
      return (
        <CharacterCard
          key={char.id}
          id={char.id}
          name={char.name}
          img={char.img}
          species={char.species}
          status={char.status}
          gender={char.gender}
        />
      );
    });
    return <ul className="cardList">{charItems}</ul>;
  }
};

CharacterList.propTypes = {
  filteredChars: PropTypes.array.isRequired,
};

export default CharacterList;