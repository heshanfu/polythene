!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core-checkbox"),require("polythene-mithril-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-checkbox","polythene-mithril-selection-control"],o):o(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-checkbox"],e["polythene-mithril-selection-control"])}(this,function(e,o,t,r){"use strict";var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(e,o){return t.CoreCheckbox.createProps(e,n(o,{createControl:r.createControl}))},i=o.stateComponent(n({},t.CoreCheckbox,{createProps:c,component:r.SelectionControl}));i.theme=t.CoreCheckbox.theme,e.Checkbox=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-checkbox.js.map
