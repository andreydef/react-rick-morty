import PropTypes from "prop-types";

import SearchError from "../Main/SearchError";
import LocationCard from "./LocationCard";

import "../../stylesheets/_CharacterList.scss";

const LocationList = (props) => {
    if (props.filteredLocations.length === 0) {
        return <SearchError />;
    } else {
        const locationItems = props.filteredLocations.map((location) => {
            return (
                <LocationCard
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                />
            );
        });
        return <ul className="cardList">{locationItems}</ul>;
    }
};

LocationList.propTypes = {
    filteredLocations: PropTypes.array.isRequired,
};

export default LocationList;