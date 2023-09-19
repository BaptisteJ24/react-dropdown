import Dropdown from "../src/components/dropdown";
import "./style.css";

function App() {
  return (
    <div className="demo">
      <h1>@baptistej24/react-dropdown</h1>
      <h2>Dropdown Component Demo</h2>
      <ul className="demo__list">
        <li className="demo__list__item">
          <p>Default Dropdown :</p>
          <Dropdown />
        </li>
        <li className="demo__list__item">
          <p>Custom placeholder Dropdown</p>
          <Dropdown placeholder={"Custom Placeholder"} />
        </li>
        <li className="demo__list__item">
          <p>Custom data Dropdown</p>
          <Dropdown data={["Value 1", "Value 2", "Value 3"]} />
        </li>
        <li className="demo__list__item">
          <p>Dark Theme Dropdown :</p>
          <Dropdown theme="dark" />
        </li>
        <li className="demo__list__item">
          <p>Custom Style Dropdown (inline style)</p>
          <Dropdown
            styles={{
              dropdown: {
                width: "400px",
              },
              dropdownSelected: {
                backgroundColor: "green",
              },
              dropdownSelectedText: {
                color: "orange",
              },
              dropdownArrow: {
                border: "solid orange",
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
        </li>
      </ul>
      <h2>Installation</h2>
      <pre className="code-container">
        <code className="code">
          {`npm install @baptistej24/react-dropdown
or 
yarn add @baptistej24/react-dropdown
         

import Dropdown from "@baptistej24/react-dropdown";`}
        </code>
      </pre>
      <h2>Props</h2>
      <table className="table">
        <thead className="table__header">
          <tr className="table__header__row">
            <th className="table__header__cell">Prop</th>
            <th className="table__header__cell">Type</th>
            <th className="table__header__cell">Default</th>
            <th className="table__header__cell">Description</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="table__body__row">
            <td className="table__body__cell">data</td>
            <td className="table__body__cell">array</td>
            <td className="table__body__cell">
              [&quot;Option 1&quot;, &quot;Option 2&quot;, &quot;Option 3&quot;]
            </td>
            <td className="table__body__cell">Array of options</td>
          </tr>
          <tr className="table__body__row">
            <td className="table__body__cell">placeholder</td>
            <td className="table__body__cell">string</td>
            <td className="table__body__cell">
              &quot;Select an option...&quot;
            </td>
            <td className="table__body__cell">Placeholder text</td>
          </tr>
          <tr className="table__body__row">
            <td className="table__body__cell">theme</td>
            <td className="table__body__cell">
              string (&quot;light&quot; || &quot;dark&quot;)
            </td>
            <td className="table__body__cell">&quot;light&quot;</td>
            <td className="table__body__cell">Theme of the dropdown</td>
          </tr>
          <tr className="table__body__row">
            <td className="table__body__cell">styles</td>
            <td className="table__body__cell">object</td>
            <td className="table__body__cell">
              <p>
                {"{"}&nbsp;dropdown: {"{}"},
              </p>
              <p>&nbsp;&nbsp;dropdownSelected: {"{}"},</p>
              <p>&nbsp;&nbsp;dropdownSelectedText: {"{}"},</p>
              <p>&nbsp;&nbsp;dropdownArrow: {"{}"},</p>
              <p>&nbsp;&nbsp;dropdownList: {"{}"},</p>
              <p>&nbsp;&nbsp;dropdownItem: {"{} }"}</p>
            </td>
            <td className="table__body__cell">
              Inline styles (refer to css styles)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Usage</h2>
      <pre className="code-container">
        <code className="code">
          {`import Dropdown from "@baptistej24/react-dropdown";

// Basic Dropdown
<Dropdown />

// Custom placeholder Dropdown
<Dropdown placeholder={"Custom Placeholder"} />

// Custom data Dropdown
<Dropdown data={["Value 1", "Value 2", "Value 3"]} />

// Dark Theme Dropdown
<Dropdown theme="dark" />

// Custom Style Dropdown
<Dropdown
  styles={{
    dropdown: {
      width: "400px",
    },
    dropdownSelected: {
      backgroundColor: "green",
    },
    dropdownSelectedText: {
      color: "orange",
    },
    dropdownArrow: {
      border: "solid orange",
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
            `}
        </code>
      </pre>
    </div>
  );
}

export default App;
