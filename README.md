# @baptistej/react-dropdown

> A simple dropdown component for React

## Table of Contents

- [@baptistej/react-dropdown](#baptistejreact-dropdown)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [API documentation](#api-documentation)
  - [Examples](#examples)
  - [Demo](#demo)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save @baptistej/react-dropdown
    $ yarn add @baptistej/react-dropdown

## API documentation

You can refer to the [API documentation](https://baptistej-react-dropdown.netlify.app) for a complete reference.

## Examples

Here is a simple example of react-dropdown being used in an app with some custom styles and focusable input elements within the modal content:

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "@baptistej/react-dropdown";

function App() {
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(!reset);
  };

  return (
    <div>
      <Dropdown
        data={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        reset={reset}
        theme="dark"
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
        onSelected={(selected) => console.log(selected)}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Demo

[![Edit @baptistej/react-dropdown](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/baptistej-react-dropdown-dj4mty)
