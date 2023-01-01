"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forumsUser/[forumId]",{

/***/ "./pages/forumsUser/[forumId].js":
/*!***************************************!*\
  !*** ./pages/forumsUser/[forumId].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bulma-components */ \"./node_modules/react-bulma-components/cjs/index.js\");\n/* harmony import */ var _components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageWrapper */ \"./components/pageWrapper.js\");\n/* harmony import */ var _components_customPuffLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customPuffLoader */ \"./components/customPuffLoader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_goBackUrlButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/goBackUrlButton */ \"./components/goBackUrlButton.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_commentaires_commentCreationForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/commentaires/commentCreationForm */ \"./components/commentaires/commentCreationForm.js\");\n/* harmony import */ var _components_commentaires_comsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/commentaires/comsList */ \"./components/commentaires/comsList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_protectedRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/protectedRoute */ \"./components/protectedRoute.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n/**\r\n * La page pour visionner un forum\r\n * @param showErrorMessage Fonction pour montrer un message d'erreur\r\n * @param showSuccessMessage Fonction pour montrer un message de succès\r\n */ const PagedeForum = (param)=>{\n    let { showErrorMessage , showSuccessMessage  } = param;\n    _s();\n    /**\r\n     * Le router\r\n     */ const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    /**\r\n     * l'id de l'utilisateur\r\n     */ const forumId = router.query.forumId;\n    /**\r\n     * Si la donnée de l'utilisateur a été récupérée\r\n     */ const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    /**\r\n     * L'utilisateur\r\n     */ const [forum, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [commentaire, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // On utilise un useEffet pour récupérer l'utilisateur\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            // On veut faire la requête une seule fois\n            if (!loaded) {\n                // On essaye de faire la requête pour récupérer l'utilisateur\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/forum/\".concat(forumId));\n                    // On met à jour l'utilisateur\n                    setUser(response.data);\n                } // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini\n                catch (e) {\n                    showErrorMessage(\"Il y a eu une erreur lors de la r\\xe9cup\\xe9ration du forum\", e.response.data);\n                    setUser(undefined);\n                }\n                try {\n                    const response2 = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/Com/\".concat(forumId));\n                    // On met à jour les utilisateurs\n                    setUsers(response2.data);\n                } // Si on attrape une erreur alors on montre un message d'erreur\n                catch (e1) {\n                    showErrorMessage(\"Il y a eu une erreur lors de la r\\xe9cup\\xe9ration des Coms\", e1.response.data);\n                }\n                // On dit que la donnée est mise à jour\n                setLoaded(true);\n            }\n        })();\n    }, [\n        loaded\n    ]);\n    // Si la donnée n'a pas encore été récupérée on montre le loader\n    if (!loaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_customPuffLoader__WEBPACK_IMPORTED_MODULE_2__.CustomPuffLoader, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n            lineNumber: 86,\n            columnNumber: 16\n        }, undefined);\n    }\n    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs\n    if (forum === undefined) {\n        router.replace(\"/forumsUser\");\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Columns.Column, {\n            className: \"is-10 is-offset-1 tp-notification\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Columns, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Columns.Column, {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_goBackUrlButton__WEBPACK_IMPORTED_MODULE_4__.GoBackUrlButton, {\n                            url: \"/forumsUser\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"has-text-centered\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Heading, {\n                                    className: \"is-3\",\n                                    children: forum.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: forum.texte\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                                    lineNumber: 104,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                            lineNumber: 102,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commentaires_comsList__WEBPACK_IMPORTED_MODULE_7__.ComsList, {\n                                Coms: commentaire\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                                lineNumber: 108,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                            lineNumber: 107,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_10__.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commentaires_commentCreationForm__WEBPACK_IMPORTED_MODULE_6__.ComCreationForm, {\n                                postId: forumId,\n                                showErrorMessage: showErrorMessage,\n                                showSuccessMessage: showSuccessMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                                lineNumber: 111,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                            lineNumber: 110,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                    lineNumber: 100,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n            lineNumber: 98,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\pages\\\\forumsUser\\\\[forumId].js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PagedeForum, \"5eqargv6xgzo8RtFnLhNeiLEgvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = PagedeForum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_protectedRoute__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(PagedeForum, false));\nvar _c, _c1;\n$RefreshReg$(_c, \"PagedeForum\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3J1bXNVc2VyL1tmb3J1bUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUU7QUFDUjtBQUNVO0FBQ3pCO0FBQ3VCO0FBQzNCO0FBQzRDO0FBQ2xCO0FBRXRDO0FBQ21DO0FBRzdEO1FBS3FCLEVBQUNjLGlCQUFnQixFQUFFQzs7SUFFcEMsNEJBRUMsR0FDRCxNQUFNQyxTQUFTUjtJQUVmO0lBS0E7SUFJQTtJQUlBO0lBR0E7SUFDQUgsVUFBVSxJQUFNO1FBQ1g7WUFFRztZQUNBLElBQUksQ0FBQ2MsUUFBUTs7Z0JBR1QsSUFBSTtvQkFDQSxNQUFNTSxVQUFBQSwrQ0FBaUJkLEtBQU1lLEdBQUc7O29CQUdoQ0o7Z0JBR0osRUFFSTtnQkFDSixPQUFPTSxHQUFHO29CQUNOZCxpQkFBaUI7O2dCQUdyQjtnQkFFQSxJQUFJO29CQUNBLE1BQU1nQjtvQkFFTixpQ0FBaUM7b0JBQ2pDTjtnQkFDSixFQUVJLHVHQUErRDtnQkFDbkUsT0FBT0ksSUFBRztvQkFDTmQsaUJBQWlCO2dCQUNyQjtnQkFFQTtnQkFDQU0sVUFBVSxJQUFJO1lBQ2xCLENBQUM7UUFDTDtJQUNKLEdBQUc7UUFBQ0Qsb0NBQUFBLGlEQUFBQTtLQUFPO0lBRVg7SUFDQSxJQUFJLENBQUNBLFFBQVE7UUFDVDs7Ozs7SUFDSixDQUFDO0lBRUQ7SUFDQSxJQUFJRTtRQUNBTDs7SUFFSixDQUFDO0lBR0Q7a0JBRVEsbUpBQVNnQixDQUFNO1lBQUNDLFdBQVU7c0JBQ3RCOzBCQUNJOzs7c0NBQ0ksUUFBQzFCOzRCQUFnQjJCOzs7Ozs7c0NBQ2pCLFFBQUNDOzRCQUFJRixRQUFBQSw2REFBVTs7OztvR0FDZ0JaLHdFQUFXOzs7Ozs7O29HQUNsQ0EsTUFBTWlCOzs7Ozs7OENBQ1Y7Ozs7Ozs7Ozs7OzRDQUVKO3NDQUNJLDRFQUFDNUI7Z0NBQVM4QixNQUFNakI7Ozs7Ozs7Ozs7O3NDQUVwQixRQUFDckIsTUFBQUEsNkRBQUFBLENBQUFBLHVFQUFBQTtzQ0FDRztnQ0FBaUJ1QyxRQUFReEI7Z0NBQVNILGtCQUFrQkE7Z0NBQWtCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEc7R0FuR01GLFlBQUFBLFNBQUFBOztRQUthTDs7O0tBTGJLLE1BQUFBLFNBQUFBO0FBcUdOLHFCQUFlRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3J1bXNVc2VyL1tmb3J1bUlkXS5qcz82ZTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1ucywgSGVhZGluZywgU2VjdGlvbn0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQYWdlV3JhcHBlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZVdyYXBwZXJcIjtcclxuaW1wb3J0IHtDdXN0b21QdWZmTG9hZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jdXN0b21QdWZmTG9hZGVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7R29CYWNrVXJsQnV0dG9ufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nb0JhY2tVcmxCdXR0b25cIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbUNyZWF0aW9uRm9ybX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbWVudGFpcmVzL2NvbW1lbnRDcmVhdGlvbkZvcm1cIjtcclxuaW1wb3J0IHtDb21zTGlzdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbWVudGFpcmVzL2NvbXNMaXN0XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm90ZWN0ZWRSb3V0ZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBMYSBwYWdlIHBvdXIgdmlzaW9ubmVyIHVuIGZvcnVtXHJcbiAqIEBwYXJhbSBzaG93RXJyb3JNZXNzYWdlIEZvbmN0aW9uIHBvdXIgbW9udHJlciB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAqIEBwYXJhbSBzaG93U3VjY2Vzc01lc3NhZ2UgRm9uY3Rpb24gcG91ciBtb250cmVyIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG4gKi9cclxuY29uc3QgUGFnZWRlRm9ydW0gPSAoe3Nob3dFcnJvck1lc3NhZ2UsIHNob3dTdWNjZXNzTWVzc2FnZX0pID0+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIHJvdXRlclxyXG4gICAgICovXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbCdpZCBkZSBsJ3V0aWxpc2F0ZXVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZvcnVtSWQgPSByb3V0ZXIucXVlcnkuZm9ydW1JZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpIGxhIGRvbm7DqWUgZGUgbCd1dGlsaXNhdGV1ciBhIMOpdMOpIHLDqWN1cMOpcsOpZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMJ3V0aWxpc2F0ZXVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IFtmb3J1bSwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjb21tZW50YWlyZSwgc2V0VXNlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuXHJcbiAgICAvLyBPbiB1dGlsaXNlIHVuIHVzZUVmZmV0IHBvdXIgcsOpY3Vww6lyZXIgbCd1dGlsaXNhdGV1clxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gT24gdmV1dCBmYWlyZSBsYSByZXF1w6p0ZSB1bmUgc2V1bGUgZm9pc1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIGVzc2F5ZSBkZSBmYWlyZSBsYSByZXF1w6p0ZSBwb3VyIHLDqWN1cMOpcmVyIGwndXRpbGlzYXRldXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvZm9ydW0vJHtmb3J1bUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBPbiBtZXQgw6Agam91ciBsJ3V0aWxpc2F0ZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpIG9uIGF0dHJhcGUgdW5lIGVycmV1ciBhbG9ycyBvbiBtb250cmUgdW4gbWVzc2FnZSBkJ2VycmV1ciBldCBvbiBtZXQgcXVlIGwndXRpbGlzYXRldXIgZXN0IG5vbiBkw6lmaW5pXHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJJbCB5IGEgZXUgdW5lIGVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGR1IGZvcnVtXCIsIGUucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvQ29tLyR7Zm9ydW1JZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gbWV0IMOgIGpvdXIgbGVzIHV0aWxpc2F0ZXVyc1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHJlc3BvbnNlMi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJJbCB5IGEgZXUgdW5lIGVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBDb21zXCIsIGUucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gZGl0IHF1ZSBsYSBkb25uw6llIGVzdCBtaXNlIMOgIGpvdXJcclxuICAgICAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtsb2FkZWRdKTtcclxuXHJcbiAgICAvLyBTaSBsYSBkb25uw6llIG4nYSBwYXMgZW5jb3JlIMOpdMOpIHLDqWN1cMOpcsOpZSBvbiBtb250cmUgbGUgbG9hZGVyXHJcbiAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgIHJldHVybiA8Q3VzdG9tUHVmZkxvYWRlci8+XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCd1dGlsaXNhdGV1ciBuJ2VzdCBwYXMgZMOpZmluaSDDp2EgdmV1dCBkaXJlIHF1J2lsIG4nZXhpc3RlIHBhcyBldCBkb25jIG9uIHZldXQgcmV2ZW5pciDDoCBsYSBwYWdlIGRlcyB1dGlsaXNhdGV1cnNcclxuICAgIGlmIChmb3J1bSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZm9ydW1zVXNlclwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDb2x1bW5zLkNvbHVtbiBjbGFzc05hbWU9XCJpcy0xMCBpcy1vZmZzZXQtMSB0cC1ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5zLkNvbHVtbiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R29CYWNrVXJsQnV0dG9uIHVybD17XCIvZm9ydW1zVXNlclwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImlzLTNcIj57Zm9ydW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ZvcnVtLnRleHRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21zTGlzdCBDb21zPXtjb21tZW50YWlyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbUNyZWF0aW9uRm9ybSBwb3N0SWQ9e2ZvcnVtSWR9IHNob3dFcnJvck1lc3NhZ2U9e3Nob3dFcnJvck1lc3NhZ2V9IHNob3dTdWNjZXNzTWVzc2FnZT17c2hvd1N1Y2Nlc3NNZXNzYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbHVtbnMuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2x1bW5zPlxyXG4gICAgICAgICAgICA8L0NvbHVtbnMuQ29sdW1uPlxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZShQYWdlZGVGb3J1bSwgZmFsc2UpOyJdLCJuYW1lcyI6WyJDb2x1bW5zIiwiSGVhZGluZyIsIlNlY3Rpb24iLCJQYWdlV3JhcHBlciIsIkN1c3RvbVB1ZmZMb2FkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdvQmFja1VybEJ1dHRvbiIsInVzZVJvdXRlciIsIkNvbUNyZWF0aW9uRm9ybSIsIkNvbXNMaXN0IiwiYXhpb3MiLCJQcm90ZWN0ZWRSb3V0ZSIsIlBhZ2VkZUZvcnVtIiwic2hvd0Vycm9yTWVzc2FnZSIsInNob3dTdWNjZXNzTWVzc2FnZSIsInJvdXRlciIsImZvcnVtSWQiLCJxdWVyeSIsImxvYWRlZCIsInNldExvYWRlZCIsImZvcnVtIiwic2V0VXNlciIsImNvbW1lbnRhaXJlIiwic2V0VXNlcnMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlIiwidW5kZWZpbmVkIiwicmVzcG9uc2UyIiwicmVwbGFjZSIsIkNvbHVtbiIsImNsYXNzTmFtZSIsInVybCIsImRpdiIsInRpdGxlIiwicCIsInRleHRlIiwiaHIiLCJDb21zIiwicG9zdElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forumsUser/[forumId].js\n"));

/***/ })

});