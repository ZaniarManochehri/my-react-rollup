(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["your-library-name"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    var ZMButton = function (_a) {
        var label = _a.label;
        return React.createElement("button", null, label);
    };

    exports.ZMButton = ZMButton;

}));
//# sourceMappingURL=index.umd.js.map
