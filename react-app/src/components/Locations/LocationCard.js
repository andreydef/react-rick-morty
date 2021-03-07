import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import image from '../../images/rick-and-morty.png';
import "../../stylesheets/_CharacterCard.scss";

const LocationCard = (props) => {
    return (
        <>
            <Link to={`/location/${props.id}`}>
                <li className="card">
                    <img src={image} alt={props.name} />
                    <main className="card__info">
                        <h3 className="card__info--name">{props.name}</h3>
                        <p>{props.type}</p>
                        <p>{props.dimension}</p>
                    </main>
                </li>
            </Link>
        </>
    );
};

LocationCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    dimension: PropTypes.string,
};

export default LocationCard;