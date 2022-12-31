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

/***/ "./components/forums/forum.js":
/*!************************************!*\
  !*** ./components/forums/forum.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Forum\": function() { return /* binding */ Forum; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bulma-components */ \"./node_modules/react-bulma-components/cjs/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n/**\r\n * Le composant pour visionner un utilisateur et le modifier si l'utilisateur en a les droits\r\n * @param forum Le forum\r\n * @param setUser La fonction pour mettre à jour l'utilisateur\r\n * @param showErrorMessage Fonction pour montrer un message d'erreur\r\n * @param showSuccessMessage Fonction pour montrer un message de succès\r\n */ const Forum = (param)=>{\n    let { forum , setUser , showSuccessMessage , showErrorMessage  } = param;\n    _s();\n    /**\r\n     * Le router\r\n     */ const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    /**\r\n     * L'utilisateur modifiable\r\n     */ const [forumToUpdate, setUserToUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(forum);\n    /**\r\n     * Si une requête est en cours pour mettre les champs en disabled et loading\r\n     */ const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    /**\r\n     * Fonction utilisée pour mettre à jour les champs\r\n     * @param e L'événement\r\n     */ const updateField = (e)=>{\n        setUserToUpdate({\n            ...forumToUpdate,\n            [e.target.name]: e.target.value\n        });\n    };\n    /**\r\n     * Quand l'utilisateur veut supprimer un utilisateur\r\n     * @param event L'événement\r\n     */ const handleForumDelete = async (event)=>{\n        // On fait en sorte que l'événement par défaut ne se déclanche pas\n        event.preventDefault();\n        // On veut mettre les champs en mode disabled et loading\n        setIsLoading(true);\n        // On veut faire la suppression de l'utilisateur\n        await deleteForum(forum);\n        // Peu importe s'il y a une erreur ou un succès, on veut remettre les champs à la normale (plus en mode loading et disabled)\n        setIsLoading(false);\n    };\n    /**\r\n     * Quand l'utilisateur veut mettre à jour un utilisateur\r\n     * @param event L'événement\r\n     */ const handleForumUpdate = async (event)=>{\n        // On fait en sorte que l'événement par défaut ne se déclanche pas\n        event.preventDefault();\n        // On veut mettre les champs en mode disabled et loading\n        setIsLoading(true);\n        // On veut faire la modification\n        const updateForumResult = await updateForum(forumToUpdate);\n        // Peu importe s'il y a une erreur ou un succès, on veut remettre les champs à la normale (plus en mode loading et disabled)\n        setIsLoading(false);\n    };\n    /**\r\n     * Supprime l'utilisateur\r\n     * @param forumToDelete L'utilisateur à supprimer\r\n     */ const deleteForum = async (forumToDelete)=>{\n        // On essaye de faire la requête de suppression\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"/api/forum/\".concat(forumToDelete._id));\n            // On montre un message de succès\n            showSuccessMessage(\"La suppression du forum est un succ\\xe8s\", \"Le forum \".concat(response.data.title, \" a \\xe9t\\xe9 supprim\\xe9 !\"));\n            // Si la suppression est un succès alors on renvoie l'utilisateur vers la page \"/users\" car cet utilisateur n'existe plus\n            router.replace(\"/forums\");\n        } // Si on attrape une erreur alors on montre un message d'erreur\n        catch (e) {\n            showErrorMessage(\"Il y a eu une erreur lors de la suppression du forum\", e.response.data);\n        }\n    };\n    /**\r\n     * Met l'utilisateur à jour\r\n     * @param forumToUpdate Le forum à mettre à jour\r\n     */ const updateForum = async (forumToUpdate)=>{\n        // On essaye de faire la requête de mise à jour\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"/api/forum/\".concat(forumToUpdate._id), forumToUpdate);\n            // On montre un message de succès\n            showSuccessMessage(\"La mise \\xe0 jour du forum est un succ\\xe8s\", \"Le forum \".concat(response.data.title, \" a \\xe9t\\xe9 modifi\\xe9 !\"));\n            // On veut mettre à jour l'utilisateur\n            setUser(response.data);\n            // On renvoie la donnée de la réponse pour permettre au composant de faire ce qu'il veut avec\n            return response.data;\n        } // Si on attrape une erreur alors on montre un message d'erreur\n        catch (e) {\n            showErrorMessage(\"Il y a eu une erreur lors de la mise \\xe0 jour du forum\", e.response.data);\n            // On renvoie undefined\n            return undefined;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                            children: \"Titre\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                            name: \"title\",\n                            className: \"is-medium\",\n                            placeholder: \"Titre\",\n                            onChange: updateField,\n                            value: forumToUpdate.title,\n                            disabled: isLoading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                            children: \"Texte\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Input, {\n                            name: \"texte\",\n                            className: \"is-medium\",\n                            placeholder: \"Texte\",\n                            onChange: updateField,\n                            value: forumToUpdate.texte,\n                            disabled: isLoading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Button.Group, {\n                        align: \"right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: handleForumDelete,\n                                disabled: isLoading,\n                                loading: isLoading,\n                                color: \"danger\",\n                                children: \"Supprimer le forum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                                lineNumber: 153,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: handleForumUpdate,\n                                disabled: isLoading,\n                                loading: isLoading,\n                                color: \"success\",\n                                children: \"Mettre \\xe0 jour le forum\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                                lineNumber: 154,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                        lineNumber: 152,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                    lineNumber: 150,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Joaquim DOS SANTOS\\\\Desktop\\\\ProgrammepythonJava\\\\Forum-Replica\\\\Website\\\\components\\\\forums\\\\forum.js\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Forum, \"2QWSW6mJ4fey12jGjb85h6LgciA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Forum;\nvar _c;\n$RefreshReg$(_c, \"Forum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZvcnVtcy9mb3J1bS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Q7QUFDMUI7QUFDSztBQUNPO0FBRXRDO1FBT3NCLEVBQUNNLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxtQkFBa0IsRUFBRUMsaUJBQWdCLEVBQUM7O0lBRXhFLDRCQUVDLEdBQ0QsTUFBTUMsU0FBU047SUFFZiwyQ0FFQyxHQUNELE1BQU0sQ0FBQ087SUFFUDtJQUtBO1FBS0lDLGdCQUFnQjs7O1FBR2hCO0lBQ0o7SUFFQTtRQUtJO1FBQ0FTLE1BQU1DLGNBQWM7UUFFcEI7UUFDQVIsYUFBYSxJQUFJO1FBRWpCLHVGQUFnRDtRQUNoRDtRQUVBO1FBQ0FBLGFBQWEsS0FBSztJQUN0QjtJQUVBO1FBS0k7UUFDQU8sTUFBTUMsY0FBYztRQUVwQjs7UUFHQTtRQUNBLE1BQU1HLG9CQUFvQixNQUFNQyxZQUFZZjtRQUU1QztRQUNBRyxhQUFhLEtBQUs7SUFDdEI7SUFFQTtRQU1JLCtDQUErQztRQUMvQyxJQUFJO1lBQ0EsTUFBTWMsV0FBVyxNQUFNMUIsTUFBTTJCLE1BQU0sQ0FBQztZQUVwQztZQUNBckIsbUJBQW1CLDRDQUF5QyxZQUFnQyxPQUFwQm9CLFNBQVNHLElBQUksQ0FBQ0MsS0FBSyxFQUFDO1lBRTVGOztRQUVKO1FBR0EsT0FBT2hCLEdBQUc7WUFDTlAsaUJBQWlCO1FBQ3JCO0lBQ0o7SUFFQTtRQU1JLCtDQUErQztRQUMvQyxJQUFJO1lBQ0EsTUFBTW1CLFdBQVcsTUFBTTFCO1lBRXZCLGlDQUFpQztZQUNqQ00sbUJBQW1CLCtDQUF5QyxZQUFnQyxPQUFwQm9CLFNBQVNHLElBQUksQ0FBQ0MsS0FBSyxFQUFDO1lBRTVGOzs7WUFJQSxPQUFPSixTQUFTRztRQUNwQixFQUVJO1FBQ0osT0FBT2YsR0FBRztZQUNOUCxpQkFBaUI7WUFFakI7WUFDQSxPQUFPMEIsZ0JBQUFBLHVEQUFBQTtRQUNYO0lBQ0o7SUFFQSxxQkFDSSxRQUFDQzs7MEJBQ0csUUFBQ25DLEtBQUtvQyxLQUFLOzs7Ozs7Ozs7Ozs0QkFHU25CLE1BQUs7NEJBQVF1QixXQUFVOzRCQUN2QkMsYUFBWTs0QkFBUUMsVUFBVTVCOzRCQUM5QkksT0FBT1I7NEJBQXFCaUMsVUFBVS9COzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJMUQsUUFBQ1osS0FBS29DLEtBQUs7MEJBQ1A7OztzQ0FDZ0I7Ozs7OztzQ0FDWixRQUFDcEM7NEJBQVdpQixNQUFLOzRCQUFRdUIsV0FBVTs0QkFDdkJDLGFBQVk7NEJBQVFDLFVBQVU1QjtvQ0FDOUJJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBCLFFBQUNsQixLQUFLb0MsS0FBSzswQkFDUDs4QkFFSTt3QkFBY1UsR0FBQUEsU0FBTTs7MENBQ2hCO2dDQUFRQyxTQUFTNUI7Z0NBQW1Cd0IsVUFBVS9CO2dDQUFXb0MsU0FBU3BDO2dDQUFXcUMsT0FBTTswQ0FBUzs7Ozs7OztnQ0FDcEZGO2dDQUE0QkosVUFBVS9CO2dDQUFXb0M7Z0NBQW9CQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckcsRUFBQztHQW5KWTdDOztRQUtNRDs7O0tBTE5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ydW1zL2ZvcnVtLmpzP2Q1ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b24sIEZvcm19IGZyb20gXCJyZWFjdC1idWxtYS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBMZSBjb21wb3NhbnQgcG91ciB2aXNpb25uZXIgdW4gdXRpbGlzYXRldXIgZXQgbGUgbW9kaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBlbiBhIGxlcyBkcm9pdHNcclxuICogQHBhcmFtIGZvcnVtIExlIGZvcnVtXHJcbiAqIEBwYXJhbSBzZXRVc2VyIExhIGZvbmN0aW9uIHBvdXIgbWV0dHJlIMOgIGpvdXIgbCd1dGlsaXNhdGV1clxyXG4gKiBAcGFyYW0gc2hvd0Vycm9yTWVzc2FnZSBGb25jdGlvbiBwb3VyIG1vbnRyZXIgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gKiBAcGFyYW0gc2hvd1N1Y2Nlc3NNZXNzYWdlIEZvbmN0aW9uIHBvdXIgbW9udHJlciB1biBtZXNzYWdlIGRlIHN1Y2PDqHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBGb3J1bSA9ICh7Zm9ydW0sIHNldFVzZXIsIHNob3dTdWNjZXNzTWVzc2FnZSwgc2hvd0Vycm9yTWVzc2FnZX0pID0+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExlIHJvdXRlclxyXG4gICAgICovXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTCd1dGlsaXNhdGV1ciBtb2RpZmlhYmxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IFtmb3J1bVRvVXBkYXRlLCBzZXRVc2VyVG9VcGRhdGVdID0gdXNlU3RhdGUoZm9ydW0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2kgdW5lIHJlcXXDqnRlIGVzdCBlbiBjb3VycyBwb3VyIG1ldHRyZSBsZXMgY2hhbXBzIGVuIGRpc2FibGVkIGV0IGxvYWRpbmdcclxuICAgICAqL1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvbmN0aW9uIHV0aWxpc8OpZSBwb3VyIG1ldHRyZSDDoCBqb3VyIGxlcyBjaGFtcHNcclxuICAgICAqIEBwYXJhbSBlIEwnw6l2w6luZW1lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3QgdXBkYXRlRmllbGQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJUb1VwZGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmZvcnVtVG9VcGRhdGUsXHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFF1YW5kIGwndXRpbGlzYXRldXIgdmV1dCBzdXBwcmltZXIgdW4gdXRpbGlzYXRldXJcclxuICAgICAqIEBwYXJhbSBldmVudCBMJ8OpdsOpbmVtZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGhhbmRsZUZvcnVtRGVsZXRlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gT24gZmFpdCBlbiBzb3J0ZSBxdWUgbCfDqXbDqW5lbWVudCBwYXIgZMOpZmF1dCBuZSBzZSBkw6ljbGFuY2hlIHBhc1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHZldXQgbWV0dHJlIGxlcyBjaGFtcHMgZW4gbW9kZSBkaXNhYmxlZCBldCBsb2FkaW5nXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAvLyBPbiB2ZXV0IGZhaXJlIGxhIHN1cHByZXNzaW9uIGRlIGwndXRpbGlzYXRldXJcclxuICAgICAgICBhd2FpdCBkZWxldGVGb3J1bShmb3J1bSk7XHJcblxyXG4gICAgICAgIC8vIFBldSBpbXBvcnRlIHMnaWwgeSBhIHVuZSBlcnJldXIgb3UgdW4gc3VjY8Oocywgb24gdmV1dCByZW1ldHRyZSBsZXMgY2hhbXBzIMOgIGxhIG5vcm1hbGUgKHBsdXMgZW4gbW9kZSBsb2FkaW5nIGV0IGRpc2FibGVkKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWFuZCBsJ3V0aWxpc2F0ZXVyIHZldXQgbWV0dHJlIMOgIGpvdXIgdW4gdXRpbGlzYXRldXJcclxuICAgICAqIEBwYXJhbSBldmVudCBMJ8OpdsOpbmVtZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGhhbmRsZUZvcnVtVXBkYXRlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gT24gZmFpdCBlbiBzb3J0ZSBxdWUgbCfDqXbDqW5lbWVudCBwYXIgZMOpZmF1dCBuZSBzZSBkw6ljbGFuY2hlIHBhc1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHZldXQgbWV0dHJlIGxlcyBjaGFtcHMgZW4gbW9kZSBkaXNhYmxlZCBldCBsb2FkaW5nXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAvLyBPbiB2ZXV0IGZhaXJlIGxhIG1vZGlmaWNhdGlvblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUZvcnVtUmVzdWx0ID0gYXdhaXQgdXBkYXRlRm9ydW0oZm9ydW1Ub1VwZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIFBldSBpbXBvcnRlIHMnaWwgeSBhIHVuZSBlcnJldXIgb3UgdW4gc3VjY8Oocywgb24gdmV1dCByZW1ldHRyZSBsZXMgY2hhbXBzIMOgIGxhIG5vcm1hbGUgKHBsdXMgZW4gbW9kZSBsb2FkaW5nIGV0IGRpc2FibGVkKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwcmltZSBsJ3V0aWxpc2F0ZXVyXHJcbiAgICAgKiBAcGFyYW0gZm9ydW1Ub0RlbGV0ZSBMJ3V0aWxpc2F0ZXVyIMOgIHN1cHByaW1lclxyXG4gICAgICovXHJcbiAgICBjb25zdCBkZWxldGVGb3J1bSA9IGFzeW5jIChmb3J1bVRvRGVsZXRlKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIE9uIGVzc2F5ZSBkZSBmYWlyZSBsYSByZXF1w6p0ZSBkZSBzdXBwcmVzc2lvblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL2ZvcnVtLyR7Zm9ydW1Ub0RlbGV0ZS5faWR9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiBtb250cmUgdW4gbWVzc2FnZSBkZSBzdWNjw6hzXHJcbiAgICAgICAgICAgIHNob3dTdWNjZXNzTWVzc2FnZShcIkxhIHN1cHByZXNzaW9uIGR1IGZvcnVtIGVzdCB1biBzdWNjw6hzXCIsIGBMZSBmb3J1bSAke3Jlc3BvbnNlLmRhdGEudGl0bGV9IGEgw6l0w6kgc3VwcHJpbcOpICFgKVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGEgc3VwcHJlc3Npb24gZXN0IHVuIHN1Y2PDqHMgYWxvcnMgb24gcmVudm9pZSBsJ3V0aWxpc2F0ZXVyIHZlcnMgbGEgcGFnZSBcIi91c2Vyc1wiIGNhciBjZXQgdXRpbGlzYXRldXIgbidleGlzdGUgcGx1c1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9mb3J1bXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIklsIHkgYSBldSB1bmUgZXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24gZHUgZm9ydW1cIiwgZS5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXQgbCd1dGlsaXNhdGV1ciDDoCBqb3VyXHJcbiAgICAgKiBAcGFyYW0gZm9ydW1Ub1VwZGF0ZSBMZSBmb3J1bSDDoCBtZXR0cmUgw6Agam91clxyXG4gICAgICovXHJcbiAgICBjb25zdCB1cGRhdGVGb3J1bSA9IGFzeW5jIChmb3J1bVRvVXBkYXRlKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIE9uIGVzc2F5ZSBkZSBmYWlyZSBsYSByZXF1w6p0ZSBkZSBtaXNlIMOgIGpvdXJcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChgL2FwaS9mb3J1bS8ke2ZvcnVtVG9VcGRhdGUuX2lkfWAsIGZvcnVtVG9VcGRhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gT24gbW9udHJlIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICBzaG93U3VjY2Vzc01lc3NhZ2UoXCJMYSBtaXNlIMOgIGpvdXIgZHUgZm9ydW0gZXN0IHVuIHN1Y2PDqHNcIiwgYExlIGZvcnVtICR7cmVzcG9uc2UuZGF0YS50aXRsZX0gYSDDqXTDqSBtb2RpZmnDqSAhYClcclxuXHJcbiAgICAgICAgICAgIC8vIE9uIHZldXQgbWV0dHJlIMOgIGpvdXIgbCd1dGlsaXNhdGV1clxyXG4gICAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gT24gcmVudm9pZSBsYSBkb25uw6llIGRlIGxhIHLDqXBvbnNlIHBvdXIgcGVybWV0dHJlIGF1IGNvbXBvc2FudCBkZSBmYWlyZSBjZSBxdSdpbCB2ZXV0IGF2ZWNcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyXHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIklsIHkgYSBldSB1bmUgZXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIGR1IGZvcnVtXCIsIGUucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiByZW52b2llIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaXRyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzc05hbWU9XCJpcy1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0cmVcIiBvbkNoYW5nZT17dXBkYXRlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvcnVtVG9VcGRhdGUudGl0bGV9IGRpc2FibGVkPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGV4dGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbmFtZT1cInRleHRlXCIgY2xhc3NOYW1lPVwiaXMtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRleHRlXCIgb25DaGFuZ2U9e3VwZGF0ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3J1bVRvVXBkYXRlLnRleHRlfSBkaXNhYmxlZD17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb3J1bURlbGV0ZX0gZGlzYWJsZWQ9e2lzTG9hZGluZ30gbG9hZGluZz17aXNMb2FkaW5nfSBjb2xvcj1cImRhbmdlclwiPlN1cHByaW1lciBsZSBmb3J1bTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZvcnVtVXBkYXRlfSBkaXNhYmxlZD17aXNMb2FkaW5nfSBsb2FkaW5nPXtpc0xvYWRpbmd9IGNvbG9yPVwic3VjY2Vzc1wiPk1ldHRyZSDDoCBqb3VyIGxlIGZvcnVtPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm0iLCJheGlvcyIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9ydW0iLCJmb3J1bSIsInNldFVzZXIiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzaG93RXJyb3JNZXNzYWdlIiwicm91dGVyIiwiZm9ydW1Ub1VwZGF0ZSIsInNldFVzZXJUb1VwZGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVwZGF0ZUZpZWxkIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUZvcnVtRGVsZXRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbGV0ZUZvcnVtIiwiaGFuZGxlRm9ydW1VcGRhdGUiLCJ1cGRhdGVGb3J1bVJlc3VsdCIsInVwZGF0ZUZvcnVtIiwiZm9ydW1Ub0RlbGV0ZSIsInJlc3BvbnNlIiwiZGVsZXRlIiwiX2lkIiwiZGF0YSIsInRpdGxlIiwicmVwbGFjZSIsInB1dCIsInVuZGVmaW5lZCIsImRpdiIsIkZpZWxkIiwiQ29udHJvbCIsIkxhYmVsIiwiSW5wdXQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJ0ZXh0ZSIsIkdyb3VwIiwiYWxpZ24iLCJvbkNsaWNrIiwibG9hZGluZyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forums/forum.js\n"));

/***/ })

});