(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./todomvc.js":
/*!********************!*\
  !*** ./todomvc.js ***!
  \********************/
/*! exports provided: run, __wbg_error_cc95a3d302735ca3, __widl_f_exception_1_, __widl_f_get_DOMStringMap, __widl_f_set_DOMStringMap, __widl_f_add_1_DOMTokenList, __widl_f_remove_1_DOMTokenList, __widl_f_create_element_Document, __widl_f_query_selector_all_Document, __widl_f_location_Document, __widl_f_body_Document, __widl_instanceof_Element, __widl_f_query_selector_Element, __widl_f_set_class_name_Element, __widl_f_class_list_Element, __widl_f_set_inner_html_Element, __widl_f_target_Event, __widl_instanceof_EventTarget, __widl_f_add_event_listener_with_callback_EventTarget, __widl_f_add_event_listener_with_callback_and_bool_EventTarget, __widl_f_remove_event_listener_with_callback_EventTarget, __widl_instanceof_HTMLElement, __widl_f_blur_HTMLElement, __widl_f_focus_HTMLElement, __widl_f_dataset_HTMLElement, __widl_f_set_hidden_HTMLElement, __widl_instanceof_HTMLInputElement, __widl_f_checked_HTMLInputElement, __widl_f_set_checked_HTMLInputElement, __widl_f_value_HTMLInputElement, __widl_f_set_value_HTMLInputElement, __widl_instanceof_KeyboardEvent, __widl_f_key_code_KeyboardEvent, __widl_f_hash_Location, __widl_instanceof_Node, __widl_f_append_child_Node, __widl_f_is_equal_node_Node, __widl_f_remove_child_Node, __widl_f_parent_element_Node, __widl_f_text_content_Node, __widl_f_set_text_content_Node, __widl_f_get_NodeList, __widl_f_length_NodeList, __widl_f_get_item_Storage, __widl_f_set_item_Storage, __widl_instanceof_Window, __widl_f_document_Window, __widl_f_local_storage_Window, __wbg_instanceof_Array_f0e56086baa65d92, __wbg_new_208e1332becb0e22, __wbg_push_797a2105ee49f111, __wbg_shift_053b741adf861bbe, __wbg_newnoargs_6a80f84471205fc8, __wbg_call_582b20dfcad7fee4, __wbg_next_725045e6dea16463, __wbg_done_6b0103c3045fcdba, __wbg_value_16786cf1f8001022, __wbg_now_7e59c3475b182c97, __wbg_get_e5244e978dedcdd0, __wbg_parse_60eb2433a22a2905, __wbg_stringify_58af23b4f1b4d368, __wbg_toString_7aed3d78dd1c46e0, __wbg_iterator_deb90dfd1fe6d9cd, View, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_is_object, __wbindgen_is_function, __wbindgen_string_get, __wbindgen_cb_drop, __wbindgen_cb_forget, __wbindgen_rethrow, __wbindgen_closure_wrapper146, __wbindgen_closure_wrapper148, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_cc95a3d302735ca3\", function() { return __wbg_error_cc95a3d302735ca3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_exception_1_\", function() { return __widl_f_exception_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_DOMStringMap\", function() { return __widl_f_get_DOMStringMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_DOMStringMap\", function() { return __widl_f_set_DOMStringMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_add_1_DOMTokenList\", function() { return __widl_f_add_1_DOMTokenList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_remove_1_DOMTokenList\", function() { return __widl_f_remove_1_DOMTokenList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_element_Document\", function() { return __widl_f_create_element_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_query_selector_all_Document\", function() { return __widl_f_query_selector_all_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_location_Document\", function() { return __widl_f_location_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_body_Document\", function() { return __widl_f_body_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Element\", function() { return __widl_instanceof_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_query_selector_Element\", function() { return __widl_f_query_selector_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_class_name_Element\", function() { return __widl_f_set_class_name_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_class_list_Element\", function() { return __widl_f_class_list_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_inner_html_Element\", function() { return __widl_f_set_inner_html_Element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_target_Event\", function() { return __widl_f_target_Event; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_EventTarget\", function() { return __widl_instanceof_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_add_event_listener_with_callback_EventTarget\", function() { return __widl_f_add_event_listener_with_callback_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_add_event_listener_with_callback_and_bool_EventTarget\", function() { return __widl_f_add_event_listener_with_callback_and_bool_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_remove_event_listener_with_callback_EventTarget\", function() { return __widl_f_remove_event_listener_with_callback_EventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLElement\", function() { return __widl_instanceof_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_blur_HTMLElement\", function() { return __widl_f_blur_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_focus_HTMLElement\", function() { return __widl_f_focus_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_dataset_HTMLElement\", function() { return __widl_f_dataset_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_hidden_HTMLElement\", function() { return __widl_f_set_hidden_HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLInputElement\", function() { return __widl_instanceof_HTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_checked_HTMLInputElement\", function() { return __widl_f_checked_HTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_checked_HTMLInputElement\", function() { return __widl_f_set_checked_HTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_value_HTMLInputElement\", function() { return __widl_f_value_HTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_value_HTMLInputElement\", function() { return __widl_f_set_value_HTMLInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_KeyboardEvent\", function() { return __widl_instanceof_KeyboardEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_key_code_KeyboardEvent\", function() { return __widl_f_key_code_KeyboardEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_hash_Location\", function() { return __widl_f_hash_Location; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Node\", function() { return __widl_instanceof_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_append_child_Node\", function() { return __widl_f_append_child_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_is_equal_node_Node\", function() { return __widl_f_is_equal_node_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_remove_child_Node\", function() { return __widl_f_remove_child_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_parent_element_Node\", function() { return __widl_f_parent_element_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_text_content_Node\", function() { return __widl_f_text_content_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_text_content_Node\", function() { return __widl_f_set_text_content_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_NodeList\", function() { return __widl_f_get_NodeList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_length_NodeList\", function() { return __widl_f_length_NodeList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_item_Storage\", function() { return __widl_f_get_item_Storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_item_Storage\", function() { return __widl_f_set_item_Storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_local_storage_Window\", function() { return __widl_f_local_storage_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Array_f0e56086baa65d92\", function() { return __wbg_instanceof_Array_f0e56086baa65d92; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_208e1332becb0e22\", function() { return __wbg_new_208e1332becb0e22; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_push_797a2105ee49f111\", function() { return __wbg_push_797a2105ee49f111; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shift_053b741adf861bbe\", function() { return __wbg_shift_053b741adf861bbe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_6a80f84471205fc8\", function() { return __wbg_newnoargs_6a80f84471205fc8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_582b20dfcad7fee4\", function() { return __wbg_call_582b20dfcad7fee4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_next_725045e6dea16463\", function() { return __wbg_next_725045e6dea16463; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_done_6b0103c3045fcdba\", function() { return __wbg_done_6b0103c3045fcdba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_value_16786cf1f8001022\", function() { return __wbg_value_16786cf1f8001022; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_7e59c3475b182c97\", function() { return __wbg_now_7e59c3475b182c97; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_e5244e978dedcdd0\", function() { return __wbg_get_e5244e978dedcdd0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_parse_60eb2433a22a2905\", function() { return __wbg_parse_60eb2433a22a2905; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stringify_58af23b4f1b4d368\", function() { return __wbg_stringify_58af23b4f1b4d368; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_toString_7aed3d78dd1c46e0\", function() { return __wbg_toString_7aed3d78dd1c46e0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_iterator_deb90dfd1fe6d9cd\", function() { return __wbg_iterator_deb90dfd1fe6d9cd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return __wbindgen_is_object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper146\", function() { return __wbindgen_closure_wrapper146; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper148\", function() { return __wbindgen_closure_wrapper148; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todomvc_bg */ \"./todomvc_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* Entry point into the program from JavaScript\n* @returns {void}\n*/\nfunction run() {\n    return _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_error_cc95a3d302735ca3(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n\n    varg0 = varg0.slice();\n    _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1 * 1);\n\n    console.error(varg0);\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_exception_1_(arg0) {\n    console.exception(getObject(arg0));\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __widl_f_get_DOMStringMap(ret, arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n\n    const retptr = passStringToWasm(getObject(arg0)[varg1]);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __widl_f_set_DOMStringMap(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    let varg3 = getStringFromWasm(arg3, arg4);\n    try {\n        getObject(arg0)[varg1] = varg3;\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_add_1_DOMTokenList(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).add(varg1);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_remove_1_DOMTokenList(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).remove(varg1);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(getObject(arg0).createElement(varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_query_selector_all_Document(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        return addHeapObject(getObject(arg0).querySelectorAll(varg1));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_location_Document(arg0) {\n\n    const val = getObject(arg0).location;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_f_body_Document(arg0) {\n\n    const val = getObject(arg0).body;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_instanceof_Element(idx) {\n    return getObject(idx) instanceof Element ? 1 : 0;\n}\n\nfunction __widl_f_query_selector_Element(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = getObject(arg0).querySelector(varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_set_class_name_Element(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    getObject(arg0).className = varg1;\n}\n\nfunction __widl_f_class_list_Element(arg0) {\n    return addHeapObject(getObject(arg0).classList);\n}\n\nfunction __widl_f_set_inner_html_Element(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    getObject(arg0).innerHTML = varg1;\n}\n\nfunction __widl_f_target_Event(arg0) {\n\n    const val = getObject(arg0).target;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_instanceof_EventTarget(idx) {\n    return getObject(idx) instanceof EventTarget ? 1 : 0;\n}\n\nfunction __widl_f_add_event_listener_with_callback_EventTarget(arg0, arg1, arg2, arg3, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).addEventListener(varg1, getObject(arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_add_event_listener_with_callback_and_bool_EventTarget(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).addEventListener(varg1, getObject(arg3), arg4 !== 0);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_remove_event_listener_with_callback_EventTarget(arg0, arg1, arg2, arg3, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).removeEventListener(varg1, getObject(arg3));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_HTMLElement(idx) {\n    return getObject(idx) instanceof HTMLElement ? 1 : 0;\n}\n\nfunction __widl_f_blur_HTMLElement(arg0, exnptr) {\n    try {\n        getObject(arg0).blur();\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_focus_HTMLElement(arg0, exnptr) {\n    try {\n        getObject(arg0).focus();\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_dataset_HTMLElement(arg0) {\n    return addHeapObject(getObject(arg0).dataset);\n}\n\nfunction __widl_f_set_hidden_HTMLElement(arg0, arg1) {\n    getObject(arg0).hidden = arg1 !== 0;\n}\n\nfunction __widl_instanceof_HTMLInputElement(idx) {\n    return getObject(idx) instanceof HTMLInputElement ? 1 : 0;\n}\n\nfunction __widl_f_checked_HTMLInputElement(arg0) {\n    return getObject(arg0).checked;\n}\n\nfunction __widl_f_set_checked_HTMLInputElement(arg0, arg1) {\n    getObject(arg0).checked = arg1 !== 0;\n}\n\nfunction __widl_f_value_HTMLInputElement(ret, arg0) {\n\n    const retptr = passStringToWasm(getObject(arg0).value);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nfunction __widl_f_set_value_HTMLInputElement(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    getObject(arg0).value = varg1;\n}\n\nfunction __widl_instanceof_KeyboardEvent(idx) {\n    return getObject(idx) instanceof KeyboardEvent ? 1 : 0;\n}\n\nfunction __widl_f_key_code_KeyboardEvent(arg0) {\n    return getObject(arg0).keyCode;\n}\n\nfunction __widl_f_hash_Location(ret, arg0, exnptr) {\n    try {\n\n        const retptr = passStringToWasm(getObject(arg0).hash);\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Node(idx) {\n    return getObject(idx) instanceof Node ? 1 : 0;\n}\n\nfunction __widl_f_append_child_Node(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).appendChild(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_is_equal_node_Node(arg0, arg1) {\n    return getObject(arg0).isEqualNode(getObject(arg1));\n}\n\nfunction __widl_f_remove_child_Node(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).removeChild(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_parent_element_Node(arg0) {\n\n    const val = getObject(arg0).parentElement;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_f_text_content_Node(ret, arg0) {\n    const val = getObject(arg0).textContent;\n    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nfunction __widl_f_set_text_content_Node(arg0, arg1, arg2) {\n    let varg1 = arg1 == 0 ? undefined : getStringFromWasm(arg1, arg2);\n    getObject(arg0).textContent = varg1;\n}\n\nfunction __widl_f_get_NodeList(arg0, arg1) {\n\n    const val = getObject(arg0)[arg1];\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_f_length_NodeList(arg0) {\n    return getObject(arg0).length;\n}\n\nfunction __widl_f_get_item_Storage(ret, arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n        const val = getObject(arg0).getItem(varg1);\n        const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_f_set_item_Storage(arg0, arg1, arg2, arg3, arg4, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    let varg3 = getStringFromWasm(arg3, arg4);\n    try {\n        getObject(arg0).setItem(varg1, varg3);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = getObject(arg0).document;\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_f_local_storage_Window(arg0, exnptr) {\n    try {\n\n        const val = getObject(arg0).localStorage;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_instanceof_Array_f0e56086baa65d92(idx) {\n    return getObject(idx) instanceof Array ? 1 : 0;\n}\n\nfunction __wbg_new_208e1332becb0e22() {\n    return addHeapObject(new Array());\n}\n\nfunction __wbg_push_797a2105ee49f111(arg0, arg1) {\n    return getObject(arg0).push(getObject(arg1));\n}\n\nfunction __wbg_shift_053b741adf861bbe(arg0) {\n    return addHeapObject(getObject(arg0).shift());\n}\n\nfunction __wbg_newnoargs_6a80f84471205fc8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction __wbg_call_582b20dfcad7fee4(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_next_725045e6dea16463(arg0, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).next());\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_done_6b0103c3045fcdba(arg0) {\n    return getObject(arg0).done;\n}\n\nfunction __wbg_value_16786cf1f8001022(arg0) {\n    return addHeapObject(getObject(arg0).value);\n}\n\nfunction __wbg_now_7e59c3475b182c97() {\n    return Date.now();\n}\n\nfunction __wbg_get_e5244e978dedcdd0(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(Reflect.get(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_parse_60eb2433a22a2905(arg0, arg1, exnptr) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        return addHeapObject(JSON.parse(varg0));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_stringify_58af23b4f1b4d368(arg0, exnptr) {\n    try {\n        return addHeapObject(JSON.stringify(getObject(arg0)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbg_toString_7aed3d78dd1c46e0(arg0) {\n    return addHeapObject(getObject(arg0).toString());\n}\n\nfunction __wbg_iterator_deb90dfd1fe6d9cd() {\n    return addHeapObject(Symbol.iterator);\n}\n\nfunction freeView(ptr) {\n\n    _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_view_free\"](ptr);\n}\n/**\n* Presentation layer\n*/\nclass View {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeView(ptr);\n    }\n\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nfunction __wbindgen_is_object(i) {\n    const val = getObject(i);\n    return typeof(val) === 'object' && val !== null ? 1 : 0;\n}\n\nfunction __wbindgen_is_function(i) {\n    return typeof(getObject(i)) === 'function' ? 1 : 0;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const ptr = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\n    return ptr;\n}\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = getObject(i).original;\n    dropObject(i);\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nconst __wbindgen_cb_forget = dropObject;\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_closure_wrapper146(a, b, _ignored) {\n    const f = _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(31);\n    const d = _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(32);\n    const cb = function(arg0) {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b, addHeapObject(arg0));\n\n        } finally {\n            this.a = a;\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_closure_wrapper148(a, b, _ignored) {\n    const f = _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(29);\n    const d = _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(30);\n    const cb = function() {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b);\n\n        } finally {\n            this.a = a;\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _todomvc_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./todomvc.js?");

/***/ }),

/***/ "./todomvc_bg.wasm":
/*!*************************!*\
  !*** ./todomvc_bg.wasm ***!
  \*************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbg_view_free, __wbindgen_malloc, __wbindgen_free, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./todomvc */ \"./todomvc.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./todomvc_bg.wasm?");

/***/ })

}]);