let React = require('react');

/*let About = React.createClass({
  render: function() {
    return (
      <h3>About Component</h3>
    );
  }
});*/

let About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to about page</p>
    </div>
  );
};

module.exports = About;
