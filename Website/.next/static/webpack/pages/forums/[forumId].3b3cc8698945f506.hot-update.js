"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forums/[forumId]",{

/***/ "./pages/forums/[forumId].js":
/*!***********************************!*\
  !*** ./pages/forums/[forumId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bulma-components */ \"./node_modules/react-bulma-components/cjs/index.js\");\n/* harmony import */ var _components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageWrapper */ \"./components/pageWrapper.js\");\n/* harmony import */ var _components_customPuffLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customPuffLoader */ \"./components/customPuffLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_goBackUrlButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/goBackUrlButton */ \"./components/goBackUrlButton.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forums_forum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forums/forum */ \"./components/forums/forum.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_protectedRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/protectedRoute */ \"./components/protectedRoute.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n/**\r\n * La page pour visionner un utilisateur \"/users/:userId\"\r\n * @param showErrorMessage Fonction pour montrer un message d'erreur\r\n * @param showSuccessMessage Fonction pour montrer un message de succès\r\n */ const ForumEditorPage = (param)=>{\n    let { showErrorMessage , showSuccessMessage  } = param;\n    _s();\n    /**\r\n     * Le router\r\n     */ const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    /**\r\n     * l'id de l'utilisateur\r\n     */ const forumId = router.query.forumId;\n    /**\r\n     * Si la donnée de l'utilisateur a été récupérée\r\n     */ const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    /**\r\n     * L'utilisateur\r\n     */ const [forum, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // On utilise un useEffet pour récupérer l'utilisateur\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            // On veut faire la requête une seule fois\n            if (!loaded) {\n                // On essaye de faire la requête pour récupérer l'utilisateur\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/forum/\".concat(forumId));\n                // On met à jour l'utilisateur\n                } // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini\n                catch (e) {\n                    showErrorMessage(\"Il y a eu une erreur lors de la r\\xe9cup\\xe9ration du forum\", e.response.data);\n                    setUser(undefined);\n                }\n                // On dit que la donnée est mise à jour\n                setLoaded(true);\n            }\n        })();\n    }, [\n        loaded\n    ]);\n    // Si la donnée n'a pas encore été récupérée on montre le loader\n    if (!loaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_customPuffLoader__WEBPACK_IMPORTED_MODULE_2__.CustomPuffLoader, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n            lineNumber: 69,\n            columnNumber: 16\n        }, undefined);\n    }\n    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs\n    if (forum === undefined) {\n        router.replace(\"/forums\");\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_9__.Columns.Column, {\n            className: \"is-10 is-offset-1 tp-notification\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_9__.Columns, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_9__.Columns.Column, {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_goBackUrlButton__WEBPACK_IMPORTED_MODULE_4__.GoBackUrlButton, {\n                            url: \"/forums\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"has-text-centered\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_9__.Heading, {\n                                    className: \"is-3\",\n                                    children: \"Gestion du Forum\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"description\",\n                                    children: [\n                                        \"Le forum est \",\n                                        forum.title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                            lineNumber: 84,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_9__.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forums_forum__WEBPACK_IMPORTED_MODULE_6__.Forum, {\n                                forum: forum,\n                                setUser: setUser,\n                                showErrorMessage: showErrorMessage,\n                                showSuccessMessage: showSuccessMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                                lineNumber: 90,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                    lineNumber: 82,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n                lineNumber: 81,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forums\\\\[forumId].js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ForumEditorPage, \"XeKo7Sy1SOXXDH9QVTTVW/PVcLc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ForumEditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_protectedRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ForumEditorPage, true));\nvar _c, _c1;\n$RefreshReg$(_c, \"ForumEditorPage\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3J1bXMvW2ZvcnVtSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlFO0FBQ1I7QUFDVTtBQUN6QjtBQUN1QjtBQUMzQjtBQUNjO0FBQzFCO0FBQ21DO0FBRzdEO1FBS3lCLEVBQUNhLGlCQUFnQixFQUFFQyxtQkFBa0IsRUFBQzs7SUFFM0QsNEJBRUMsR0FDRCxNQUFNQyxTQUFTUDtJQUVmO0lBS0E7SUFLQTtJQUtBO0lBQ0FILFVBQVU7UUFDTCxXQUFZOztZQUdULElBQUksQ0FBQ2EsUUFBUTtnQkFFVDs7b0JBRUksTUFBTUksV0FBVyxNQUFNWixNQUFNYSxHQUFHLENBQUM7Z0JBRWpDLHFFQUE4Qjs7Z0JBS2xDO29CQUNJVixhQUFBQSwrQ0FBaUI7b0JBRWpCUSxRQUFRSzt1REFDWjtnQkFFQTtnQkFDQVAsVUFBVSxJQUFJO1lBQ2xCLENBQUM7UUFDTDtJQUNKLEdBQUc7UUFBQ0QsbUNBQUFBLGlEQUFBQTtLQUFPO0lBRVgsZ0VBQWdFO0lBQ2hFLElBQUksQ0FBQ0EsUUFBUTtRQUNULHFCQUFPLFFBQUNkOzs7OztJQUNaLENBQUM7SUFFRDtJQUNBLElBQUlnQjtRQUNBTDs7SUFFSixDQUFDO0lBRUQ7a0JBRVEsbUpBQVNhLENBQU07WUFBQ0MsV0FBVTtzQkFDdEI7MEJBQ0k7OztzQ0FDSSxRQUFDdEI7NEJBQWdCdUI7Ozs7OztzQ0FDakIsUUFBQ0M7NEJBQUlGLFFBQUFBLDZEQUFVOzs7O29HQUNlOzs7Ozs7O29DQUN2QkEsRUFBQUEsNkRBQUFBLEVBQVU7Ozt3Q0FBNEJULE1BQU1hLDZEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBR3hEO3NDQUNJLDRFQUFDeEI7Z0NBQU1XLE9BQU9BO2dDQUFPQyxTQUFTQTtnQ0FBU1Isa0JBQWtCQTtnQ0FBa0JDLEdBQUFBLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RztHQWhGTUYsWUFBQUEsU0FBQUE7O1FBS2FKOzs7S0FMYkksTUFBQUEsU0FBQUE7QUFrRk4scUJBQWVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcnVtcy9bZm9ydW1JZF0uanM/OWQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbHVtbnMsIEhlYWRpbmcsIFNlY3Rpb259IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UGFnZVdyYXBwZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q3VzdG9tUHVmZkxvYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY3VzdG9tUHVmZkxvYWRlclwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0dvQmFja1VybEJ1dHRvbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ29CYWNrVXJsQnV0dG9uXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtGb3J1bX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ydW1zL2ZvcnVtXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFByb3RlY3RlZFJvdXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb3RlY3RlZFJvdXRlXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIExhIHBhZ2UgcG91ciB2aXNpb25uZXIgdW4gdXRpbGlzYXRldXIgXCIvdXNlcnMvOnVzZXJJZFwiXHJcbiAqIEBwYXJhbSBzaG93RXJyb3JNZXNzYWdlIEZvbmN0aW9uIHBvdXIgbW9udHJlciB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAqIEBwYXJhbSBzaG93U3VjY2Vzc01lc3NhZ2UgRm9uY3Rpb24gcG91ciBtb250cmVyIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG4gKi9cclxuY29uc3QgRm9ydW1FZGl0b3JQYWdlID0gKHtzaG93RXJyb3JNZXNzYWdlLCBzaG93U3VjY2Vzc01lc3NhZ2V9KSA9PiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZSByb3V0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICAvKipcclxuICAgICAqIGwnaWQgZGUgbCd1dGlsaXNhdGV1clxyXG4gICAgICovXHJcbiAgICBjb25zdCBmb3J1bUlkID0gcm91dGVyLnF1ZXJ5LmZvcnVtSWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaSBsYSBkb25uw6llIGRlIGwndXRpbGlzYXRldXIgYSDDqXTDqSByw6ljdXDDqXLDqWVcclxuICAgICAqL1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEwndXRpbGlzYXRldXJcclxuICAgICAqL1xyXG4gICAgY29uc3QgW2ZvcnVtLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIE9uIHV0aWxpc2UgdW4gdXNlRWZmZXQgcG91ciByw6ljdXDDqXJlciBsJ3V0aWxpc2F0ZXVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiB2ZXV0IGZhaXJlIGxhIHJlcXXDqnRlIHVuZSBzZXVsZSBmb2lzXHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gZXNzYXllIGRlIGZhaXJlIGxhIHJlcXXDqnRlIHBvdXIgcsOpY3Vww6lyZXIgbCd1dGlsaXNhdGV1clxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9mb3J1bS8ke2ZvcnVtSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIG1ldCDDoCBqb3VyIGwndXRpbGlzYXRldXJcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyIGV0IG9uIG1ldCBxdWUgbCd1dGlsaXNhdGV1ciBlc3Qgbm9uIGTDqWZpbmlcclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIklsIHkgYSBldSB1bmUgZXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZHUgZm9ydW1cIiwgZS5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIGRpdCBxdWUgbGEgZG9ubsOpZSBlc3QgbWlzZSDDoCBqb3VyXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbbG9hZGVkXSk7XHJcblxyXG4gICAgLy8gU2kgbGEgZG9ubsOpZSBuJ2EgcGFzIGVuY29yZSDDqXTDqSByw6ljdXDDqXLDqWUgb24gbW9udHJlIGxlIGxvYWRlclxyXG4gICAgaWYgKCFsb2FkZWQpIHtcclxuICAgICAgICByZXR1cm4gPEN1c3RvbVB1ZmZMb2FkZXIvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwndXRpbGlzYXRldXIgbidlc3QgcGFzIGTDqWZpbmkgw6dhIHZldXQgZGlyZSBxdSdpbCBuJ2V4aXN0ZSBwYXMgZXQgZG9uYyBvbiB2ZXV0IHJldmVuaXIgw6AgbGEgcGFnZSBkZXMgdXRpbGlzYXRldXJzXHJcbiAgICBpZiAoZm9ydW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2ZvcnVtc1wiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPENvbHVtbnMuQ29sdW1uIGNsYXNzTmFtZT1cImlzLTEwIGlzLW9mZnNldC0xIHRwLW5vdGlmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbnMuQ29sdW1uIGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHb0JhY2tVcmxCdXR0b24gdXJsPXtcIi9mb3J1bXNcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJpcy0zXCI+R2VzdGlvbiBkdSBGb3J1bTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+TGUgZm9ydW0gZXN0IHtmb3J1bS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ydW0gZm9ydW09e2ZvcnVtfSBzZXRVc2VyPXtzZXRVc2VyfSBzaG93RXJyb3JNZXNzYWdlPXtzaG93RXJyb3JNZXNzYWdlfSBzaG93U3VjY2Vzc01lc3NhZ2U9e3Nob3dTdWNjZXNzTWVzc2FnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2x1bW5zLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1ucz5cclxuICAgICAgICAgICAgPC9Db2x1bW5zLkNvbHVtbj5cclxuICAgICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkUm91dGUoRm9ydW1FZGl0b3JQYWdlLCB0cnVlKTsiXSwibmFtZXMiOlsiQ29sdW1ucyIsIkhlYWRpbmciLCJTZWN0aW9uIiwiUGFnZVdyYXBwZXIiLCJDdXN0b21QdWZmTG9hZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHb0JhY2tVcmxCdXR0b24iLCJ1c2VSb3V0ZXIiLCJGb3J1bSIsImF4aW9zIiwiUHJvdGVjdGVkUm91dGUiLCJGb3J1bUVkaXRvclBhZ2UiLCJzaG93RXJyb3JNZXNzYWdlIiwic2hvd1N1Y2Nlc3NNZXNzYWdlIiwicm91dGVyIiwiZm9ydW1JZCIsInF1ZXJ5IiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZm9ydW0iLCJzZXRVc2VyIiwicmVzcG9uc2UiLCJnZXQiLCJlIiwiZGF0YSIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJDb2x1bW4iLCJjbGFzc05hbWUiLCJ1cmwiLCJkaXYiLCJwIiwidGl0bGUiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forums/[forumId].js\n"));

/***/ })

});