import { useState } from "react";
import Dropdown from "../lib/dropdown";
import Sidebar from "./components/sidebar";
import "./styles/main.scss";
import { Highlighter } from "rc-highlight";
import Table from "./components/table";
import Button from "./components/button";

function App() {
  const [resetDropdown, setResetDropdown] = useState(false);

  const handleReset = () => {
    setResetDropdown(!resetDropdown);
  };

  return (
    <>
      <Sidebar />
      <div className="content">
        <header className="header" id="introduction">
          <div className="logo">
            <img className="logo__img" src="/logo.jpg" alt="logo" />
          </div>
          <h1 className="header__title">@baptistej/react-dropdown</h1>
          <h2 className="header__subtitle">React Dropdown Component Library</h2>
          <p className="header__description">
            A simple, customizable and accessible React dropdown component
          </p>
          <h2 className="section__title">Links</h2>
          <ul className="header__link">
            <li className="header__link__item">
              <a
                href="https://www.npmjs.com/package/@baptistej/react-dropdown"
                rel="noreferrer"
                target="_blank"
              >
                NPM Package
              </a>
            </li>
            <li className="header__link__item">
              <a
                href="https://github.com/BaptisteJ24/react-dropdown"
                rel="noreferrer"
                target="_blank"
              >
                Github Repository
              </a>
            </li>
            <li className="header__link__item">
              <a
                href="https://codesandbox.io/s/baptistej-react-dropdown-dj4mty"
                rel="noreferrer"
                target="_blank"
              >
                CodeSandbox
              </a>
            </li>
          </ul>
        </header>
        <section>
          <section id="installation" className="section">
            <h2 className="section__title">Installation</h2>
            <Highlighter className="language-javascript">
              {`npm install --save "@baptistej/react-dropdown";`}
            </Highlighter>
            <p className="paragraph">or :</p>
            <Highlighter className="language-javascript">
              {`yarn add "@baptistej/react-dropdown";`}
            </Highlighter>
          </section>

          <section id="use" className="section">
            <h2 className="section__title">Usage</h2>
            <p className="paragraph">
              Import the component and style and use it in your code :
            </p>
            <Highlighter className="language-javascript">
              {`import Dropdown from "@baptistej/react-dropdown";
import "@baptistej/react-dropdown/dist/style.css";

const App = () => {
  return (
    <Dropdown />
  );
}
                  
export default App;`}
            </Highlighter>
          </section>

          <section id="dropdown" className="section">
            <h2 className="section__title">Dropdown</h2>
            <Highlighter className="language-javascript">
              {`<Dropdown
  id=""
  data={[]}
  placeholder=""
  reset={}
  enableDefaultClassName={}
  theme=""
  styles={{
    dropdown: {},
    dropdownSelected: {},
    dropdownSelectedText: {},
    dropdownArrow: {},
    dropdownList: {},
    dropdownItem: {},
  }}
  onSelected={}
/>
<button onClick={}>Reset</button>`}
            </Highlighter>
          </section>

          <section id="props" className="section">
            <h2 className="section__title">Props</h2>
            <Table />
          </section>

          <section id="examples" className="section">
            <h2 className="section__title">Examples</h2>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <h3 id="basic-dropdown">Basic Dropdown</h3>
                <div className="dropdown__content">
                  <Dropdown reset={resetDropdown} id="dropdown" />
                  <Button onClick={handleReset} text={"Reset"} />
                </div>
              </li>

              <li className="dropdown__item">
                <h3 id="customize-placeholder">Customize placeholder</h3>
                <div className="dropdown__content">
                  <Dropdown
                    reset={resetDropdown}
                    placeholder={"Custom Placeholder"}
                  />
                  <Button onClick={handleReset} text={"Reset"} />
                </div>
              </li>

              <li className="dropdown__item">
                <h3 id="customize-data">Customize data</h3>
                <div className="dropdown__content">
                  <Dropdown
                    reset={resetDropdown}
                    data={["Value 1", "Value 2", "Value 3"]}
                  />
                  <Button onClick={handleReset} text={"Reset"} />
                </div>
              </li>

              <li className="dropdown__item">
                <h3 id="dark-theme">Dark Theme</h3>
                <div className="dropdown__content">
                  <Dropdown reset={resetDropdown} theme="dark" />
                  <Button onClick={handleReset} text={"Reset"} />
                </div>
              </li>

              <li className="dropdown__item">
                <h3 id="customize-style">Custom Style (inline style)</h3>
                <div className="dropdown__content">
                  <Dropdown
                    reset={resetDropdown}
                    styles={{
                      dropdown: {
                        width: "400px",
                      },
                      dropdownSelected: {
                        backgroundColor: "green",
                      },
                      dropdownSelectedText: {
                        color: "white",
                      },
                      dropdownArrow: {
                        border: "solid white",
                        borderWidth: "0 3px 3px 0",
                      },
                      dropdownList: {
                        backgroundColor: "green",
                      },
                      dropdownItem: {
                        color: "white",
                      },
                    }}
                  />
                  <Button onClick={handleReset} text={"Reset"} />
                </div>
              </li>
            </ul>
          </section>
          <section id="contributors" className="section">
            <h2>Contributors</h2>
            <p>
              Baptiste JAN -{" "}
              <a
                href="https://github.com/BaptisteJ24"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/BaptisteJ24
              </a>{" "}
            </p>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
