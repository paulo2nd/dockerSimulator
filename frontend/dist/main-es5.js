function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resultado/resultado.component */
    "./src/app/resultado/resultado.component.ts");
    /* harmony import */


    var _resultado_resultado_chart_resultado_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resultado/resultado-chart/resultado-chart.component */
    "./src/app/resultado/resultado-chart/resultado-chart.component.ts");
    /* harmony import */


    var _simulador_simulador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./simulador/simulador.component */
    "./src/app/simulador/simulador.component.ts");
    /* harmony import */


    var _simulador_etapa1_etapa1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./simulador/etapa1/etapa1.component */
    "./src/app/simulador/etapa1/etapa1.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _instrucoes_instrucoes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./instrucoes/instrucoes.component */
    "./src/app/instrucoes/instrucoes.component.ts");
    /* harmony import */


    var _instrucoes_parte1_parte1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./instrucoes/parte1/parte1.component */
    "./src/app/instrucoes/parte1/parte1.component.ts");
    /* harmony import */


    var _instrucoes_parte2_parte2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./instrucoes/parte2/parte2.component */
    "./src/app/instrucoes/parte2/parte2.component.ts");
    /* harmony import */


    var _selecao_selecao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./selecao/selecao.component */
    "./src/app/selecao/selecao.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: "register",
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"]
    }, {
      path: "simulador",
      component: _simulador_simulador_component__WEBPACK_IMPORTED_MODULE_5__["SimuladorComponent"],
      children: [{
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: "instrucoes",
        component: _instrucoes_instrucoes_component__WEBPACK_IMPORTED_MODULE_10__["InstrucoesComponent"],
        children: [{
          path: "parte1",
          component: _instrucoes_parte1_parte1_component__WEBPACK_IMPORTED_MODULE_11__["Parte1Component"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
        }, {
          path: "parte2",
          component: _instrucoes_parte2_parte2_component__WEBPACK_IMPORTED_MODULE_12__["Parte2Component"],
          canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
        }],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: "selecao",
        component: _selecao_selecao_component__WEBPACK_IMPORTED_MODULE_13__["SelecaoComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: "etapa1/resultado",
        component: _resultado_resultado_chart_resultado_chart_component__WEBPACK_IMPORTED_MODULE_4__["ResultadoChartComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: "etapa1/:pergunta",
        component: _simulador_etapa1_etapa1_component__WEBPACK_IMPORTED_MODULE_6__["Etapa1Component"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _simulador_simulador_component__WEBPACK_IMPORTED_MODULE_5__["SimuladorComponent"], _simulador_etapa1_etapa1_component__WEBPACK_IMPORTED_MODULE_6__["Etapa1Component"], _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_3__["ResultadoComponent"], _resultado_resultado_chart_resultado_chart_component__WEBPACK_IMPORTED_MODULE_4__["ResultadoChartComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _instrucoes_instrucoes_component__WEBPACK_IMPORTED_MODULE_10__["InstrucoesComponent"], _selecao_selecao_component__WEBPACK_IMPORTED_MODULE_13__["SelecaoComponent"], _instrucoes_parte1_parte1_component__WEBPACK_IMPORTED_MODULE_11__["Parte1Component"], _instrucoes_parte2_parte2_component__WEBPACK_IMPORTED_MODULE_12__["Parte2Component"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Simulador-Web';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
    /* harmony import */


    var _simulador_etapa1_pergunta_pergunta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./simulador/etapa1/pergunta/pergunta.component */
    "./src/app/simulador/etapa1/pergunta/pergunta.component.ts");
    /* harmony import */


    var _simulador_etapa1_pergunta_campo_combobox_campo_campo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./simulador/etapa1/pergunta/campo-combobox/campo/campo.component */
    "./src/app/simulador/etapa1/pergunta/campo-combobox/campo/campo.component.ts");
    /* harmony import */


    var _simulador_etapa1_pergunta_campo_combobox_campo_combobox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./simulador/etapa1/pergunta/campo-combobox/campo-combobox.component */
    "./src/app/simulador/etapa1/pergunta/campo-combobox/campo-combobox.component.ts");
    /* harmony import */


    var _simulador_etapa2_etapa2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./simulador/etapa2/etapa2.component */
    "./src/app/simulador/etapa2/etapa2.component.ts");
    /* harmony import */


    var src_services_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/services/usuario.service */
    "./src/services/usuario.service.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_directives_cpf_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/directives/cpf.directive */
    "./src/directives/cpf.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/directives/cnpj.directive */
    "./src/directives/cnpj.directive.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _simulador_simulador_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./simulador/simulador.component */
    "./src/app/simulador/simulador.component.ts");
    /* harmony import */


    var _simulador_etapa1_etapa1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./simulador/etapa1/etapa1.component */
    "./src/app/simulador/etapa1/etapa1.component.ts");
    /* harmony import */


    var _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./resultado/resultado.component */
    "./src/app/resultado/resultado.component.ts");
    /* harmony import */


    var _resultado_resultado_chart_resultado_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./resultado/resultado-chart/resultado-chart.component */
    "./src/app/resultado/resultado-chart/resultado-chart.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _instrucoes_instrucoes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./instrucoes/instrucoes.component */
    "./src/app/instrucoes/instrucoes.component.ts");
    /* harmony import */


    var _selecao_selecao_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./selecao/selecao.component */
    "./src/app/selecao/selecao.component.ts");
    /* harmony import */


    var _instrucoes_parte1_parte1_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./instrucoes/parte1/parte1.component */
    "./src/app/instrucoes/parte1/parte1.component.ts");
    /* harmony import */


    var _instrucoes_parte2_parte2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./instrucoes/parte2/parte2.component */
    "./src/app/instrucoes/parte2/parte2.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
        multi: true
      }, _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], src_services_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_5__["GoogleChartsModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
        progressBar: true
      }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _simulador_simulador_component__WEBPACK_IMPORTED_MODULE_22__["SimuladorComponent"], _simulador_etapa1_etapa1_component__WEBPACK_IMPORTED_MODULE_23__["Etapa1Component"], _resultado_resultado_component__WEBPACK_IMPORTED_MODULE_24__["ResultadoComponent"], _resultado_resultado_chart_resultado_chart_component__WEBPACK_IMPORTED_MODULE_25__["ResultadoChartComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_27__["RegistrationComponent"], _instrucoes_instrucoes_component__WEBPACK_IMPORTED_MODULE_28__["InstrucoesComponent"], _selecao_selecao_component__WEBPACK_IMPORTED_MODULE_29__["SelecaoComponent"], _instrucoes_parte1_parte1_component__WEBPACK_IMPORTED_MODULE_30__["Parte1Component"], _instrucoes_parte2_parte2_component__WEBPACK_IMPORTED_MODULE_31__["Parte2Component"], _simulador_etapa1_pergunta_campo_combobox_campo_combobox_component__WEBPACK_IMPORTED_MODULE_8__["CampoComboboxComponent"], _simulador_etapa1_pergunta_campo_combobox_campo_campo_component__WEBPACK_IMPORTED_MODULE_7__["CampoComponent"], _simulador_etapa1_pergunta_pergunta_component__WEBPACK_IMPORTED_MODULE_6__["PerguntaComponent"], _simulador_etapa2_etapa2_component__WEBPACK_IMPORTED_MODULE_9__["Etapa2Component"], src_directives_cpf_directive__WEBPACK_IMPORTED_MODULE_13__["CpfDirective"], src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_17__["CnpjDirective"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_5__["GoogleChartsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _simulador_etapa1_pergunta_campo_combobox_campo_combobox_component__WEBPACK_IMPORTED_MODULE_8__["CampoComboboxComponent"], _simulador_etapa1_pergunta_campo_combobox_campo_campo_component__WEBPACK_IMPORTED_MODULE_7__["CampoComponent"], _simulador_etapa1_pergunta_pergunta_component__WEBPACK_IMPORTED_MODULE_6__["PerguntaComponent"], _simulador_etapa2_etapa2_component__WEBPACK_IMPORTED_MODULE_9__["Etapa2Component"], src_directives_cpf_directive__WEBPACK_IMPORTED_MODULE_13__["CpfDirective"], src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_17__["CnpjDirective"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_5__["GoogleChartsModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
            progressBar: true
          }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
            multi: true
          }, _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], src_services_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem("token") != null) return true;else {
            this.router.navigate(["login"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          if (localStorage.getItem("token") != null) {
            var clonedReq = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("token"))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem("token");

                _this.router.navigateByUrl("login");
              }
            }));
          } else return next.handle(req.clone());
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.roles.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.roles.ts ***!
    \************************************/

  /*! exports provided: AuthRole */

  /***/
  function srcAppAuthAuthRolesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRole", function () {
      return AuthRole;
    });

    var AuthRole;

    (function (AuthRole) {
      AuthRole["Admin"] = "ADMINISTRADOR";
      AuthRole["Usuario"] = "USUARIO";
    })(AuthRole || (AuthRole = {}));
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.roles */
    "./src/app/auth/auth.roles.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        _classCallCheck(this, AuthService);

        this.router = router;
      }

      _createClass(AuthService, [{
        key: "CheckAuthorization",
        value: function CheckAuthorization(token) {
          var jwt = this.ParseJwt(token);

          if (jwt.accessControl == _auth_roles__WEBPACK_IMPORTED_MODULE_1__["AuthRole"].Admin) {
            this.router.navigate(["simulador/home"]);
            localStorage.setItem("token", token);
            return true;
          } else if (jwt.accessControl == _auth_roles__WEBPACK_IMPORTED_MODULE_1__["AuthRole"].Usuario) {
            this.router.navigate(["simulador/home"]);
            localStorage.setItem("token", token);
            return true;
          }

          localStorage.removeItem("token");
          this.router.navigate(["login"]);
          return false;
        }
      }, {
        key: "ParseJwt",
        value: function ParseJwt(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["*"];

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.nextRouter = "";
      }

      _createClass(FooterComponent, [{
        key: "onNext",
        value: function onNext() {
          console.log(this.nextRouter);
          this.router.navigate(['simulador/' + this.nextRouter]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        nextRouter: "nextRouter"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "button", 3, "click"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_0_listener($event) {
            return ctx.onNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".button[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    padding: 7px 35px;\r\n    background-color: #2f66b8;\r\n    border: none;\r\n    border-bottom: 1px solid #001442;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 5%;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .button[_ngcontent-%COMP%]{\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjY2Yjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMTQ0MjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        nextRouter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 1,
      consts: [[1, "painel-wrapper"], [1, "painel"], ["src", "assets/images/logo_diagnostico.png", "alt", "", 1, "logo"], [1, "row"], [1, "col"], ["src", "assets/images/logo.png", "alt", "", 1, "logo-sebrae"], [3, "nextRouter"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-footer", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Iniciar\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nextRouter", "../instrucoes/parte1");
        }
      },
      directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
      styles: [".painel-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    min-height: calc(100vh - 56px);\r\n}\r\n.painel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin: 40px auto;\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 800px;\r\n}\r\n.logo-sebrae[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWluZWwtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuLnBhaW5lbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG4ubG9nby1zZWJyYWV7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/instrucoes/instrucoes.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/instrucoes/instrucoes.component.ts ***!
    \****************************************************/

  /*! exports provided: InstrucoesComponent */

  /***/
  function srcAppInstrucoesInstrucoesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstrucoesComponent", function () {
      return InstrucoesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InstrucoesComponent =
    /*#__PURE__*/
    function () {
      function InstrucoesComponent() {
        _classCallCheck(this, InstrucoesComponent);
      }

      _createClass(InstrucoesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstrucoesComponent;
    }();

    InstrucoesComponent.ɵfac = function InstrucoesComponent_Factory(t) {
      return new (t || InstrucoesComponent)();
    };

    InstrucoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstrucoesComponent,
      selectors: [["app-instrucoes"]],
      decls: 5,
      vars: 0,
      consts: [[1, "conteudo-wrapper"], [1, "titulo"], ["src", "../../assets/images/instrucoes.png", "alt", "", 1, "instrucoes"], [1, "conteudo"]],
      template: function InstrucoesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".conteudo-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100vh - 56px);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.conteudo[_ngcontent-%COMP%] {\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.instrucoes[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y29lcy9pbnN0cnVjb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQVk7WUFBWixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWNvZXMvaW5zdHJ1Y29lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRldWRvLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRldWRvIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmluc3RydWNvZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstrucoesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-instrucoes',
          templateUrl: './instrucoes.component.html',
          styleUrls: ['./instrucoes.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/instrucoes/parte1/parte1.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/instrucoes/parte1/parte1.component.ts ***!
    \*******************************************************/

  /*! exports provided: Parte1Component */

  /***/
  function srcAppInstrucoesParte1Parte1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parte1Component", function () {
      return Parte1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var Parte1Component =
    /*#__PURE__*/
    function () {
      function Parte1Component() {
        _classCallCheck(this, Parte1Component);
      }

      _createClass(Parte1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Parte1Component;
    }();

    Parte1Component.ɵfac = function Parte1Component_Factory(t) {
      return new (t || Parte1Component)();
    };

    Parte1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Parte1Component,
      selectors: [["app-parte1"]],
      decls: 23,
      vars: 1,
      consts: [[1, "instrucao"], [1, "row"], [1, "col-lg-3"], [1, "painel-instrucao"], ["src", "assets/images/icone1.png", "alt", "", 1, ""], [1, "col-lg-6"], ["src", "assets/images/etapas.png", "alt", "", 1, "etapas"], [1, "row", "justify-content-center"], ["src", "assets/images/icone2.png", "alt", "", 1, ""], ["src", "assets/images/icone3.png", "alt", "", 1, ""], [3, "nextRouter"]],
      template: function Parte1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Para realizar o diagn\xF3stico financeiro do seu neg\xF3cio, voc\xEA poder\xE1 passar por tr\xEAs etapas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ao responder um pequeno question\xE1rio, voc\xEA refletir\xE1 sobre a atual maturidade financeira do seu neg\xF3cio, al\xE9m de medir o seu grau de satisfa\xE7\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ao responder um pequeno question\xE1rio, voc\xEA refletir\xE1 sobre a atual maturidade financeira do seu neg\xF3cio, al\xE9m de medir o seu grau de satisfa\xE7\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ao responder um pequeno question\xE1rio, voc\xEA refletir\xE1 sobre a atual maturidade financeira do seu neg\xF3cio, al\xE9m de medir o seu grau de satisfa\xE7\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Pr\xF3ximo\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nextRouter", "instrucoes/parte2");
        }
      },
      directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
      styles: [".fontes[_ngcontent-%COMP%] {\r\n    color: #85BC3C;\r\n}\r\n\r\n.etapas[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.instrucao[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 60px 15px;\r\n}\r\n\r\n.painel-instrucao[_ngcontent-%COMP%] {\r\n    color: #85BC3C;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.painel-instrucao[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 100px;\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y29lcy9wYXJ0ZTEvcGFydGUxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbnN0cnVjb2VzL3BhcnRlMS9wYXJ0ZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvbnRlcyB7XHJcbiAgICBjb2xvcjogIzg1QkMzQztcclxufVxyXG5cclxuLmV0YXBhcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5pbnN0cnVjYW8ge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHggMTVweDtcclxufVxyXG5cclxuLnBhaW5lbC1pbnN0cnVjYW8ge1xyXG4gICAgY29sb3I6ICM4NUJDM0M7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBhaW5lbC1pbnN0cnVjYW8gaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Parte1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parte1',
          templateUrl: './parte1.component.html',
          styleUrls: ['./parte1.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/instrucoes/parte2/parte2.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/instrucoes/parte2/parte2.component.ts ***!
    \*******************************************************/

  /*! exports provided: Parte2Component */

  /***/
  function srcAppInstrucoesParte2Parte2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parte2Component", function () {
      return Parte2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var Parte2Component =
    /*#__PURE__*/
    function () {
      function Parte2Component() {
        _classCallCheck(this, Parte2Component);
      }

      _createClass(Parte2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Parte2Component;
    }();

    Parte2Component.ɵfac = function Parte2Component_Factory(t) {
      return new (t || Parte2Component)();
    };

    Parte2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Parte2Component,
      selectors: [["app-parte2"]],
      decls: 12,
      vars: 1,
      consts: [[1, "instrucao"], [1, "titulo"], [1, "text-align-center"], [1, "col"], ["media", "(max-width: 992px)", "srcset", "assets/images/imagem-instrucao-mobile.png"], ["src", "assets/images/imagem-instrucao.png", "alt", "", 1, "imagem"], [3, "nextRouter"]],
      template: function Parte2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Animado para come\xE7ar?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Saiba que esta ferramenta de diagn\xF3stico \xE9 autoexplicativa, portanto para facilitar seu entendimento, no decorrer das etapas voc\xEA poder\xE1 consultar a maioria dos termos utilizados aqui, clicando sobre a l\xE2mpada ou lendo o conceito dentro das caixas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Veja:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "source", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-footer", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pr\xF3ximo\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nextRouter", "selecao");
        }
      },
      directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
      styles: [".instrucao[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    font-weight: bold;\r\n    padding: 20px 15px;\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n}\r\n.imagem[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    max-width: 900px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y29lcy9wYXJ0ZTIvcGFydGUyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWNvZXMvcGFydGUyL3BhcnRlMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RydWNhbyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG59XHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Parte2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parte2',
          templateUrl: './parte2.component.html',
          styleUrls: ['./parte2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/usuario.service */
    "./src/services/usuario.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/directives/cnpj.directive */
    "./src/directives/cnpj.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(_service, authService, toastr) {
        _classCallCheck(this, LoginComponent);

        this._service = _service;
        this.authService = authService;
        this.toastr = toastr;
        this.formModel = {
          Cnpj: '',
          Senha: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "FilterCnpj",
        value: function FilterCnpj(value) {
          var cnpj = value + '';
          cnpj = cnpj.replace(/\D/g, '');
          cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
          cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
          cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
          cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
          this.formModel.Cnpj = cnpj;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          this._service.Login(form.value).subscribe(function (res) {
            console.log(res.token);

            _this2.authService.CheckAuthorization(res.token);
          }, function (error) {
            _this2.toastr.error(error.error.message, "Falha ao tentar logar");
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 35,
      vars: 3,
      consts: [[1, "wrapper"], [1, "box-login"], [1, "row"], [1, "col"], ["autocomplete", "off", 1, "mb-4", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["name", "Cnpj", "CnpjFilter", "", "required", "", "maxlength", "18", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["Cnpj", "ngModel"], ["type", "password", "name", "Senha", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Senha", "ngModel"], [1, "row", "justify-content-end", "mb-4"], [1, "col-auto"], [1, "float-right", "color-white"], ["routerLink", "/request-password-reset"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], ["routerLink", "../register"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Diagn\xF3stico Gest\xE3o Financeira");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Digite seus dados para realizar o login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return ctx.onSubmit(_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CNPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.formModel.Cnpj = $event;
          })("input", function LoginComponent_Template_input_input_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.FilterCnpj(_r25.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.formModel.Senha = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Esqueci minha senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Novo por aqui? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fa\xE7a seu cadastro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.Cnpj);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.Senha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r24.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_5__["CnpjDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.50);\r\n    background-image: url('background.png');\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.65);\r\n    color: #ffffff;\r\n    padding: 20px 40px;\r\n    width: 100%;\r\n    max-width: 500px;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    margin: 20px 0 15px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: #cccccc;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    width: 100%;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #ffffff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 100px;\r\n    background-color: #0075be;\r\n    color: #ffffff;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]{\r\n    color: #cccccc;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n    text-decoration: underline;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    border-bottom: 1px solid #666666;\r\n    color: #666666;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    color: #ffffff;\r\n    border-bottom: 3px solid #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyx1Q0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFFbEIsb0JBQWE7SUFBYixhQUFhO0lBRWIsZUFBZTtJQUVmLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBSUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUwKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveC1sb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5ib3gtbG9naW4gaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uYm94LWxvZ2luIGxhYmVse1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWJlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbnNtYWxse1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbnNtYWxsIGEge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuc21hbGwgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGFiLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWItaGVhZGVyIGgyLmFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZmZmZjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem("token");
          this.router.navigate(['login']);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(["simulador/home"]);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar", "navbar-light", "bg-light"], [1, "navbar-brand", 3, "click"], [1, "form-inline"], [1, "btn", "btn-outline-secondary", "my-2", "my-sm-0", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_1_listener($event) {
            return ctx.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Diagn\xF3stico de Gest\xE3o Financeira");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_4_listener($event) {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".navbar-brand[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/usuario.service */
    "./src/services/usuario.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/directives/cnpj.directive */
    "./src/directives/cnpj.directive.ts");

    function RegistrationComponent_label_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail invalido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimo 6 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esse campo \xE9 obrigat\xF3rio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "As senhas n\xE3o s\xE3o compativeis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-valid": a0,
        "is-invalid": a1
      };
    };

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(service, toastr, router) {
        _classCallCheck(this, RegistrationComponent);

        this.service = service;
        this.toastr = toastr;
        this.router = router;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "FilterCnpj",
        value: function FilterCnpj(value) {
          var cnpj = value + '';
          cnpj = cnpj.replace(/\D/g, '');
          cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
          cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
          cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
          cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
          return cnpj;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.service.CadastrarUsuario().subscribe(function (res) {
            _this3.service.formModel.reset();

            _this3.toastr.success("Seja bem vindo!", "Usuário cadastrado com sucesso!");

            _this3.router.navigateByUrl("login");
          }, function (error) {
            error.error.forEach(function (element) {
              _this3.toastr.error(element.message, "Falha no registro");
            });
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 91,
      vars: 50,
      consts: [[1, "wrapper"], [1, "box-register"], [1, "row"], [1, "col-md-10", "offset-md-1"], ["autocomplete", "off", 1, "mb-4", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "FullName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-6"], ["formControlName", "Email", 1, "form-control", 3, "ngClass"], ["formControlName", "Cnpj", "CnpjFilter", "", "maxlength", "18", 1, "form-control", 3, "value", "ngClass"], ["Cnpj", ""], ["formControlName", "Telefone", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["name", "", "formControlName", "TipoTelefone", 1, "custom-select"], ["selected", ""], ["value", "0"], ["value", "1"], ["name", "", "formControlName", "TipoEmpresa", 1, "custom-select"], ["value", "2"], ["value", "3"], ["formControlName", "RazaoSocial", 1, "form-control", 3, "ngClass"], ["formControlName", "Produto", 1, "form-control", 3, "ngClass"], ["formControlName", "Faturamento", 1, "form-control", 3, "ngClass"], ["formGroupName", "Passwords"], ["type", "password", "formControlName", "Senha", "minlength", "6", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "ConfirmSenha", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome Completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistrationComponent_label_9_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_label_16_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CNPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationComponent_label_23_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationComponent_label_29_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tipo Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Celular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Fixo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tipo Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MEI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "EPP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Produtor Rural");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Raz\xE3o Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RegistrationComponent_label_61_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Qual seu principal produto/servi\xE7o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RegistrationComponent_label_67_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Faturamento anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, RegistrationComponent_label_73_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RegistrationComponent_label_79_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, RegistrationComponent_label_80_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Confirm Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, RegistrationComponent_label_85_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, RegistrationComponent_label_86_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.service.formModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.service.formModel.get("FullName").touched && ctx.service.formModel.get("FullName").valid, ctx.service.formModel.get("FullName").touched && (ctx.service.formModel.get("FullName").errors == null ? null : ctx.service.formModel.get("FullName").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("FullName").touched && (ctx.service.formModel.get("FullName").errors == null ? null : ctx.service.formModel.get("FullName").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c0, ctx.service.formModel.get("Email").touched && ctx.service.formModel.get("Email").valid, ctx.service.formModel.get("Email").touched && (ctx.service.formModel.get("Email").errors == null ? null : ctx.service.formModel.get("Email").errors.email)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Email").touched && (ctx.service.formModel.get("Email").errors == null ? null : ctx.service.formModel.get("Email").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.FilterCnpj(ctx.service.formModel.get("Cnpj").value))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.service.formModel.get("Cnpj").touched && ctx.service.formModel.get("Cnpj").valid, ctx.service.formModel.get("Cnpj").touched && (ctx.service.formModel.get("Cnpj").errors == null ? null : ctx.service.formModel.get("Cnpj").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Cnpj").touched && (ctx.service.formModel.get("Cnpj").errors == null ? null : ctx.service.formModel.get("Cnpj").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c0, ctx.service.formModel.get("Telefone").touched && ctx.service.formModel.get("Telefone").valid, ctx.service.formModel.get("Telefone").touched && (ctx.service.formModel.get("Telefone").errors == null ? null : ctx.service.formModel.get("Telefone").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Telefone").touched && (ctx.service.formModel.get("Telefone").errors == null ? null : ctx.service.formModel.get("Telefone").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, ctx.service.formModel.get("RazaoSocial").touched && ctx.service.formModel.get("RazaoSocial").valid, ctx.service.formModel.get("RazaoSocial").touched && (ctx.service.formModel.get("RazaoSocial").errors == null ? null : ctx.service.formModel.get("RazaoSocial").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("RazaoSocial").touched && (ctx.service.formModel.get("RazaoSocial").errors == null ? null : ctx.service.formModel.get("RazaoSocial").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c0, ctx.service.formModel.get("Produto").touched && ctx.service.formModel.get("Produto").valid, ctx.service.formModel.get("Produto").touched && (ctx.service.formModel.get("Produto").errors == null ? null : ctx.service.formModel.get("Produto").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Produto").touched && (ctx.service.formModel.get("Produto").errors == null ? null : ctx.service.formModel.get("Produto").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c0, ctx.service.formModel.get("Faturamento").touched && ctx.service.formModel.get("Faturamento").valid, ctx.service.formModel.get("Faturamento").touched && (ctx.service.formModel.get("Faturamento").errors == null ? null : ctx.service.formModel.get("Faturamento").errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Faturamento").touched && (ctx.service.formModel.get("Faturamento").errors == null ? null : ctx.service.formModel.get("Faturamento").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c0, ctx.service.formModel.get("Passwords.Senha").touched && ctx.service.formModel.get("Passwords.Senha").valid, ctx.service.formModel.get("Passwords.Senha").touched && (ctx.service.formModel.get("Passwords.Senha").errors == null ? null : ctx.service.formModel.get("Passwords.Senha").errors.minlength)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Passwords.Senha").touched && (ctx.service.formModel.get("Passwords.Senha").errors == null ? null : ctx.service.formModel.get("Passwords.Senha").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Passwords.Senha").touched && (ctx.service.formModel.get("Passwords.Senha").errors == null ? null : ctx.service.formModel.get("Passwords.Senha").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c0, ctx.service.formModel.get("Passwords.ConfirmSenha").touched && ctx.service.formModel.get("Passwords.ConfirmSenha").valid, ctx.service.formModel.get("Passwords.ConfirmSenha").touched && (ctx.service.formModel.get("Passwords.ConfirmSenha").errors == null ? null : ctx.service.formModel.get("Passwords.ConfirmSenha").errors.required) && (ctx.service.formModel.get("ConfirmSenha").errors == null ? null : ctx.service.formModel.get("ConfirmSenha").errors.passwordMismatch)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Passwords.ConfirmSenha").touched && (ctx.service.formModel.get("Passwords.ConfirmSenha").errors == null ? null : ctx.service.formModel.get("Passwords.ConfirmSenha").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formModel.get("Passwords.ConfirmSenha").touched && (ctx.service.formModel.get("Passwords.ConfirmSenha").errors == null ? null : ctx.service.formModel.get("Passwords.ConfirmSenha").errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.service.formModel.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_directives_cnpj_directive__WEBPACK_IMPORTED_MODULE_6__["CnpjDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: [".form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    width: 100%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-radius: 100px;\r\n    background-color: #0075be;\r\n    color: #ffffff;\r\n}\r\n\r\n.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child::after{\r\n    content: \"*\";\r\n    color: #dc3545;\r\n    padding-left: 5px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.50);\r\n    background-image: url('background.png');\r\n    background-size: cover;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.box-register[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.65);\r\n    color: #ffffff;\r\n    padding: 20px 40px;\r\n    width: 100%;\r\n    max-width: 1024px;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    margin: 20px 0 15px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n\r\n.box-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: #cccccc;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    width: 100%;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #ffffff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 100px;\r\n    background-color: #0075be;\r\n    color: #ffffff;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]{\r\n    color: #cccccc;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n    text-decoration: underline;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    border-bottom: 1px solid #666666;\r\n    color: #666666;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    color: #ffffff;\r\n    border-bottom: 3px solid #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBRWxCLG9CQUFhO0lBQWIsYUFBYTtJQUViLGVBQWU7SUFFZiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx1Q0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFFbEIsb0JBQWE7SUFBYixhQUFhO0lBRWIsZUFBZTtJQUVmLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBSUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc1YmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAucmVxdWlyZWQ+bGFiZWw6Zmlyc3QtY2hpbGQ6OmFmdGVye1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm94LXJlZ2lzdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbn1cclxuXHJcbi5ib3gtbG9naW4gaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uYm94LWxvZ2luIGxhYmVse1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWJlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbnNtYWxse1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbnNtYWxsIGEge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuc21hbGwgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGFiLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWItaGVhZGVyIGgyLmFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZmZmZjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: src_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resultado/resultado-chart/resultado-chart.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/resultado/resultado-chart/resultado-chart.component.ts ***!
    \************************************************************************/

  /*! exports provided: ResultadoChartComponent */

  /***/
  function srcAppResultadoResultadoChartResultadoChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultadoChartComponent", function () {
      return ResultadoChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/simulador.service */
    "./src/services/simulador.service.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

    var ResultadoChartComponent =
    /*#__PURE__*/
    function () {
      function ResultadoChartComponent(sService) {
        _classCallCheck(this, ResultadoChartComponent);

        this.sService = sService;
        this.chart = {
          title: "",
          type: "BarChart",
          roles: [{
            role: 'style',
            type: 'string',
            index: 2
          }],
          data: [// ['Copper', 0.3, 'orange'],            // RGB value
            // ['Silver', 0.1, '#76A7FA'],            // English color name
            // ['Gold', 19.30, 'gold'],
            // ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
          ],
          columnNames: ["columnTeste2", ""],
          options: {
            colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
            bar: {
              groupWidth: '50%'
            },
            animation: {
              duration: 1000,
              easing: 'out'
            },
            annotations: {
              alwaysOutside: true
            },
            hAxis: {
              format: 'percent',
              minValue: 0,
              maxValue: 1
            }
          },
          formatter: []
        };
      }

      _createClass(ResultadoChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sService.GetResultadoEtapa1().subscribe(function (res) {
            _this4.maturidade = res.maturidade;
            _this4.satisfacao = res.satisfacao;
            console.log(res);
            var valor = [["Maturidade de finanças", {
              v: res.maturidade / 100,
              f: res.maturidade + "%"
            }, 'orange'], ["Satisfação do empresário", {
              v: res.satisfacao / 100,
              f: res.satisfacao + "%"
            }, '#76A7FA']]; // var valor: any = [
            //   ["Maturidade de finanças", res.maturidade / 100, 'orange'],
            //   ["Satisfação do empresário", res[1] / 100, '#76A7FA']
            // ];

            _this4.chart.data = valor;
            console.log(_this4.chart.data);
          }, function (error) {});
        }
      }, {
        key: "EnviarEmail",
        value: function EnviarEmail() {
          var _this5 = this;

          // var data = {
          //   satisfacao : this.satisfacao,
          //   maturidade : this.maturidade
          // }
          // this.sService.SendEmail(data).subscribe(res=>{
          //   console.log(res)
          // },error =>{
          //   console.log(error)
          // })
          return new Promise(function (resolve) {
            var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

            _this5.ConvertToDataURLviaCanvas(svgString).then(function (x) {
              _this5.sService.SendEmail(x).toPromise().then(function (x) {
                return resolve(x);
              });
            });
          });
        }
      }, {
        key: "ConvertToDataURLviaCanvas",
        value: function ConvertToDataURLviaCanvas(svgString) {
          var _this6 = this;

          // let outputFormat = (url.replace(/^.*[\\\/]/, '').split(".").length > 1) ? url.replace(/^.*[\\\/]/, '').split(".")[1] : "jpeg";
          // let newurl = (url.replace(/^.*[\\\/]/, '').split(".").length > 1) ? url.replace(/^.*[\\\/]/, '') : url.replace(/^.*[\\\/]/, '') + "." + outputFormat;
          return new Promise(function (resolve, reject) {
            var img = new Image();
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                svg = new Blob([svgString], {
              type: "image/svg+xml;charset=utf-8"
            }),
                url = window.URL.createObjectURL(svg);
            img.crossOrigin = 'Anonymous';

            img.onload = function () {
              var dataURL;
              canvas.height = img.height;
              canvas.width = img.width;
              ctx.drawImage(img, 0, 0);
              dataURL = canvas.toDataURL("image/png");
              resolve(dataURL);
              canvas = null;
            };

            img.src = url;
          }).then(function (x) {
            return _this6.Base64toBlob(x, "resultado.png", "image/png");
          });
        }
      }, {
        key: "Base64toBlob",
        value: function Base64toBlob(dataURI, name, outputFormat) {
          var byteString = atob(dataURI.split(',')[1]);
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return this.BlobToFile(new Blob([ab], {
            type: outputFormat
          }), name);
        }
      }, {
        key: "BlobToFile",
        value: function BlobToFile(blob, fileName) {
          var b = blob; //A Blob() is almost a File() - it's just missing the two properties below which we will add

          b.lastModifiedDate = new Date();
          b.name = fileName; //Cast to a File() type

          return blob;
        }
      }]);

      return ResultadoChartComponent;
    }();

    ResultadoChartComponent.ɵfac = function ResultadoChartComponent_Factory(t) {
      return new (t || ResultadoChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]));
    };

    ResultadoChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultadoChartComponent,
      selectors: [["app-resultado-chart"]],
      decls: 23,
      vars: 9,
      consts: [[1, "conteudo-wrapper"], [1, "titulo"], ["src", "assets/images/titulo_resultado_etapa1.png", "alt", "", 1, "logo"], [1, "conteudo"], [1, "painel"], [1, "row", "justify-content-center"], [1, "col-auto"], [1, "texto"], [1, "resultado"], [2, "width", "100%", 3, "title", "roles", "type", "data", "columnNames", "options", "formatter"], [1, "row", "align-items-center", "footer"], [1, "col-lg-auto"], ["href", "javascript:window.print()"], ["src", "assets/images/icone-impressao.png", "alt", ""], [1, "col", "text-align-center"], [1, "button", "alternative", 3, "click"]],
      template: function ResultadoChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "De acordo com suas respostas verificamos que:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "google-chart", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultadoChartComponent_Template_button_click_21_listener($event) {
            return ctx.EnviarEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enviar por E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sua maturidade financeira \xE9 de : ", ctx.maturidade, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sua satisfa\xE7\xE3o \xE9 de: ", ctx.satisfacao, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.chart.title)("roles", ctx.chart.roles)("type", ctx.chart.type)("data", ctx.chart.data)("columnNames", ctx.chart.columnNames)("options", ctx.chart.options)("formatter", ctx.chart.formatter);
        }
      },
      directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]],
      styles: [".conteudo-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100vh - 56px);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.conteudo[_ngcontent-%COMP%] {\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.painel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: block;\r\n    margin: 40px auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.texto[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    font-weight: bold;\r\n}\r\n\r\n.resultado[_ngcontent-%COMP%]{\r\n    padding: 60px 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    padding: 7px 35px;\r\n    background-color: #85BC3C;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(70, 99, 31);\r\n    color: #ffffff;\r\n}\r\n\r\n@media print{\r\n    .footer[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0YWRvL3Jlc3VsdGFkby1jaGFydC9yZXN1bHRhZG8tY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBWTtZQUFaLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0YWRvL3Jlc3VsdGFkby1jaGFydC9yZXN1bHRhZG8tY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXVkby13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZXVkbyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGFpbmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnRleHRvIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZXN1bHRhZG97XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NUJDM0M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDcwLCA5OSwgMzEpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludHtcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resultado-chart',
          templateUrl: './resultado-chart.component.html',
          styleUrls: ['./resultado-chart.component.css']
        }]
      }], function () {
        return [{
          type: src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resultado/resultado.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/resultado/resultado.component.ts ***!
    \**************************************************/

  /*! exports provided: ResultadoComponent */

  /***/
  function srcAppResultadoResultadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultadoComponent", function () {
      return ResultadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ResultadoComponent =
    /*#__PURE__*/
    function () {
      function ResultadoComponent() {
        _classCallCheck(this, ResultadoComponent);
      }

      _createClass(ResultadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultadoComponent;
    }();

    ResultadoComponent.ɵfac = function ResultadoComponent_Factory(t) {
      return new (t || ResultadoComponent)();
    };

    ResultadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultadoComponent,
      selectors: [["app-resultado"]],
      decls: 1,
      vars: 0,
      template: function ResultadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby9yZXN1bHRhZG8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resultado',
          templateUrl: './resultado.component.html',
          styleUrls: ['./resultado.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/selecao/selecao.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/selecao/selecao.component.ts ***!
    \**********************************************/

  /*! exports provided: SelecaoComponent */

  /***/
  function srcAppSelecaoSelecaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelecaoComponent", function () {
      return SelecaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SelecaoComponent =
    /*#__PURE__*/
    function () {
      function SelecaoComponent(router) {
        _classCallCheck(this, SelecaoComponent);

        this.router = router;
      }

      _createClass(SelecaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNext",
        value: function onNext(nextRouter) {
          this.router.navigate(['simulador/' + nextRouter]);
        }
      }]);

      return SelecaoComponent;
    }();

    SelecaoComponent.ɵfac = function SelecaoComponent_Factory(t) {
      return new (t || SelecaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SelecaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelecaoComponent,
      selectors: [["app-selecao"]],
      decls: 15,
      vars: 0,
      consts: [[1, "conteudo-wrapper"], [1, "container"], [1, "titulo"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "etapa", 3, "click"], ["disabled", "", 1, "etapa", 3, "click"]],
      template: function SelecaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Escolha por onde Come\xE7ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoComponent_Template_button_click_7_listener($event) {
            return ctx.onNext("etapa1/0");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Etapa 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoComponent_Template_button_click_10_listener($event) {
            return ctx.onNext("etapa2/0");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Etapa 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecaoComponent_Template_button_click_13_listener($event) {
            return ctx.onNext("etapa3/0");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Etapa 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".conteudo-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100vh - 56px);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n\r\n.instrucoes[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 40px 0;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n\r\n.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: #85BC3C;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.etapa[_ngcontent-%COMP%]{\r\n    border: none;\r\n    display: block;\r\n    width: 135px;\r\n    height: 135px;\r\n    color: #ffffff;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    background-color: #FF8040;\r\n    border-radius: 200px;\r\n    margin: 0 auto;\r\n    font-size: 1.3em;\r\n    font-weight: bold;\r\n    -webkit-transition: -webkit-transform 250ms ease-in-out;\r\n    transition: -webkit-transform 250ms ease-in-out;\r\n    transition: transform 250ms ease-in-out;\r\n    transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\r\n}\r\n\r\n\r\n.etapa[_ngcontent-%COMP%]:hover{\r\n   -webkit-transform: scale(1.2);\r\n           transform: scale(1.2);\r\n}\r\n\r\n\r\n.etapa[_ngcontent-%COMP%]:disabled{\r\n    color: #5c5c5c;\r\n    background-color: rgb(179, 179, 179);\r\n    cursor: not-allowed;\r\n    opacity: 0.8;\r\n}\r\n\r\n\r\n.etapa[_ngcontent-%COMP%]:disabled:hover{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWNhby9zZWxlY2FvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdURBQXVDO0lBQXZDLCtDQUF1QztJQUF2Qyx1Q0FBdUM7SUFBdkMsNEVBQXVDO0FBQzNDOzs7QUFFQTtHQUNHLDZCQUFxQjtXQUFyQixxQkFBcUI7QUFDeEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2VsZWNhby9zZWxlY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV1ZG8td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmluc3RydWNvZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLnRpdHVsbyBoMXtcclxuICAgIGNvbG9yOiAjODVCQzNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ldGFwYXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjgwNDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZXRhcGE6aG92ZXJ7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmV0YXBhOmRpc2FibGVke1xyXG4gICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZXRhcGE6ZGlzYWJsZWQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelecaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selecao',
          templateUrl: './selecao.component.html',
          styleUrls: ['./selecao.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/simulador/etapa1/etapa1.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/simulador/etapa1/etapa1.component.ts ***!
    \******************************************************/

  /*! exports provided: Etapa1Component */

  /***/
  function srcAppSimuladorEtapa1Etapa1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Etapa1Component", function () {
      return Etapa1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/simulador.service */
    "./src/services/simulador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _pergunta_pergunta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pergunta/pergunta.component */
    "./src/app/simulador/etapa1/pergunta/pergunta.component.ts");

    function Etapa1Component_ng_container_1_ng_container_2_div_1_app_pergunta_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pergunta", 12);
      }

      if (rf & 2) {
        var pergunta_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pergunta", pergunta_r22);
      }
    }

    function Etapa1Component_ng_container_1_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Etapa1Component_ng_container_1_ng_container_2_div_1_app_pergunta_9_Template, 1, 1, "app-pergunta", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-footer", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pr\xF3ximo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campo_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campo_r18.texto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", campo_r18.descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", campo_r18.subCampos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nextRouter", ctx_r20.onNext());
      }
    }

    function Etapa1Component_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Etapa1Component_ng_container_1_ng_container_2_div_1_Template, 12, 4, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var idx2_r19 = ctx.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pergunta == idx2_r19);
      }
    }

    function Etapa1Component_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Etapa1Component_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.tabela == null ? null : ctx_r16.tabela.campos);
      }
    }

    var Etapa1Component =
    /*#__PURE__*/
    function () {
      function Etapa1Component(service, route) {
        _classCallCheck(this, Etapa1Component);

        this.service = service;
        this.route = route;
        this.tabelaActive = false;
        this.pergunta = 0;
      }

      _createClass(Etapa1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.subscribe(function (params) {
            _this7.pergunta = params.get("pergunta");
          });
          this.service.GetTabela(1).subscribe(function (res) {
            console.log(res);
            _this7.tabela = res;
            _this7.tabelaActive = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onNext",
        value: function onNext() {
          if (this.pergunta == this.tabela.campos.length - 1) {
            return '/etapa1/resultado';
          } else {
            return 'etapa1/' + (parseInt(this.pergunta) + 1);
          }
        }
      }]);

      return Etapa1Component;
    }();

    Etapa1Component.ɵfac = function Etapa1Component_Factory(t) {
      return new (t || Etapa1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    Etapa1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Etapa1Component,
      selectors: [["app-etapa1"]],
      decls: 2,
      vars: 1,
      consts: [[1, "conteudo-wrapper"], [4, "ngIf"], ["src", "assets/images/titulo_etapa1.png", "alt", "", 1, "logo"], [4, "ngFor", "ngForOf"], [1, "row", "align-items-center", "mb-4"], [1, "col-auto"], [1, "titulo"], ["data-toggle", "tooltip", "data-html", "true", 3, "title"], ["src", "assets/images/icon-descricao.png", "alt", "", 1, "icone"], [1, "conteudo"], [3, "pergunta", 4, "ngFor", "ngForOf"], [3, "nextRouter"], [3, "pergunta"]],
      template: function Etapa1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Etapa1Component_ng_container_1_Template, 3, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabelaActive);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _pergunta_pergunta_component__WEBPACK_IMPORTED_MODULE_5__["PerguntaComponent"]],
      styles: [".conteudo-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: calc(100vh - 56px);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n    margin: 40px auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n    font-family: \"HeyAugust\";\r\n    font-size: 3.5em;\r\n    background: linear-gradient(-95deg, rgba(255,66,141,1) 0%, rgba(255,174,70,1) 100%);\r\n    background: -webkit-linear-gradient(-95deg, rgba(255,66,141,1) 0%, rgba(255,174,70,1) 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin: 0;\r\n}\r\n\r\n.icone[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhZG9yL2V0YXBhMS9ldGFwYTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1GQUFtRjtJQUNuRiwyRkFBMkY7SUFDM0YsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYWRvci9ldGFwYTEvZXRhcGExLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV1ZG8td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhleUF1Z3VzdFwiO1xyXG4gICAgZm9udC1zaXplOiAzLjVlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTVkZWcsIHJnYmEoMjU1LDY2LDE0MSwxKSAwJSwgcmdiYSgyNTUsMTc0LDcwLDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTk1ZGVnLCByZ2JhKDI1NSw2NiwxNDEsMSkgMCUsIHJnYmEoMjU1LDE3NCw3MCwxKSAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5pY29uZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Etapa1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-etapa1',
          templateUrl: './etapa1.component.html',
          styleUrls: ['./etapa1.component.css']
        }]
      }], function () {
        return [{
          type: src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/simulador/etapa1/pergunta/campo-combobox/campo-combobox.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/simulador/etapa1/pergunta/campo-combobox/campo-combobox.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CampoComboboxComponent */

  /***/
  function srcAppSimuladorEtapa1PerguntaCampoComboboxCampoComboboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampoComboboxComponent", function () {
      return CampoComboboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var src_services_simulador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/simulador.service */
    "./src/services/simulador.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _campo_campo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./campo/campo.component */
    "./src/app/simulador/etapa1/pergunta/campo-combobox/campo/campo.component.ts");

    function CampoComboboxComponent_app_campo_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-campo", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("respostaEmitter", function CampoComboboxComponent_app_campo_0_Template_app_campo_respostaEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.getResposta($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campo_r49 = ctx.$implicit;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("campo", campo_r49)("index", ctx_r48.index)("active", ctx_r48.active);
      }
    }

    var CampoComboboxComponent =
    /*#__PURE__*/
    function () {
      function CampoComboboxComponent(service, library) {
        _classCallCheck(this, CampoComboboxComponent);

        this.service = service;
        this.usuario = {
          resposta: ""
        };
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["far"]);
      }

      _createClass(CampoComboboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          var valor = 100 / (this.respostas.subCampos.length - 1);
          this.service.GetCampoUsuario(this.respostas.id).subscribe(function (res) {
            _this8.usuario = res;

            _this8.respostas.subCampos.forEach(function (element, idx) {
              element.resposta = Math.round(valor * idx);
              _this8.active = _this8.usuario.resposta;

              if (parseInt(_this8.usuario.resposta) == element.resposta) {// element.active = true;
              }
            });

            console.log(res);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getResposta",
        value: function getResposta(resposta) {
          this.active = resposta;
          this.usuario.resposta = resposta;
          this.service.SetCampoUsuario(this.usuario).subscribe(function (res) {
            console.log(res);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return CampoComboboxComponent;
    }();

    CampoComboboxComponent.ɵfac = function CampoComboboxComponent_Factory(t) {
      return new (t || CampoComboboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_simulador_service__WEBPACK_IMPORTED_MODULE_3__["SimuladorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"]));
    };

    CampoComboboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CampoComboboxComponent,
      selectors: [["app-resposta"]],
      inputs: {
        respostas: "respostas",
        index: "index"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "campo", "index", "active", "respostaEmitter", 4, "ngFor", "ngForOf"], [3, "campo", "index", "active", "respostaEmitter"]],
      template: function CampoComboboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CampoComboboxComponent_app_campo_0_Template, 1, 3, "app-campo", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.respostas.subCampos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _campo_campo_component__WEBPACK_IMPORTED_MODULE_6__["CampoComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYWRvci9ldGFwYTEvcGVyZ3VudGEvY2FtcG8tY29tYm9ib3gvY2FtcG8tY29tYm9ib3guY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampoComboboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resposta',
          templateUrl: './campo-combobox.component.html',
          styleUrls: ['./campo-combobox.component.css']
        }]
      }], function () {
        return [{
          type: src_services_simulador_service__WEBPACK_IMPORTED_MODULE_3__["SimuladorService"]
        }, {
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"]
        }];
      }, {
        respostas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/simulador/etapa1/pergunta/campo-combobox/campo/campo.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/simulador/etapa1/pergunta/campo-combobox/campo/campo.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CampoComponent */

  /***/
  function srcAppSimuladorEtapa1PerguntaCampoComboboxCampoCampoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampoComponent", function () {
      return CampoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // import { faCircle } from '@fortawesome/free-solid-svg-icons';


    var _c0 = function _c0() {
      return ["far", "circle"];
    };

    function CampoComponent_fa_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 6);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["fas", "circle"];
    };

    function CampoComponent_fa_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 6);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var CampoComponent =
    /*#__PURE__*/
    function () {
      function CampoComponent(library) {
        _classCallCheck(this, CampoComponent);

        this.respostaEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active = false;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["far"]);
      }

      _createClass(CampoComponent, [{
        key: "onChange",
        value: function onChange() {
          this.respostaEmitter.emit(this.campo.resposta);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CampoComponent;
    }();

    CampoComponent.ɵfac = function CampoComponent_Factory(t) {
      return new (t || CampoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"]));
    };

    CampoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CampoComponent,
      selectors: [["app-campo"]],
      inputs: {
        campo: "campo",
        index: "index",
        active: "active"
      },
      outputs: {
        respostaEmitter: "respostaEmitter"
      },
      decls: 8,
      vars: 6,
      consts: [[1, "row", "align-items-center"], [1, "col-auto"], [3, "icon", 4, "ngIf"], ["type", "radio", "id", "", 3, "hidden", "value", "ngModel", "change"], ["teste", "ngModel"], [1, "col"], [3, "icon"]],
      template: function CampoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CampoComponent_fa_icon_2_Template, 1, 2, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CampoComponent_fa_icon_3_Template, 1, 2, "fa-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CampoComponent_Template_input_ngModel_4_listener($event) {
            return ctx.active;
          })("change", function CampoComponent_Template_input_change_4_listener($event) {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active != ctx.campo.resposta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active == ctx.campo.resposta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true)("value", ctx.campo.resposta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", "nome" + ctx.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.campo.texto);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
      styles: ["fa-icon[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: #85BC3C;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhZG9yL2V0YXBhMS9wZXJndW50YS9jYW1wby1jb21ib2JveC9jYW1wby9jYW1wby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaW11bGFkb3IvZXRhcGExL3Blcmd1bnRhL2NhbXBvLWNvbWJvYm94L2NhbXBvL2NhbXBvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmYS1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM4NUJDM0M7XHJcbn1cclxubGFiZWx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-campo',
          templateUrl: './campo.component.html',
          styleUrls: ['./campo.component.css']
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"]
        }];
      }, {
        campo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        respostaEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/simulador/etapa1/pergunta/pergunta.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/simulador/etapa1/pergunta/pergunta.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PerguntaComponent */

  /***/
  function srcAppSimuladorEtapa1PerguntaPerguntaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerguntaComponent", function () {
      return PerguntaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _campo_combobox_campo_combobox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./campo-combobox/campo-combobox.component */
    "./src/app/simulador/etapa1/pergunta/campo-combobox/campo-combobox.component.ts");

    function PerguntaComponent_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resposta_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resposta_r41.texto);
      }
    }

    function PerguntaComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PerguntaComponent_ng_container_2_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-resposta", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var resposta_r41 = ctx.$implicit;
        var idx_r42 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r42 == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("respostas", resposta_r41)("index", idx_r42);
      }
    }

    var PerguntaComponent =
    /*#__PURE__*/
    function () {
      function PerguntaComponent(router, route) {
        _classCallCheck(this, PerguntaComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(PerguntaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.paramMap.subscribe(function (params) {
            _this9.perguntaIndex = params.get("pergunta");
            $('[data-toggle="tooltip"]').tooltip({
              animated: 'fade',
              trigger: 'click'
            });
          });
        }
      }]);

      return PerguntaComponent;
    }();

    PerguntaComponent.ɵfac = function PerguntaComponent_Factory(t) {
      return new (t || PerguntaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PerguntaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerguntaComponent,
      selectors: [["app-pergunta"]],
      inputs: {
        pergunta: "pergunta"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "mb-4"], [4, "ngFor", "ngForOf"], ["class", "titulo mb-4", 4, "ngIf"], [1, "pergunta"], [3, "respostas", "index"], [1, "titulo", "mb-4"]],
      template: function PerguntaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PerguntaComponent_ng_container_2_Template, 4, 3, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pergunta.texto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pergunta.subCampos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _campo_combobox_campo_combobox_component__WEBPACK_IMPORTED_MODULE_3__["CampoComboboxComponent"]],
      styles: [".pergunta[_ngcontent-%COMP%]{\r\n    margin-bottom: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhZG9yL2V0YXBhMS9wZXJndW50YS9wZXJndW50YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2ltdWxhZG9yL2V0YXBhMS9wZXJndW50YS9wZXJndW50YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmd1bnRhe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerguntaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pergunta',
          templateUrl: './pergunta.component.html',
          styleUrls: ['./pergunta.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        pergunta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/simulador/etapa2/etapa2.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/simulador/etapa2/etapa2.component.ts ***!
    \******************************************************/

  /*! exports provided: Etapa2Component */

  /***/
  function srcAppSimuladorEtapa2Etapa2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Etapa2Component", function () {
      return Etapa2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Etapa2Component =
    /*#__PURE__*/
    function () {
      function Etapa2Component() {
        _classCallCheck(this, Etapa2Component);
      }

      _createClass(Etapa2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Etapa2Component;
    }();

    Etapa2Component.ɵfac = function Etapa2Component_Factory(t) {
      return new (t || Etapa2Component)();
    };

    Etapa2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Etapa2Component,
      selectors: [["app-etapa2"]],
      decls: 2,
      vars: 0,
      template: function Etapa2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "etapa2 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYWRvci9ldGFwYTIvZXRhcGEyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Etapa2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-etapa2',
          templateUrl: './etapa2.component.html',
          styleUrls: ['./etapa2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/simulador/simulador.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/simulador/simulador.component.ts ***!
    \**************************************************/

  /*! exports provided: SimuladorComponent */

  /***/
  function srcAppSimuladorSimuladorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimuladorComponent", function () {
      return SimuladorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/services/simulador.service */
    "./src/services/simulador.service.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SimuladorComponent =
    /*#__PURE__*/
    function () {
      function SimuladorComponent(service) {
        _classCallCheck(this, SimuladorComponent);

        this.service = service;
      }

      _createClass(SimuladorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SimuladorComponent;
    }();

    SimuladorComponent.ɵfac = function SimuladorComponent_Factory(t) {
      return new (t || SimuladorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]));
    };

    SimuladorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimuladorComponent,
      selectors: [["app-simulador"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container-wrapper"], [1, "container"]],
      template: function SimuladorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".container-wrapper[_ngcontent-%COMP%] {\r\n    background-image: url('background.png');\r\n    background-size: cover;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhZG9yL3NpbXVsYWRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXlEO0lBQ3pELHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaW11bGFkb3Ivc2ltdWxhZG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimuladorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simulador',
          templateUrl: './simulador.component.html',
          styleUrls: ['./simulador.component.css']
        }]
      }], function () {
        return [{
          type: src_services_simulador_service__WEBPACK_IMPORTED_MODULE_1__["SimuladorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/directives/cnpj.directive.ts":
  /*!******************************************!*\
    !*** ./src/directives/cnpj.directive.ts ***!
    \******************************************/

  /*! exports provided: CnpjDirective */

  /***/
  function srcDirectivesCnpjDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CnpjDirective", function () {
      return CnpjDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CnpjDirective =
    /*#__PURE__*/
    function () {
      function CnpjDirective(el) {
        _classCallCheck(this, CnpjDirective);

        this.el = el;
        this.decimals = 0;
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];
      }

      _createClass(CnpjDirective, [{
        key: "check",
        value: function check(value, decimals) {
          if (decimals <= 0) {
            return String(value).match(new RegExp(/^[0-9./-]+$/));
          } else {
            //   var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$"
            var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
          } // Do not use event.keycode this is deprecated.
          // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode


          var current = this.el.nativeElement.value;
          var next = current.concat(event.key);

          if (next && !this.check(next, this.decimals)) {
            event.preventDefault();
          }
        }
      }]);

      return CnpjDirective;
    }();

    CnpjDirective.ɵfac = function CnpjDirective_Factory(t) {
      return new (t || CnpjDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CnpjDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CnpjDirective,
      selectors: [["", "CnpjFilter", ""]],
      hostBindings: function CnpjDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CnpjDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        decimals: "decimals"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CnpjDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[CnpjFilter]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        decimals: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['decimals']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/directives/cpf.directive.ts":
  /*!*****************************************!*\
    !*** ./src/directives/cpf.directive.ts ***!
    \*****************************************/

  /*! exports provided: CpfDirective */

  /***/
  function srcDirectivesCpfDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CpfDirective", function () {
      return CpfDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CpfDirective =
    /*#__PURE__*/
    function () {
      function CpfDirective(el) {
        _classCallCheck(this, CpfDirective);

        this.el = el;
        this.decimals = 0;
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];
      }

      _createClass(CpfDirective, [{
        key: "check",
        value: function check(value, decimals) {
          if (decimals <= 0) {
            return String(value).match(new RegExp(/^[0-9.-]+$/));
          } else {
            //   var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$"
            var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
          } // Do not use event.keycode this is deprecated.
          // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode


          var current = this.el.nativeElement.value;
          var next = current.concat(event.key);

          if (next && !this.check(next, this.decimals)) {
            event.preventDefault();
          }
        }
      }]);

      return CpfDirective;
    }();

    CpfDirective.ɵfac = function CpfDirective_Factory(t) {
      return new (t || CpfDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CpfDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CpfDirective,
      selectors: [["", "CpfFilter", ""]],
      hostBindings: function CpfDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CpfDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        decimals: "decimals"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpfDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[CpfFilter]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        decimals: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['decimals']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/services/appsettings.ts":
  /*!*************************************!*\
    !*** ./src/services/appsettings.ts ***!
    \*************************************/

  /*! exports provided: AppSettings */

  /***/
  function srcServicesAppsettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.defaultUrl = "http://localhost:5001/api";
    };
    /***/

  },

  /***/
  "./src/services/simulador.service.ts":
  /*!*******************************************!*\
    !*** ./src/services/simulador.service.ts ***!
    \*******************************************/

  /*! exports provided: SimuladorService */

  /***/
  function srcServicesSimuladorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimuladorService", function () {
      return SimuladorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./appsettings */
    "./src/services/appsettings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SimuladorService =
    /*#__PURE__*/
    function () {
      function SimuladorService(http) {
        _classCallCheck(this, SimuladorService);

        this.http = http;
        this.appsettings = new _appsettings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]();
      }

      _createClass(SimuladorService, [{
        key: "GetSimulador",
        value: function GetSimulador() {
          var _this10 = this;

          return this.http.get(this.appsettings.defaultUrl + "Simulador/BuscarSimulador").toPromise().then(function (res) {
            _this10.simulador = res;
          });
        }
      }, {
        key: "GetTabela",
        value: function GetTabela(id) {
          return this.http.get(this.appsettings.defaultUrl + "Simulador/BuscarTabela/" + id);
        }
      }, {
        key: "GetCampoUsuario",
        value: function GetCampoUsuario(id) {
          return this.http.get(this.appsettings.defaultUrl + "Simulador/BuscarCampoUsuario/" + id);
        }
      }, {
        key: "SetCampoUsuario",
        value: function SetCampoUsuario(campoUsuario) {
          return this.http.post(this.appsettings.defaultUrl + "Simulador/GravarCampoUsuario", campoUsuario);
        }
      }, {
        key: "GetResultadoEtapa1",
        value: function GetResultadoEtapa1() {
          return this.http.get(this.appsettings.defaultUrl + "Resultados/BuscarResultado");
        }
      }, {
        key: "SendEmail",
        value: function SendEmail(data) {
          var formData = new FormData();
          formData.append("files", data, data.name);
          return this.http.post(this.appsettings.defaultUrl + "Resultados/EnviarResultadoEtapa1", formData);
        }
      }]);

      return SimuladorService;
    }();

    SimuladorService.ɵfac = function SimuladorService_Factory(t) {
      return new (t || SimuladorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SimuladorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SimuladorService,
      factory: SimuladorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimuladorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/usuario.service.ts":
  /*!*****************************************!*\
    !*** ./src/services/usuario.service.ts ***!
    \*****************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _appsettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./appsettings */
    "./src/services/appsettings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(http, fb) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.fb = fb;
        this.appsettings = new _appsettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]();
        this.formModel = this.fb.group({
          FullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Cnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
          Telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          TipoTelefone: [''],
          RazaoSocial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          TipoEmpresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Produto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Faturamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Passwords: this.fb.group({
            Senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            ConfirmSenha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
      }

      _createClass(UsuarioService, [{
        key: "comparePasswords",
        value: function comparePasswords(fb) {
          var confirmPaswrdCtrl = fb.get("ConfirmSenha"); //passwordMismatch
          //confirmPswrdCtrl.error={passwordMismatch:true}

          if (confirmPaswrdCtrl.errors == null || 'passwordMismatch' in confirmPaswrdCtrl.errors) {
            if (fb.get('Senha').value != confirmPaswrdCtrl.value) {
              confirmPaswrdCtrl.setErrors({
                'passwordMismatch': true
              });
            } else {
              confirmPaswrdCtrl.setErrors(null);
            }
          }
        } //   GetManifest(id): Observable<IManifest> {
        //     return this.http.get<IManifest>(this.appsettings.defaultUrl + id + "/manifest.json");
        //   }

      }, {
        key: "CadastrarUsuario",
        value: function CadastrarUsuario() {
          var body = {
            FullName: this.formModel.value.FullName,
            Cnpj: this.formModel.value.Cnpj,
            Senha: this.formModel.value.Passwords.Senha,
            Email: this.formModel.value.Email,
            Telefone: this.formModel.value.Telefone,
            TipoTelefone: this.formModel.value.TipoTelefone,
            TipoEmpresa: this.formModel.value.TipoEmpresa,
            RazaoSocial: this.formModel.value.RazaoSocial,
            Produto: this.formModel.value.Produto,
            Faturamento: this.formModel.value.Faturamento.replace(",", ".")
          };
          console.log(body);
          return this.http.post(this.appsettings.defaultUrl + "/Usuario/Cadastro", body);
        }
      }, {
        key: "Login",
        value: function Login(data) {
          return this.http.post(this.appsettings.defaultUrl + "/Usuario/Login", data);
        }
      }, {
        key: "GetUserProfile",
        value: function GetUserProfile() {
          return this.http.get(this.appsettings.defaultUrl + "/Usuario/BuscarUsuario");
        }
      }, {
        key: "GetAllUsuario",
        value: function GetAllUsuario() {
          return this.http.get(this.appsettings.defaultUrl + "/Usuario/BuscarUsuarios");
        }
      }, {
        key: "SendPasswordReset",
        value: function SendPasswordReset(data) {
          return this.http.post(this.appsettings.defaultUrl + "/Usuario/ResetPassword", data);
        }
      }, {
        key: "SendPasswordChanged",
        value: function SendPasswordChanged(data) {
          var response = {
            Password: data.Passwords.Password,
            Token: data.Token
          };
          return this.http.post(this.appsettings.defaultUrl + "/Usuario/MudarPassword", response);
        }
      }, {
        key: "ErrorHandler",
        value: function ErrorHandler(error) {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Server Errror");
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ɵfac = function UsuarioService_Factory(t) {
      return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuarioService,
      factory: UsuarioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/paulosegundo/OneDrive/Projetos/Javascript/simulator-web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map