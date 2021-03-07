import "../../stylesheets/_ErrorMessage.scss";
import noResultImg from "../../images/no_results_img.png";

const SearchError = () => {
  return (
    <>
      <img
        src={noResultImg}
        alt="Rick and Morty looking anxious"
        className="errorImg"
      />
      <p className="noResultMessage">
        Sorry, your search did not match any data in our list.
      </p>
    </>
  );
};

export default SearchError;