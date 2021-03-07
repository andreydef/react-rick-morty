import PropTypes from "prop-types";

import BackToListLink from "./BackToListLink";
// import RouteError from "../Main/RouteError";

import image from '../../images/rick-and-morty-episodes.png'
import "../../stylesheets/_CharacterDetail.scss";

const EpisodeDetail = (props) => {
    return (
        <>
            <BackToListLink />
            <article className="detail">
                <img
                    src={image}
                    alt={props.episode.name}
                    className="detail__img"
                />
                <div className="detail__info">
                    <h3 className="detail__info__name">{props.episode.name}</h3>
                    <p className="detail__info__attribute">
                        <span className="detail__info__title">Air Date: </span>{" "}
                        {props.episode.air_date}
                    </p>
                    <p className="detail__info__attribute">
                        <span className="detail__info__title">Episode: </span>{" "}
                        {props.episode.episode}
                    </p>
                    <p className="detail__info__attribute">
                        <span className="detail__info__title">No. of characters: </span>{" "}
                        {props.episode.characters}
                    </p>
                </div>
            </article>
        </>
    );
};

EpisodeDetail.propTypes = {
    name: PropTypes.string,
    air_date: PropTypes.string,
    episode: PropTypes.string,
    characters: PropTypes.number,
};

export default EpisodeDetail;