import PropTypes from "prop-types";

import SearchError from "../Main/SearchError";
import EpisodeCard from "./EpisodeCard";

import "../../stylesheets/_CharacterList.scss";

const EpisodeList = (props) => {
    if (props.filteredEpisodes.length === 0) {
        return <SearchError />;
    } else {
        const episodeItems = props.filteredEpisodes.map((episode) => {
            return (
                <EpisodeCard
                    key={episode.id}
                    id={episode.id}
                    name={episode.name}
                    air_date={episode.air_date}
                    episode={episode.episode}
                />
            );
        });
        return <ul className="cardList">{episodeItems}</ul>;
    }
};

EpisodeList.propTypes = {
    filteredEpisodes: PropTypes.array.isRequired,
};

export default EpisodeList;