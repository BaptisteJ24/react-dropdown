const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#introduction">
            Introduction
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#installation">
            Installation
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#use">
            Usage
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#dropdown">
            Dropdown
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#props">
            Props
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#examples">
            Examples
          </a>
          <ul className="nav__list nav__list--padleft">
            <li className="nav__item">
              <a className="nav__link" href="#basic-dropdown">
                Basic Dropdown
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#customize-placeholder">
                Customize placeholder
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#customize-data">
                Customize data
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#dark-theme">
                Dark Theme
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#customize-style">
                Customize Style
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contributors">
            Contributors
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
