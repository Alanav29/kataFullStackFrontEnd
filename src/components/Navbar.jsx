import { Link } from "react-router-dom";

const Navbar = () => {
  const navSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MovieTime
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Peliculas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Series
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={navSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="input-group-text" id="searchButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
