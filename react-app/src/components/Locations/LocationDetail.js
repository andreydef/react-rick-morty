import PropTypes from "prop-types";

import BackToListLink from "./BackToListLink";
import RouteError from "../Main/RouteError";

import image from '../../images/rick-and-morty.png'
import "../../stylesheets/_CharacterDetail.scss";

const LocationDetail = (props) => {
    if (props.location === undefined) {
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
                        src={image}
                        alt={props.location.name}
                        className="detail__img"
                    />
                    <div className="detail__info">
                        <h3 className="detail__info__name">{props.location.name}</h3>
                        <p className="detail__info__attribute">
                            <span className="detail__info__title">Type: </span>{" "}
                            {props.location.type}
                        </p>
                        <p className="detail__info__attribute">
                            <span className="detail__info__title">Dimension: </span>{" "}
                            {props.location.dimension}
                        </p>
                        <p className="detail__info__attribute">
                            <span className="detail__info__title">No. of residents: </span>{" "}
                            {props.location.residents}
                        </p>
                    </div>
                </article>
            </>
        );
};

LocationDetail.propTypes = {
    location: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string,
    residents: PropTypes.number,
};

export default LocationDetail;