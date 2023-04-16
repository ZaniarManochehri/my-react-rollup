(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["your-library-name"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    var YourComponent = function (_a) {
        var text = _a.text;
        return React.createElement("div", null, text);
    };

    exports.YourComponent = YourComponent;

}));
//# sourceMappingURL=index.umd.js.map
