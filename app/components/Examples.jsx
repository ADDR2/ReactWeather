let React = require('react');
import { Link, IndexLink } from 'react-router';

/*let Examples = React.createClass({
  render: function() {
    return (
      <h3>Examples Component</h3>
    );
  }
});*/

let Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Miami'>Miami</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
