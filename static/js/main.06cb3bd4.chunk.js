(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Ale_CURSOS_NEORIS_Labs_Entregables_2_calculatorIngercherV2_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),E_Ale_CURSOS_NEORIS_Labs_Entregables_2_calculatorIngercherV2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Display__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_Keypad__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),_templateObject,App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState2=Object(E_Ale_CURSOS_NEORIS_Labs_Entregables_2_calculatorIngercherV2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState4=Object(E_Ale_CURSOS_NEORIS_Labs_Entregables_2_calculatorIngercherV2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),pointAloud=_useState4[0],setPointAloud=_useState4[1],_onClickPoint=function(){if(setPointAloud(!1),"0"===result)return setResult(cAdd("0."));setResult(cAdd(pointAloud?".":""))},cAdd=function(e){return isOperator(e)&&setPointAloud(!0),"0"!==result?/^(\d+(\.)?(\d)*[x/+-]?)+$/g.test(result)?isOperator(result.slice(-1))&&isOperator(e)?result.slice(0,-1)+e:result+e:result:e.match(/[/x+-]/)?"0":e},cDel=function(){return result.length>1?result.substring(0,result.length-1):setResult("0")},cEval=function cEval(){setPointAloud(!0);var resultToEvaluate=isOperator(result.slice(-1))?cDel(result):result;return eval(resultToEvaluate.replaceAll("x","*")).toString()},cSetMemory=function(){return/[-+x/]/g.test(result)?null:localStorage.memoria=result},cRecover=function(){var e=localStorage.getItem("memoria");return e?setResult(cAdd(e)):null},isOperator=function(e){return/[/x+-]/.test(e)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(AppStyled,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Display__WEBPACK_IMPORTED_MODULE_3__.a,{value:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Keypad__WEBPACK_IMPORTED_MODULE_4__.a,{onClickAdd:function(e){return setResult(cAdd(e))},onClickClear:function(){setPointAloud(!0),setResult("0")},onClickDel:function(){return setResult(cDel)},onClickEval:function(){return setResult(cEval)},onClickSetMemory:function(){return cSetMemory()},onClickClearMemory:function(){return localStorage.removeItem("memoria")},onClickRecoverMemory:cRecover,onClickPoint:function(){return _onClickPoint()}})]})},AppStyled=styled_components__WEBPACK_IMPORTED_MODULE_5__.a.div(_templateObject||(_templateObject=Object(E_Ale_CURSOS_NEORIS_Labs_Entregables_2_calculatorIngercherV2_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n\tmax-width: 20%;\n\tmin-width: 300px;\n\tbackground-color: #111;\n\tcolor: white;\n\tborder-radius: 10px;\n\tmargin: 2em auto;\n"])));__webpack_exports__.a=App},11:function(e,t,_){"use strict";var n,r=_(2),c=(_(0),_(3)),l=_(1),a=c.a.div(n||(n=Object(r.a)(["\n\tfont-size: 2.7em;\n\tfont-weight: 300;\n\ttext-align: right;\n\tpadding-right: 20px;\n\tbackground-color: #4f4a4c;\n\tpadding: 0.5em 0.2em;\n\tborder-radius: 10px 10px 0 0;\n"])));t.a=function(e){var t=e.value;return Object(l.jsx)(a,{children:t.slice(0,12)})}},15:function(e,t,_){"use strict";_.d(t,"a",(function(){return O}));var n,r,c,l,a=_(2),o=_(3),u=(_(0),_(1)),i=o.a.div(n||(n=Object(a.a)(["\n\tfont-size: 1.5em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #333;\n\t/* width: 100%; */\n\tborder-radius: 5px;\n\tcursor: pointer;\n\tuser-select: none;\n\n\t&:hover {\n\t\topacity: 0.7;\n\t}\n"]))),s=function(e){var t,_=e.content,n=e.onClickButton,r=["+","-","/","x","="];return Object(u.jsx)(i,{className:"".concat((t=_,["+","="].includes(t)?"tall":null),"\n\t\t\t\t\t\t ").concat(function(e){return r.includes(e)}(_)?"painted":null),onClick:function(){return n(_)},children:_})},d=o.a.div(r||(r=Object(a.a)(["\n\tfont-size: 1em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #555555;\n    color: orange;\n\t/* width: 100%; */\n\tborder-radius:50%;\n    width:40px;\n    height: 40px;\n\tcursor: pointer;\n\tuser-select: none;\n\n\t&:hover {\n\t\topacity: 0.7;\n\t}\n"]))),E=function(e){var t=e.content,_=e.onClickButton;return Object(u.jsx)(d,{onClick:function(){return _()},children:t})},O=function(e){var t,_=function(t){switch(t){case"=":return e.onClickEval;case"\u2190":return e.onClickDel;case"C":return e.onClickClear;case".":return e.onClickPoint;default:return e.onClickAdd}};return Object(u.jsxs)(p,{children:[Object(u.jsxs)(b,{children:[Object(u.jsx)(E,{content:"MS",onClickButton:e.onClickSetMemory}),Object(u.jsx)(E,{content:"MC",onClickButton:e.onClickClearMemory}),Object(u.jsx)(E,{content:"MR",onClickButton:e.onClickRecoverMemory})]}),(t=["C","/","x","-","7","8","9","+","4","5","6","1","2","3","=","0",".","\u2190"],t.map((function(e){return Object(u.jsx)(s,{content:e,onClickButton:_(e)})})))]})},p=o.a.div(c||(c=Object(a.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: 40px repeat(5, 80px);\n\tgrid-template-columns: repeat(4, 1fr);\n\tpadding: 10px;\n\tgrid-gap: 10px;\n"]))),b=o.a.div(l||(l=Object(a.a)(["\n\tdisplay: flex;\n    justify-content: space-around;\n\tgrid-column: span 4;\n"])))},16:function(e,t,_){"use strict";_.r(t);var n=_(0),r=_.n(n),c=_(9),l=_.n(c),a=(_(21),_(10)),o=_(1);l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(a.a,{})}),document.getElementById("root"))},21:function(e,t,_){}},[[16,1,2]]]);
//# sourceMappingURL=main.06cb3bd4.chunk.js.map