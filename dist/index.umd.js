(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["your-library-name"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    var YourComponent = function (_a) {
        var text = _a.text;
        return React.createElement("div", null, text);
    };

    var ZMButton = function (_a) {
        var label = _a.label;
        return React.createElement("button", { disabled: true }, label);
    };

    exports.YourComponent = YourComponent;
    exports.ZMButton = ZMButton;

}));
//# sourceMappingURL=index.umd.js.map
