import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../stylesheets/_CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/char/${props.id}`}>
        <li className="card">
          <img src={props.img} alt={props.name} className="card__img" />
          <main className="card__info">
            <h3 className="card__info--name">{props.name}</h3>
            <p>{props.species}</p>
          </main>
        </li>
      </Link>
    </>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string,
};

export default CharacterCard;