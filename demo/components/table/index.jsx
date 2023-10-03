const Table = () => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row">
          <th className="table__cell">Prop name</th>
          <th className="table__cell">Type</th>
          <th className="table__cell">Default</th>
          <th className="table__cell">Description</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__cell table__cell--code">data</td>
          <td className="table__cell table__cell--code">array</td>
          <td className="table__cell table__cell--code">
            [&quot;Option 1&quot;, &quot;Option 2&quot;, &quot;Option 3&quot;]
          </td>
          <td className="table__cell">Array of options</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">
            enableDefaultClassName
          </td>
          <td className="table__cell table__cell--code">boolean</td>
          <td className="table__cell table__cell--code">
            <p>true</p>
          </td>
          <td className="table__cell">
            Enable default class names from the library. Toggle between true and
            false.
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">id</td>
          <td className="table__cell table__cell--code">string</td>
          <td className="table__cell table__cell--code">
            <p>&quot;&quot;</p>
          </td>
          <td className="table__cell">
            Id of the dropdown (for accessibility)
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">onSelected</td>
          <td className="table__cell table__cell--code">function</td>
          <td className="table__cell table__cell--code">
            <p>{"{}"}</p>
          </td>
          <td className="table__cell">
            Function called when an option is selected.
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">placeholder</td>
          <td className="table__cell table__cell--code">string</td>
          <td className="table__cell table__cell--code">
            &quot;Select an option...&quot;
          </td>
          <td className="table__cell">Placeholder text</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">reset</td>
          <td className="table__cell table__cell--code">boolean</td>
          <td className="table__cell table__cell--code">
            <p>false</p>
          </td>
          <td className="table__cell">
            Reset the dropdown to default value. Toggle between true and false.
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">styles</td>
          <td className="table__cell table__cell--code">object</td>
          <td className="table__cell table__cell--code">
            <p>{"{}"}</p>
          </td>
          <td className="table__cell">Inline styles (refer to css styles)</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--code">theme</td>
          <td className="table__cell table__cell--code">string</td>
          <td className="table__cell table__cell--code">&quot;light&quot;</td>
          <td className="table__cell">Theme of the dropdown</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
