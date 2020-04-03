!function(){function e(t,r,a){function n(i,o){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!o&&s)return s(i,!0);if(c)return c(i,!0);var m=new Error("Cannot find module '"+i+"'");throw m.code="MODULE_NOT_FOUND",m}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){return n(t[i][1][e]||e)},l,l.exports,e,t,r,a)}return r[i].exports}for(var c="function"==typeof require&&require,i=0;i<a.length;i++)n(a[i]);return n}return e}()({1:[function(e,t,r){"use strict";function a(e){return n.createElement("div",null,n.createElement(s,{route:"/1-click-bom/"}),n.createElement(i.Container,{style:{marginTop:30}},n.createElement(c,{source:m})))}var n=e("react"),c=e("react-markdown"),i=e("semantic-ui-react"),o=e("react-search-input"),s=e("../title_bar"),m='\n<p align=center>\n<a href="https://chrome.google.com/webstore/detail/1clickbom/mflpmlediakefinapghmabapjeippfdi">\n<img src="https://raw.githubusercontent.com/kitspace/1clickBOM/master/readme_images/chrome.png" />\n</a>\n<a href="https://addons.mozilla.org/firefox/downloads/latest/634060/addon-634060-latest.xpi">\n<img src="https://raw.githubusercontent.com/kitspace/1clickBOM/master/readme_images/firefox.png" />\n</a>\n</p>\n\n1-click BOM is a browser extension that fills your shopping carts for you on sites like Digikey and Mouser. It lets you simply click on the "buy parts" links on Kitspace to get the right parts. You can also use it directly with your own spreadsheets or with our [BOM Builder](/bom-builder) tool.\n\n[Read further documentation on GitHub](https://github.com/kitspace/1clickBOM#readme).\n\n<p align=center>\n<img src="https://raw.githubusercontent.com/kitspace/1clickBOM/master/readme_images/demo.gif" />\n</p>\n\n';t.exports=a},{"../title_bar":4,react:"react","react-markdown":"react-markdown","react-search-input":"react-search-input","semantic-ui-react":"semantic-ui-react"}],2:[function(e,t,r){"use strict";var a=e("react"),n=e("react-dom"),c=e("./1-click-bom");n.render(a.createElement(c,null),document.getElementById("content"))},{"./1-click-bom":1,react:"react","react-dom":"react-dom"}],3:[function(e,t,r){"use strict";t.exports={mobile:"\n  (orientation: portrait) and (max-device-width: 480px)\n  , (orientation: landscape) and (max-device-width: 660px)\n",mobile_m:"(max-width: 499px)",semantic_container:"(max-width: 1199px)",small_width:"(max-width: 946px)"}},{}],4:[function(e,t,r){"use strict";function a(e){var t="/"===e.route||RegExp("^/boards/").test(e.route),r=RegExp("^/submit/").test(e.route);return n.createElement(i,{query:o.mobile},function(a){return n.createElement("div",{className:"titleBar"},n.createElement("div",{className:"logoContainer"},n.createElement(c.Menu,{inverted:!0,pointing:!0,secondary:!0,stackable:a},n.createElement("a",{href:"/"},n.createElement(c.Image,{className:"logoImg",src:"/images/logo.svg"})),n.createElement(c.Menu.Item,{as:"a",href:"/",active:t||r},"Projects"),n.createElement(c.Menu.Item,{as:"a",href:"/bom-builder",active:"/bom-builder/"===e.route},"BOM Builder"),n.createElement(c.Menu.Item,{as:"a",href:"/1-click-bom",active:"/1-click-bom/"===e.route},"1-click BOM"))),n.createElement("div",{className:"rightButtonsContainer"},n.createElement(c.Menu,{className:"socialMenu",inverted:!0,pointing:!0,secondary:!0,stackable:a},n.createElement(c.Menu.Item,{as:"a",href:"https://riot.im/app/#/room/#kitspace:matrix.org"},n.createElement(c.Icon,{name:"chat"}),"Chat"),n.createElement(c.Menu.Item,{as:"a",href:"https://twitter.com/kitspaceorg"},n.createElement(c.Icon,{name:"twitter"}),"Twitter"),n.createElement(c.Menu.Item,{as:"a",href:"https://github.com/kitspace"},n.createElement(c.Icon,{name:"github"}),"GitHub"),n.createElement(c.Menu.Item,{as:"a",href:"https://opencollective.com/kitspace"},n.createElement(c.Icon,{name:"heart"}),"Donate"),r?null:n.createElement(c.Menu.Item,null,n.createElement(c.Button,{icon:!0,labelPosition:a?null:"left",color:"green",href:"/submit"},n.createElement(c.Icon,{name:"plus"}),"Add a project")))))})}var n=e("react"),c=e("semantic-ui-react"),i=e("react-responsive"),o=e("./media_queries");t.exports=a},{"./media_queries":3,react:"react","react-responsive":"react-responsive","semantic-ui-react":"semantic-ui-react"}]},{},[2]);