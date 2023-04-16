'use strict';

var React = require('react');

const ZMButton = ({ label }) => {
    return React.createElement("button", { disabled: true }, label);
};

const YourComponent = ({ text }) => {
    return React.createElement("div", null, text);
};

exports.YourComponent = YourComponent;
exports.ZMButton = ZMButton;
//# sourceMappingURL=index.cjs.js.map
