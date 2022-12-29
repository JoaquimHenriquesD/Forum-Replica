"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forums",{

/***/ "./pages/forums/index.js":
/*!*******************************!*\
  !*** ./pages/forums/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bulma-components */ \"./node_modules/react-bulma-components/cjs/index.js\");\n/* harmony import */ var _components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageWrapper */ \"./components/pageWrapper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_users_usersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/users/usersList */ \"./components/users/usersList.js\");\n/* harmony import */ var _components_protectedRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/protectedRoute */ \"./components/protectedRoute.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**\r\n * La page pour visionner les utilisateurs \"/users\"\r\n * @param showSuccessMessage Fonction pour montrer un message de succès\r\n */ const ForumsPage = (param)=>{\n    let { showErrorMessage  } = param;\n    _s();\n    /**\r\n     * Variable pour savoir si la donnée a été récupérée\r\n     */ const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    /**\r\n     * Les utilisateurs\r\n     */ const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // On utilise un useEffet pour récupérer les utilisateurs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            // On veut faire la requête une seule fois\n            if (!loaded) {\n                // On essaye de faire la requête pour récupérer les utilisateurs\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users\", true);\n                    // On met à jour les utilisateurs\n                    setUsers(response.data);\n                } // Si on attrape une erreur alors on montre un message d'erreur\n                catch (e) {\n                    showErrorMessage(\"Il y a eu une erreur lors de la r\\xe9cup\\xe9ration des utilisateurs\", e.response.data);\n                }\n                // On dit que la donnée est mise à jour\n                setLoaded(true);\n            }\n        })();\n    }, [\n        loaded\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Columns.Column, {\n            className: \"is-8 is-offset-2 tp-notification\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Columns, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Columns.Column, {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            className: \"is-3\",\n                            children: \"Liste des utilisateurs\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            className: \"subtitle\",\n                            children: \"Clicker dessus pour y acc\\xe9der\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_users_usersList__WEBPACK_IMPORTED_MODULE_4__.UsersList, {\n                            users: users\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica - Copie\\\\Website\\\\pages\\\\forums\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ForumsPage, \"xOEQ4vbP750P7w7nwGprkEwuQ3s=\");\n_c = ForumsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_protectedRoute__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ForumsPage, false));\nvar _c, _c1;\n$RefreshReg$(_c, \"ForumsPage\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3J1bXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF3RDtBQUNDO0FBQ2Y7QUFDaEI7QUFDaUM7QUFDRTtBQUU3RDtRQUlvQixFQUFDUyxpQkFBZ0IsRUFBQzs7SUFFbEM7SUFLQTtJQUtBO0lBQ0FOO1FBQ0ssV0FBWTtZQUVUOztnQkFHSTtnQkFDQSxJQUFJO29CQUNBLE1BQU1XLFdBQVcsTUFBTVQsTUFBTVUsR0FBRyxDQUFFOztvQkFHbENGO2dCQUNKLEVBRUk7Z0JBQ0osT0FBT0ksR0FBRztvQkFDTlIsaUJBQWlCO2dCQUNyQjtnQkFFQSwrRUFBdUM7Z0JBQ3ZDRSxVQUFVLElBQUk7WUFDbEIsQ0FBQztRQUNMO0lBQ0osR0FBRztRQUFDRDtLQUFPO0lBRVgscUJBQ0ksUUFBQ1I7a0JBQ0c7WUFBZ0JpQjs7Ozs7dUpBR0osRUFBQ2xCOzRCQUFRa0IsSUFBQUEsNkRBQVU7c0NBQU87Ozs7OztzQ0FDMUIsUUFBQ2xCOzRCQUFRa0IsV0FBVTtzQ0FBVzs7Ozs7O3NDQUM5QixRQUFDQzs7Ozs7c0NBQ0Q7b0NBQVdSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0FwRE1KLFFBQUFBLFNBQUFBO0tBQUFBO0FBc0ROLHFCQUFlRCxlQUFlQyxZQUFXLEtBQUssRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3J1bXMvaW5kZXguanM/NzIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbHVtbnMsIEhlYWRpbmd9IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UGFnZVdyYXBwZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VXcmFwcGVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtVc2Vyc0xpc3R9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzTGlzdFwiO1xyXG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJvdGVjdGVkUm91dGVcIjtcclxuXHJcbi8qKlxyXG4gKiBMYSBwYWdlIHBvdXIgdmlzaW9ubmVyIGxlcyB1dGlsaXNhdGV1cnMgXCIvdXNlcnNcIlxyXG4gKiBAcGFyYW0gc2hvd1N1Y2Nlc3NNZXNzYWdlIEZvbmN0aW9uIHBvdXIgbW9udHJlciB1biBtZXNzYWdlIGRlIHN1Y2PDqHNcclxuICovXHJcbmNvbnN0IEZvcnVtc1BhZ2UgPSAoe3Nob3dFcnJvck1lc3NhZ2V9KSA9PiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYXJpYWJsZSBwb3VyIHNhdm9pciBzaSBsYSBkb25uw6llIGEgw6l0w6kgcsOpY3Vww6lyw6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZXMgdXRpbGlzYXRldXJzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIE9uIHV0aWxpc2UgdW4gdXNlRWZmZXQgcG91ciByw6ljdXDDqXJlciBsZXMgdXRpbGlzYXRldXJzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiB2ZXV0IGZhaXJlIGxhIHJlcXXDqnRlIHVuZSBzZXVsZSBmb2lzXHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gZXNzYXllIGRlIGZhaXJlIGxhIHJlcXXDqnRlIHBvdXIgcsOpY3Vww6lyZXIgbGVzIHV0aWxpc2F0ZXVyc1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vyc2AsdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIG1ldCDDoCBqb3VyIGxlcyB1dGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJJbCB5IGEgZXUgdW5lIGVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyB1dGlsaXNhdGV1cnNcIiwgZS5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiBkaXQgcXVlIGxhIGRvbm7DqWUgZXN0IG1pc2Ugw6Agam91clxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW2xvYWRlZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q29sdW1ucy5Db2x1bW4gY2xhc3NOYW1lPVwiaXMtOCBpcy1vZmZzZXQtMiB0cC1ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5zLkNvbHVtbiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJpcy0zXCI+TGlzdGUgZGVzIHV0aWxpc2F0ZXVyczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5DbGlja2VyIGRlc3N1cyBwb3VyIHkgYWNjw6lkZXI8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0xpc3QgdXNlcnM9e3VzZXJzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2x1bW5zLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1ucz5cclxuICAgICAgICAgICAgPC9Db2x1bW5zLkNvbHVtbj5cclxuICAgICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkUm91dGUoRm9ydW1zUGFnZSxmYWxzZSk7Il0sIm5hbWVzIjpbIkNvbHVtbnMiLCJIZWFkaW5nIiwiUGFnZVdyYXBwZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiVXNlcnNMaXN0IiwiUHJvdGVjdGVkUm91dGUiLCJGb3J1bXNQYWdlIiwic2hvd0Vycm9yTWVzc2FnZSIsImxvYWRlZCIsInNldExvYWRlZCIsInVzZXJzIiwic2V0VXNlcnMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlIiwiQ29sdW1uIiwiY2xhc3NOYW1lIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forums/index.js\n"));

/***/ })

});