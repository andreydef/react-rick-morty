import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import image from '../../images/rick-and-morty-episodes.png';
import "../../stylesheets/_CharacterCard.scss";

const EpisodeCard = (props) => {
    return (
        <>
            <Link to={`/episodes/${props.id}`}>
                <li className="card">
                    <img src={image} alt={props.name} />
                    <main className="card__info">
                        <h3 className="card__info--name">{props.name}</h3>
                        <p>{props.air_date}</p>
                    </main>
                </li>
            </Link>
        </>
    );
};

EpisodeCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string
};

export default EpisodeCard;