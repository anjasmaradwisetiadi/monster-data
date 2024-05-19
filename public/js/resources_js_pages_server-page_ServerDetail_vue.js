"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_server-page_ServerDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_auth_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/auth/authService */ "./resources/js/store/auth/authService.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingAndAlert.vue */ "./resources/js/components/LoadingAndAlert.vue");





var dummySpesificHeader = 'dashboard/detail';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'FrameServer',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var paramsUrlSlug = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('dashboard');
    var nameUser = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var emailUser = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var isConfirmModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      paramsUrlSlug: paramsUrlSlug
    });
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterStateLoading;
    });
    var responseAuth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$getters;
      return store === null || store === void 0 || (_store$getters = store.getters) === null || _store$getters === void 0 ? void 0 : _store$getters.getterResponseAuth;
    });
    var responseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterResponseModal;
    });
    var nameModalButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterNameModalButton;
    });
    var responseError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterResponseError;
    });
    var isOpenModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterStateModal;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var paramsRoute = router.currentRoute.value.path;
      state.paramsUrlSlug = paramsRoute.replace('/', '');
      _store_auth_authService__WEBPACK_IMPORTED_MODULE_1__.authService.autoLogin();
      var getUser = JSON.parse(localStorage.getItem('user'));
      nameUser.value = getUser.name;
      emailUser.value = getUser.name;
    });
    function logout() {
      _store_auth_authService__WEBPACK_IMPORTED_MODULE_1__.authService.confirmLogout();
      isConfirmModal.value = true;
    }
    function isOpenModelClose($event) {
      store.commit('mutateModal', false);
      store.commit('mutateResponseModal', null);
      if ($event.value) {
        var _localStorage;
        var auth = JSON.parse((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem('user'));
        var payload = {
          email: auth.email
        };
        isConfirmModal.value = false;
        _store_auth_authService__WEBPACK_IMPORTED_MODULE_1__.authService.logout(payload);
      }
    }
    function back() {
      this.router.go(-1);
    }
    var __returned__ = {
      store: store,
      router: router,
      dummySpesificHeader: dummySpesificHeader,
      get paramsUrlSlug() {
        return paramsUrlSlug;
      },
      set paramsUrlSlug(v) {
        paramsUrlSlug = v;
      },
      get nameUser() {
        return nameUser;
      },
      set nameUser(v) {
        nameUser = v;
      },
      get emailUser() {
        return emailUser;
      },
      set emailUser(v) {
        emailUser = v;
      },
      get isConfirmModal() {
        return isConfirmModal;
      },
      set isConfirmModal(v) {
        isConfirmModal = v;
      },
      state: state,
      loading: loading,
      responseAuth: responseAuth,
      responseModal: responseModal,
      nameModalButton: nameModalButton,
      responseError: responseError,
      get isOpenModal() {
        return isOpenModal;
      },
      set isOpenModal(v) {
        isOpenModal = v;
      },
      logout: logout,
      isOpenModelClose: isOpenModelClose,
      back: back,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get authService() {
        return _store_auth_authService__WEBPACK_IMPORTED_MODULE_1__.authService;
      },
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_3__.useStore;
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter;
      },
      LoadingAndAlert: _LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'LoadingAndAlert',
  props: {
    loading: {
      "default": false
    },
    responseModal: {
      type: Object,
      "default": function _default() {
        return {
          title: 'Something Wrong',
          message: 'Please contact your admin'
        };
      }
    },
    confirmButton: {
      "default": 'Ok'
    },
    denyButton: {
      "default": 'No'
    },
    // for add name modal unique
    nameModal: {
      "default": ''
    },
    isConfirmModal: {
      "default": false
    },
    isOpenModal: {
      "default": false
    }
  },
  emits: ['confirm', 'confirmDelete', 'isOpenModelClose'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var props = __props;
    var emit = __emit;
    function onToggle(data) {
      props.isOpenModal = !props.isOpenModal;
      var payload = {
        name: props.nameModal,
        value: data
      };
      emit('isOpenModelClose', payload);
    }
    var __returned__ = {
      store: store,
      props: props,
      emit: emit,
      onToggle: onToggle,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_1__.useStore;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _components_FrameServer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FrameServer.vue */ "./resources/js/components/FrameServer.vue");
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sidebar.vue */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoadingAndAlert.vue */ "./resources/js/components/LoadingAndAlert.vue");
/* harmony import */ var _store_server_serverService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/server/serverService */ "./resources/js/store/server/serverService.js");
/* harmony import */ var _assets_data_dummyData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/dummyData */ "./resources/assets/data/dummyData.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ServerDetail',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_6__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterStateLoading;
    });
    var responseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterResponseModal;
    });
    var nameModalButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterNameModalButton;
    });
    var responseError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterResponseError;
    });
    var getDetailServers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$getters;
      return store === null || store === void 0 || (_store$getters = store.getters) === null || _store$getters === void 0 || (_store$getters = _store$getters.getterDetailServer) === null || _store$getters === void 0 ? void 0 : _store$getters.data;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var payloadSlug = router.currentRoute.value.params.slug;
      _store_server_serverService__WEBPACK_IMPORTED_MODULE_4__.serverService.detailServer(payloadSlug);
    });
    var dataBackupListServers = _assets_data_dummyData__WEBPACK_IMPORTED_MODULE_5__.dataDummyBackupListServer.data;
    var __returned__ = {
      store: store,
      router: router,
      loading: loading,
      responseModal: responseModal,
      nameModalButton: nameModalButton,
      responseError: responseError,
      getDetailServers: getDetailServers,
      dataBackupListServers: dataBackupListServers,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_6__.useStore;
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_7__.useRouter;
      },
      FrameServer: _components_FrameServer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      LoadingAndAlert: _components_LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      get serverService() {
        return _store_server_serverService__WEBPACK_IMPORTED_MODULE_4__.serverService;
      },
      get dataDummyBackupListServer() {
        return _assets_data_dummyData__WEBPACK_IMPORTED_MODULE_5__.dataDummyBackupListServer;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_image_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/user.png */ "./resources/assets/image/user.png");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-89699c16"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "FrameLogin",
  "class": "flex flex-col min-h-screen"
};
var _hoisted_2 = {
  "class": "lg:px-16 px-6 bg-white z-10 shadow-lg flex flex-wrap items-center py-1 sticky top-0"
};
var _hoisted_3 = {
  "class": "flex-1 flex justify-between items-center"
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-3xl font-bold text-blue-primary py-2"
  }, "Schedule", -1 /* HOISTED */);
});
var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  "class": "flex"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"block\" data-v-89699c16><div class=\"text-xs\" data-v-89699c16> Schedule View </div><div class=\"flex flex-end\" data-v-89699c16><h2 class=\"text-2xl font-bold text-blue-primary\" data-v-89699c16> Postgre SQL </h2><span class=\"flex-end text-xs font-medium bg-emerald-200 py-1 px-3 rounded-full ml-3\" data-v-89699c16>Running...</span></div></div>", 1);
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "menu-toggle",
    "class": "cursor-pointer lg:hidden block"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    "class": "fill-current text-gray-900",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "menu"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  })])], -1 /* HOISTED */);
});
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "hidden",
    type: "checkbox",
    id: "menu-toggle"
  }, null, -1 /* HOISTED */);
});
var _hoisted_12 = {
  "class": "hidden lg:flex lg:items-center lg:w-auto w-full",
  id: "menu"
};
var _hoisted_13 = {
  "class": "text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0"
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "py-2 lg:py-0 pl-6"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "hover:pb-4 hover:border-b-4 hover:border-blue-primary",
    href: "#"
  }, " Support ")], -1 /* HOISTED */);
});
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "py-2 lg:py-0 pl-6"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "hover:pb-4 hover:border-b-4 hover:border-blue-primary",
    href: "#"
  }, " Documentation ")], -1 /* HOISTED */);
});
var _hoisted_16 = {
  "class": "py-2 lg:py-0 pl-6"
};
var _hoisted_17 = {
  "class": "flex py-2 lg:py-0 pl-12"
};
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": ""
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "h-10 w-10 rounded-full",
    src: _assets_image_user_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "user"
  })], -1 /* HOISTED */);
});
var _hoisted_19 = {
  "class": "block text-left pl-4"
};
var _hoisted_20 = {
  "class": "text-base"
};
var _hoisted_21 = {
  "class": "text-xs text-slate-400"
};
var _hoisted_22 = {
  "class": "flex-1 relative h-screen"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer class=\"background-footer\" data-v-89699c16><div class=\"flex flex-row w-full px-6 lg:px-8\" data-v-89699c16><div class=\"w-full flex-end\" data-v-89699c16><span class=\"text-slate-400 text-sm\" data-v-89699c16> Version 1.3 </span><h5 class=\"text-slate-400 mt-4\" data-v-89699c16><span class=\"text-slate-400 text-xs block\" data-v-89699c16> Last Update: </span><span class=\"text-lg\" data-v-89699c16> August 17, 2023 </span></h5></div></div></footer>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" start navbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.paramsUrlSlug === 'schedule' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [].concat(_hoisted_6))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.paramsUrlSlug !== 'schedule' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.back();
    }),
    "class": "material-icons border-slate-300 rounded-full border p-3 cursor-pointer mr-4",
    style: {
      "font-size": "20px"
    }
  }, " chevron_left "), _hoisted_9])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "hover:pb-4 hover:border-b-4 hover:border-blue-primary",
    href: "#",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.logout();
    })
  }, " Logout ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.nameUser), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.emailUser), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end navbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content-form", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" start footer "), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end footer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingAndAlert"], {
    loading: $setup.loading,
    isOpenModal: $setup.isOpenModal,
    confirmButton: $setup.nameModalButton,
    isConfirmModal: $setup.isConfirmModal,
    onIsOpenModelClose: $setup.isOpenModelClose,
    responseModal: $setup.responseModal
  }, null, 8 /* PROPS */, ["loading", "isOpenModal", "confirmButton", "isConfirmModal", "responseModal"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_icon_spinner_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icon/spinner.svg */ "./resources/assets/icon/spinner.svg");
/* harmony import */ var _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/logo.png */ "./resources/assets/image/logo.png");



var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-936ee9f4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "LoadingAndAlert",
  "class": ""
};
var _hoisted_2 = {
  key: 0,
  id: "modal-bg",
  "class": "w-full h-full z-20 absolute top-0 absolute blur-background"
};
var _hoisted_3 = {
  key: 1,
  "class": "sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 top-1/2 left-1/2 -translate-x-1/2 absolute z-20"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_icon_spinner_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "spinner"
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  id: "modal-box",
  "class": "sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 shadow-md absolute z-20"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-40",
    src: _assets_image_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "logo"
  }, null, -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "text-xl text-blue-primary font-medium mt-9"
};
var _hoisted_9 = {
  "class": "text-center mt-4"
};
var _hoisted_10 = {
  key: 0,
  "class": "w-full flex justify-center"
};
var _hoisted_11 = {
  key: 1,
  "class": "w-full flex justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$props, _$setup$props2, _$setup$props3, _$setup$props4, _$setup$props5;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(_$setup$props = $setup.props) !== null && _$setup$props !== void 0 && _$setup$props.loading || (_$setup$props2 = $setup.props) !== null && _$setup$props2 !== void 0 && _$setup$props2.isOpenModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" loading "), (_$setup$props3 = $setup.props) !== null && _$setup$props3 !== void 0 && _$setup$props3.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [].concat(_hoisted_5))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props4 = $setup.props) !== null && _$setup$props4 !== void 0 && _$setup$props4.isOpenModal && !((_$setup$props5 = $setup.props) !== null && _$setup$props5 !== void 0 && _$setup$props5.loading) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    key: 2,
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$props6, _$setup$props7;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props6 = $setup.props) === null || _$setup$props6 === void 0 || (_$setup$props6 = _$setup$props6.responseModal) === null || _$setup$props6 === void 0 ? void 0 : _$setup$props6.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props7 = $setup.props) === null || _$setup$props7 === void 0 || (_$setup$props7 = _$setup$props7.responseModal) === null || _$setup$props7 === void 0 ? void 0 : _$setup$props7.message), 1 /* TEXT */), !$setup.props.isConfirmModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        id: "modal-close",
        "class": "py-2 px-6 bg-blue-primary rounded-lg text-white mb-7",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.onToggle(false);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.confirmButton), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.props.isConfirmModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        id: "modal-close",
        "class": "py-2 px-6 bg-blue-primary rounded-lg text-white mb-7",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.onToggle(true);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.confirmButton), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        id: "modal-close",
        "class": "py-2 px-6 bg-red-primary rounded-lg text-white mb-7 ml-2",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.onToggle(false);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.denyButton), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_image_database_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/database.png */ "./resources/assets/image/database.png");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2d3b9c73"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "ServerDetail"
};
var _hoisted_2 = {
  "class": "flex flex-row"
};
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = {
  "class": "relative flex-grow"
};
var _hoisted_5 = {
  "class": "mt-8 py-2 px-8 mx-4 flex flex-col"
};
var _hoisted_6 = {
  "class": "flex flex-row mt-8 py-2 px-8 mx-4"
};
var _hoisted_7 = {
  "class": "flex flex-row w-4/5"
};
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-1/5"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-36",
    src: _assets_image_database_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "database"
  })], -1 /* HOISTED */);
});
var _hoisted_9 = {
  "class": "w-4/5"
};
var _hoisted_10 = {
  "class": "text-xl font-semibold"
};
var _hoisted_11 = {
  "class": "flex flex-row mt-8"
};
var _hoisted_12 = {
  "class": "w-1/2"
};
var _hoisted_13 = {
  "class": "flex"
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Method ", -1 /* HOISTED */);
});
var _hoisted_15 = {
  "class": "w-3/5"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Last Excution"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-3/5"
  }, ": last night ")], -1 /* HOISTED */);
});
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Schedule"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-3/5"
  }, ": at 11:59 pm")], -1 /* HOISTED */);
});
var _hoisted_18 = {
  "class": "flex"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Storage", -1 /* HOISTED */);
});
var _hoisted_20 = {
  "class": "w-3/5"
};
var _hoisted_21 = {
  "class": "w-1/2"
};
var _hoisted_22 = {
  "class": "flex"
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Compression ", -1 /* HOISTED */);
});
var _hoisted_24 = {
  "class": "w-3/5"
};
var _hoisted_25 = {
  "class": "flex"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Encryption", -1 /* HOISTED */);
});
var _hoisted_27 = {
  "class": "w-3/5"
};
var _hoisted_28 = {
  "class": "flex"
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "w-2/5"
  }, "Backup Name Template", -1 /* HOISTED */);
});
var _hoisted_30 = {
  "class": "w-3/5"
};
var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex flex-row mt-6"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, " Schedule Detail "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
  }, " Duplicate This Schedule ")], -1 /* HOISTED */);
});
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-1/5 flex"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex items-end"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "flex justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons text-white p-1 cursor-pointer",
    style: {
      "font-size": "16px"
    }
  }, " pause_circle ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex items-end ml-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons text-white p-1 cursor-pointer",
    style: {
      "font-size": "16px"
    }
  }, " border_color ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex items-end ml-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "flex justify-center rounded-md bg-red-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons text-white p-1 cursor-pointer",
    style: {
      "font-size": "16px"
    }
  }, " delete ")])])], -1 /* HOISTED */);
});
var _hoisted_33 = {
  "class": "shadow-lg mt-8 py-2 px-8 mx-4 border"
};
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-4 flex"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-1/2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-lg font-semibold"
  }, " Backup ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-1/2 flex justify-end"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-48"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password",
    name: "password",
    type: "password",
    autocomplete: "current-password",
    required: "",
    "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]",
    placeholder: "Search"
  })])])], -1 /* HOISTED */);
});
var _hoisted_35 = {
  "class": "p-4 bg-slate-100 rounded-md mt-6"
};
var _hoisted_36 = {
  "class": "w-full mb-12 xl:mb-0 px-4 mx-auto mt-5"
};
var _hoisted_37 = {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
};
var _hoisted_38 = {
  "class": "block w-full"
};
var _hoisted_39 = {
  "class": "items-center bg-transparent w-full border-collapse"
};
var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": "rounded-t mb-0 border-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
  }, " Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
  }, " Status "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
  }, " Started (Duration) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
  }, " Server "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "border-r-0 px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
  }, " Action ")])], -1 /* HOISTED */);
});
var _hoisted_41 = {
  "class": "border-b-2 border-l-0 text-center align-middle whitespace-nowrap p-4 text-left text-blueGray-700"
};
var _hoisted_42 = {
  "class": "border-2 text-center text-green-primary align-middle whitespace-nowrap p-4 text-left text-blueGray-700"
};
var _hoisted_43 = {
  "class": "border-2 text-center align-middle whitespace-nowrap p-4"
};
var _hoisted_44 = {
  "class": "border-2 text-center align-center whitespace-nowrap p-4"
};
var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "border-2 text-center px-6 align-middle border-r-0 whitespace-nowrap p-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex p-2 justify-center"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex text-blue-primary px-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons text-blue-primary text-base font-medium",
    style: {
      "font-size": "24px"
    }
  }, " auto_delete "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "ml-2 text-base font-light"
  }, " Restore ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex px-2 border-l-2 text-red-primary"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons text-red-primary",
    style: {
      "font-size": "24px"
    }
  }, " delete "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "ml-2 text-base font-light"
  }, " Delete ")])])], -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FrameServer"], null, {
    "content-form": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$getDetailServ, _$setup$getDetailServ2, _$setup$getDetailServ3, _$setup$getDetailServ4, _$setup$getDetailServ5, _$setup$getDetailServ6;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Sidebar"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" information server "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ = $setup.getDetailServers) === null || _$setup$getDetailServ === void 0 ? void 0 : _$setup$getDetailServ.schedule_name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ2 = $setup.getDetailServers) === null || _$setup$getDetailServ2 === void 0 ? void 0 : _$setup$getDetailServ2.backup_method), 1 /* TEXT */)]), _hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ3 = $setup.getDetailServers) === null || _$setup$getDetailServ3 === void 0 ? void 0 : _$setup$getDetailServ3.storage_name), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ4 = $setup.getDetailServers) !== null && _$setup$getDetailServ4 !== void 0 && _$setup$getDetailServ4.use_compression ? 'Yes' : 'No'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ5 = $setup.getDetailServers) !== null && _$setup$getDetailServ5 !== void 0 && _$setup$getDetailServ5.use_encryption ? 'Yes' : 'No'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_30, ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$getDetailServ6 = $setup.getDetailServers) === null || _$setup$getDetailServ6 === void 0 ? void 0 : _$setup$getDetailServ6.backup_name), 1 /* TEXT */)])])]), _hoisted_31])]), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table list server "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.dataBackupListServers, function (dataBackupListServer, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index,
          "class": "odd:bg-white even:bg-slate-50"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataBackupListServer.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataBackupListServer.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataBackupListServer.started), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataBackupListServer.server), 1 /* TEXT */), _hoisted_45]);
      }), 128 /* KEYED_FRAGMENT */))])])])])])])])])])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingAndAlert"], {
    loading: $setup.loading,
    isOpenModal: _ctx.isOpenModal,
    confirmButton: $setup.nameModalButton,
    onIsOpenModelClose: _ctx.isOpenModelClose,
    responseModal: $setup.responseModal
  }, null, 8 /* PROPS */, ["loading", "isOpenModal", "confirmButton", "onIsOpenModelClose", "responseModal"])]);
}

/***/ }),

/***/ "./resources/assets/data/dummyData.js":
/*!********************************************!*\
  !*** ./resources/assets/data/dummyData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataDummyBackupListServer: () => (/* binding */ dataDummyBackupListServer),
/* harmony export */   dataDummyServer: () => (/* binding */ dataDummyServer),
/* harmony export */   dataDummyUser: () => (/* binding */ dataDummyUser)
/* harmony export */ });
var dataDummyUser = {
  'data': [{
    'name': 'Anjasmara Dwi Setiadi',
    'email': 'anjasmara@gmail.com',
    'phone': '81237173013',
    'password': 'anjasmara'
  }, {
    'name': 'Mylalovic',
    'email': 'mylalovicflorensi@gmail.com',
    'phone': '81237173013',
    'password': 'mylalovicflorensi'
  }, {
    'name': 'Ihdi Ulhaq',
    'email': 'ihdiulhaq@gmail.com',
    'phone': '81237173013',
    'password': 'ihdiulhaq'
  }]
};
var dataDummyServer = {
  'data': [{
    'schedule_name': 'Postgres Backup 1',
    "slug": "postgres-backup-1",
    "backup_server": "Server: n1 (11.12.1.2)",
    "backup_method": "incremental",
    "backup_type": "file",
    "enable_pitr": true,
    "backup_database_per_file": true,
    "storage_name": "local storage",
    "storage_directory": "public",
    "retention_policy_type": "week",
    "backup_name": "PC - XXXX",
    "use_compression": true,
    "use_encryption": true,
    "backup_schedule": "daily"
  }, {
    'schedule_name': 'Postgres Backup 2',
    "slug": "postgres-backup-2",
    "backup_server": "Server: n1 (11.12.1.2)",
    "backup_method": "incremental",
    "backup_type": "file",
    "enable_pitr": true,
    "backup_database_per_file": true,
    "storage_name": "local storage",
    "storage_directory": "public",
    "retention_policy_type": "week",
    "backup_name": "PC - XXXX",
    "use_compression": true,
    "use_encryption": true,
    "backup_schedule": "daily"
  }, {
    'schedule_name': 'Postgres Backup 3',
    "slug": "postgres-backup-3",
    "backup_server": "Server: n1 (11.12.1.2)",
    "backup_method": "incremental",
    "backup_type": "file",
    "enable_pitr": true,
    "backup_database_per_file": true,
    "storage_name": "local storage",
    "storage_directory": "public",
    "retention_policy_type": "week",
    "backup_name": "PC - XXXX",
    "use_compression": true,
    "use_encryption": true,
    "backup_schedule": "daily"
  }]
};
var dataDummyBackupListServer = {
  'data': [{
    'name': 'postgres1_backup_all_2023_07.sql',
    'status': 'completed',
    'started': '1 week ago',
    'server': 'n1 (11.12.12)'
  }, {
    'name': 'postgres1_backup_all_2023_07.sql',
    'status': 'completed',
    'started': '1 week ago',
    'server': 'n1 (11.12.12)'
  }, {
    'name': 'postgres1_backup_all_2023_07.sql',
    'status': 'completed',
    'started': '1 week ago',
    'server': 'n1 (11.12.12)'
  }, {
    'name': 'postgres1_backup_all_2023_07.sql',
    'status': 'completed',
    'started': '1 week ago',
    'server': 'n1 (11.12.12)'
  }]
};

/***/ }),

/***/ "./resources/js/store/auth/authService.js":
/*!************************************************!*\
  !*** ./resources/js/store/auth/authService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authService: () => (/* binding */ authService)
/* harmony export */ });
/* harmony import */ var _urlCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../urlCollection */ "./resources/js/urlCollection.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./resources/js/store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/index */ "./resources/js/routes/index.js");
/* harmony import */ var _utilize_utilize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilize/utilize.js */ "./resources/js/utilize/utilize.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var urlBase = "".concat(_urlCollection__WEBPACK_IMPORTED_MODULE_0__.collectionUrl.baseUrlApi);
var authService = {
  resetModal: function resetModal() {
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', null);
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateNameModalButton', 'Ok');
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', false);
  },
  register: function register(payload) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _this.resetModal();
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'post',
              url: "".concat(urlBase, "/register"),
              data: payload
            }).then(function (response) {
              var itemSave = {
                name: response.data.data.name,
                email: response.data.data.email,
                phone: response.data.data.phone,
                token: response.data.data.token
              };
              var messageRegister = {
                title: 'Registration Success',
                message: 'Please check you email to activated your MonsterBackup Account.'
              };
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponsAuth', itemSave);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', messageRegister);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateNameModalButton', 'Go to Login');
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseError', error.response.data.message);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', _utilize_utilize_js__WEBPACK_IMPORTED_MODULE_4__.defaultWrongMessage);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  login: function login(payload) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _this2.resetModal();
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'post',
              url: "".concat(urlBase, "/login"),
              data: payload
            }).then(function (response) {
              var itemSave = {
                name: response.data.data.name,
                email: response.data.data.email,
                phone: response.data.data.phone,
                token: response.data.data.token
              };
              var messageLogin = {
                title: 'Login Success',
                message: 'You will redirect to dashboard MonsterBackup'
              };
              localStorage.setItem('user', JSON.stringify(itemSave));
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponsAuth', itemSave);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', messageLogin);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateNameModalButton', 'Go to dashboard');
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseError', error.response.data.message);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', _utilize_utilize_js__WEBPACK_IMPORTED_MODULE_4__.defaultWrongMessage);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  confirmLogout: function confirmLogout() {
    this.resetModal();
    var messageLogin = {
      title: 'Logout confirm',
      message: 'Are you sure want logout ?'
    };
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponsAuth', null);
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', messageLogin);
    _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
  },
  logout: function logout(payload) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _localStorage;
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _this3.resetModal();
            tokenAuth = JSON.parse((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem('user'));
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'post',
              url: "".concat(urlBase, "/logout"),
              data: payload,
              headers: {
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              localStorage.removeItem('user');
              _routes_index__WEBPACK_IMPORTED_MODULE_3__["default"].push('/login');
              var messageLogin = {
                title: 'Successfull logout',
                message: 'You are successfull logout'
              };
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponsAuth', null);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', messageLogin);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseError', error.response.data.message);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', _utilize_utilize_js__WEBPACK_IMPORTED_MODULE_4__.defaultWrongMessage);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  autoLogin: function autoLogin() {
    var getUser = localStorage.getItem('user');
    if (getUser) {
      var getUserParse = JSON.parse(getUser);
      _index_js__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponsAuth', getUserParse);
    }
  }
};

/***/ }),

/***/ "./resources/js/store/server/serverService.js":
/*!****************************************************!*\
  !*** ./resources/js/store/server/serverService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serverService: () => (/* binding */ serverService)
/* harmony export */ });
/* harmony import */ var _urlCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../urlCollection */ "./resources/js/urlCollection.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./resources/js/store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes/index.js");
/* harmony import */ var _utilize_utilize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilize/utilize */ "./resources/js/utilize/utilize.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var urlBase = "".concat(_urlCollection__WEBPACK_IMPORTED_MODULE_0__.collectionUrl.baseUrlApi);
var serverService = {
  getListServer: function getListServer() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'get',
              url: "".concat(urlBase, "/schedule"),
              headers: {
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateListServer', response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseError', error.response.data.message);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', _utilize_utilize__WEBPACK_IMPORTED_MODULE_4__.defaultWrongMessage);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  createServer: function createServer(payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: '',
              url: "".concat(urlBase),
              headers: {
                'Content-Type': "multipart/form-data",
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              // store.commit('mutateListPlayStyle',response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              // store.commit('mutateResponsGeneral', error.message); 
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  detailServer: function detailServer(slug) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'get',
              url: "".concat(urlBase, "/schedule/").concat(slug),
              headers: {
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateDetailServer', response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseError', error.response.data.message);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateResponseModal', _utilize_utilize__WEBPACK_IMPORTED_MODULE_4__.defaultWrongMessage);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].commit('mutateModal', true);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  getEditServer: function getEditServer() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: '',
              url: "".concat(urlBase),
              headers: {
                'Content-Type': "multipart/form-data",
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              // store.commit('mutateListPlayStyle',response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              // store.commit('mutateResponsGeneral', error.message); 
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  deleteServer: function deleteServer() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: '',
              url: "".concat(urlBase),
              headers: {
                'Content-Type': "multipart/form-data",
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              // store.commit('mutateListPlayStyle',response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              // store.commit('mutateResponsGeneral', error.message); 
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  getListServerBackup: function getListServerBackup() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var tokenAuth;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            tokenAuth = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.getterResponseAuth.token;
            _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = true;
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: '',
              url: "".concat(urlBase),
              headers: {
                'Content-Type': "multipart/form-data",
                'Authorization': "Bearer ".concat(tokenAuth)
              }
            }).then(function (response) {
              // store.commit('mutateListPlayStyle',response.data);
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            })["catch"](function (error) {
              // store.commit('mutateResponsGeneral', error.message); 
              _index__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading = false;
            });
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  }
};

/***/ }),

/***/ "./resources/js/utilize/utilize.js":
/*!*****************************************!*\
  !*** ./resources/js/utilize/utilize.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultWrongMessage: () => (/* binding */ defaultWrongMessage)
/* harmony export */ });
var defaultWrongMessage = {
  title: 'Something Wrong',
  message: 'Please contact your admin',
  confirmButton: 'Yes',
  denyButton: 'No'
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_background_smooth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/background_smooth.png */ "./resources/assets/image/background_smooth.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_image_background_smooth_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.background-footer[data-v-89699c16]{\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n        background-repeat: no-repeat;\r\n        background-position: right top;\r\n        height: 16rem;\r\n        width: auto;\r\n        display: flex;\n}\n.flex-end[data-v-89699c16]{\r\n        align-self: flex-end;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.blur-background[data-v-936ee9f4]{\r\n    background-color: rgba(255,255,255, 0.8);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.active[data-v-2d3b9c73] {\r\n    background-color: #a7f3d0;\r\n    border-radius: 10px;\n}\n.margin-reset[data-v-2d3b9c73] {\r\n    margin: 0px !important;\n}\n.height-card[data-v-2d3b9c73] {\r\n    max-height: 27rem;\r\n    min-height: 27rem;\n}\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./resources/assets/icon/spinner.svg":
/*!*******************************************!*\
  !*** ./resources/assets/icon/spinner.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/spinner.svg?ef4b864bf183ec6dbcff104b7d7e73a7");

/***/ }),

/***/ "./resources/assets/image/background_smooth.png":
/*!******************************************************!*\
  !*** ./resources/assets/image/background_smooth.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/background_smooth.png?96ce2d98e688167eb65e8632537caa9f");

/***/ }),

/***/ "./resources/assets/image/database.png":
/*!*********************************************!*\
  !*** ./resources/assets/image/database.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/database.png?5e20d5529fa08ce06f85f6be8e51662e");

/***/ }),

/***/ "./resources/assets/image/logo.png":
/*!*****************************************!*\
  !*** ./resources/assets/image/logo.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?091fb8cd8d13fdf3b3e64ab991331813");

/***/ }),

/***/ "./resources/assets/image/user.png":
/*!*****************************************!*\
  !*** ./resources/assets/image/user.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/user.png?c240a1b24604a07f61c1e9789913b26b");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_style_index_0_id_89699c16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_style_index_0_id_89699c16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_style_index_0_id_89699c16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_style_index_0_id_2d3b9c73_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_style_index_0_id_2d3b9c73_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_style_index_0_id_2d3b9c73_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/FrameServer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/FrameServer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FrameServer_vue_vue_type_template_id_89699c16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrameServer.vue?vue&type=template&id=89699c16&scoped=true */ "./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true");
/* harmony import */ var _FrameServer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameServer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _FrameServer_vue_vue_type_style_index_0_id_89699c16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css */ "./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FrameServer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FrameServer_vue_vue_type_template_id_89699c16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-89699c16"],['__file',"resources/js/components/FrameServer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true */ "./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true");
/* harmony import */ var _LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-936ee9f4"],['__file',"resources/js/components/LoadingAndAlert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/server-page/ServerDetail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/server-page/ServerDetail.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServerDetail_vue_vue_type_template_id_2d3b9c73_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true */ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true");
/* harmony import */ var _ServerDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerDetail.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ServerDetail_vue_vue_type_style_index_0_id_2d3b9c73_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css */ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ServerDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ServerDetail_vue_vue_type_template_id_2d3b9c73_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2d3b9c73"],['__file',"resources/js/pages/server-page/ServerDetail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrameServer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerDetail.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_template_id_89699c16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_template_id_89699c16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrameServer.vue?vue&type=template&id=89699c16&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=template&id=89699c16&scoped=true");


/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true");


/***/ }),

/***/ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_template_id_2d3b9c73_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_template_id_2d3b9c73_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=template&id=2d3b9c73&scoped=true");


/***/ }),

/***/ "./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FrameServer_vue_vue_type_style_index_0_id_89699c16_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FrameServer.vue?vue&type=style&index=0&id=89699c16&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServerDetail_vue_vue_type_style_index_0_id_2d3b9c73_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/server-page/ServerDetail.vue?vue&type=style&index=0&id=2d3b9c73&scoped=true&lang=css");


/***/ })

}]);