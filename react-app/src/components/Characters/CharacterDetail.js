import PropTypes from "prop-types";

import StatusIcon from "./StatusIcon";
import BackToListLink from "./BackToListLink";
import RouteError from "./RouteError";

import "../../stylesheets/_CharacterDetail.scss";

const CharacterDetail = (props) => {
  if (props.char === undefined) {
    return (
      <>
        <BackToListLink />
        <RouteError />
      </>
    );
  } else
    return (
      <>
        <BackToListLink />
        <article className="detail">
          <img
            src={props.char.img}
            alt={props.char.name}
            className="detail__img"
          />
          <div className="detail__info">
            <h3 className="detail__info__name">{props.char.name}</h3>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Status: </span>{" "}
              {props.char.status} {StatusIcon(props)}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Species: </span>{" "}
              {props.char.species}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Origin: </span>{" "}
              {props.char.origin}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">No. of episodes: </span>{" "}
              {props.char.episodes}
            </p>
          </div>
        </article>
      </>
    );
};

CharacterDetail.propTypes = {
  char: PropTypes.object,
  img: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;