var React = require('react');

var routes = require('../routes');
var createHref = routes.createHref;

var $ = React.createElement;

var DevCardNamespaceList = React.createClass({
  render: function() {
    var catalog = this.props.catalog;

    return (
      $('ul', null, Object.keys(catalog).map(function(namespace) {
        var nb = catalog[namespace].length;

        return $('li', { key: namespace },
          $('a', { href: createHref(namespace) }, namespace),
          $('span', null, ' (' + nb + ' cards)')
        );
      }))
    );
  }
});

module.exports = DevCardNamespaceList;