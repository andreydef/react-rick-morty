import "../../stylesheets/_Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <small>
        Data from{" "}
        <a
          href="https://rickandmortyapi.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          title="Go to Rick and Morty API"
          aria-label="Go to Rick and Morty API"
        >
          rickandmortyapi.com
        </a>
      </small>
      <small>
        App developed in 2021 by{" "}
        <a
          href="https://github.com/andreydef"
          target="_blank"
          rel="noreferrer"
          className="footer__link--github"
          title="Go to Celia's Github profile"
          aria-label="Go to Celia's Github profile"
        >
          Andriy Galelyuka
        </a>
      </small>
    </div>
  );
};

export default Footer;